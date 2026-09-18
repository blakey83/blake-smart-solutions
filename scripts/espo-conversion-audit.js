/*
 * Paste this whole file into DevTools Console on the logged-in EspoCRM site.
 * Reads configuration only. It never creates, edits, converts or deletes records.
 * No customer records, credentials, formula bodies or field defaults are printed.
 */
(async () => {
  if (
    location.origin !== "https://crm.blakesmartsolutions.com.au" ||
    typeof Espo === "undefined" || !Espo.Ajax?.getRequest
  ) {
    throw new Error("Run this in the logged-in Blake Smart Solutions CRM tab.");
  }

  const metadata = await Espo.Ajax.getRequest("Metadata");
  if (!metadata?.scopes || !metadata?.entityDefs) {
    throw new Error("Metadata did not include scopes and entityDefs; no conclusions can be drawn.");
  }

  const pick = (object, keys) => Object.fromEntries(
    keys.filter(key => Object.hasOwn(object || {}, key)).map(key => [key, object[key]])
  );
  const scopes = metadata.scopes;
  const defs = metadata.entityDefs;
  const candidates = Object.keys(defs).filter(entity =>
    ["Lead", "Opportunity"].includes(entity) ||
    scopes[entity]?.isCustom === true || scopes[entity]?.custom === true ||
    /^C[A-Z]/.test(entity) || /job|project|workorder/i.test(entity)
  );
  const report = {
    audit: "BSS CRM conversion configuration inventory v1",
    readAt: new Date().toISOString(),
    limitations: [
      "Metadata is filtered by the session's access; absence is not proof of non-existence.",
      "Formula bodies, server hooks, workflow actions and record behavior still require inspection.",
      "No qualification definition, attribution preservation or timestamp persistence has been verified."
    ],
    entityTypes: Object.entries(scopes)
      .filter(([, scope]) => scope.entity === true)
      .map(([entity, scope]) => ({entity, ...pick(scope, ["type", "module", "isCustom", "custom", "disabled"])})),
    automationScopes: Object.keys(scopes).filter(name => /workflow|bpmn|process|flowchart/i.test(name)),
    entities: {}
  };

  for (const entity of candidates) {
    const definition = defs[entity];
    const fields = definition.fields || {};
    const client = metadata.clientDefs?.[entity] || {};
    report.entities[entity] = {
      fields: Object.fromEntries(Object.entries(fields).map(([name, field]) => [name, {
        ...pick(field, ["type", "entity", "link", "required", "readOnly", "readOnlyAfterCreate",
          "notStorable", "audited", "maxLength", "decimal", "min", "max", "disableCurrencyConversion"]),
        ...(/status|stage/i.test(name) ? pick(field, ["options", "optionsReference", "notActualOptions"]) : {})
      }])),
      links: Object.fromEntries(Object.entries(definition.links || {}).map(([name, link]) =>
        [name, pick(link, ["type", "entity", "foreign", "relationName", "readOnly", "audited"])])),
      ...pick(definition, ["convertEntityList", "convertFields"]),
      client: pick(client, ["controller", "views", "recordViews", "dynamicHandler",
        "dynamicHandlerList", "viewSetupHandlers"]),
      // Names and handlers identify custom actions without printing action payloads.
      detailActions: (client.detailActionList || []).map(action => typeof action === "string" ? action :
        pick(action, ["name", "handler", "actionFunction", "view"])),
      relationshipPanels: Object.fromEntries(Object.entries(client.relationshipPanels || {}).map(([name, panel]) =>
        [name, pick(panel, ["view", "createHandler", "create", "select", "readOnly"])]))
    };
  }

  // Same read-only admin endpoint used by Espo's Entity Manager formula editor.
  // Report presence only: formulas can contain URLs, credentials or customer data.
  await Promise.all(candidates.map(async entity => {
    try {
      const formulas = await Espo.Ajax.getRequest("Metadata/action/get", {key: "formula." + entity});
      report.entities[entity].formulas = Object.fromEntries(
        ["beforeSaveCustomScript", "beforeSaveApiScript"].map(key =>
          [key, {configured: typeof formulas?.[key] === "string" && formulas[key].trim().length > 0}])
      );
    } catch (error) {
      report.entities[entity].formulas = {readFailed: true, httpStatus: error?.status ?? null};
    }
  }));

  console.log(JSON.stringify(report, null, 2));
})().catch(error => console.error("CRM configuration audit failed", {
  httpStatus: error?.status ?? null,
  // Never dump an API error response body.
  message: "Run in the logged-in CRM tab with network access and administrator permissions; no conclusions can be drawn from this failed read."
}));
