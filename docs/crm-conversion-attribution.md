# Lead → Opportunity → Job attribution

## Status — inspection pending

Requested on 18 September 2026: preserve the Lead's `cCGoogleAdsClickId` through conversion, retain qualification and win timestamps once, and retain job value and currency. Google Ads export is outside this task.

The website repository only creates Leads; it contains no Espo server source, Opportunity conversion or Job creation implementation. No CRM connector or connected browser was available during this inspection. The live CRM configuration has **not** yet been audited or changed, and synthetic conversion tests have **not** been run. The website's previously verified GCLID mapping remains unchanged.

## Read-only configuration inventory

Open the logged-in CRM as an administrator. Paste the whole contents of [the audit script](../scripts/espo-conversion-audit.js) into DevTools Console. It works from any CRM page and does not derive a record ID from the current URL. Copy the resulting JSON text for inspection.

The script reads Metadata and the formula editor's read-only metadata endpoint. It inventories Lead, Opportunity, likely Job entities and custom entities, including exact field names/types, status/stage options, relationships, conversion mappings, custom view references and formula-presence flags. It prints no customer records, field defaults, formula bodies or credentials. A permission error is recorded as unknown, not treated as absent configuration.

After identifying the actual entities, inspect their existing formulas, active workflows/BPM, and any custom conversion handlers/hooks. The metadata inventory alone cannot establish how Jobs are created or how records behave. Do not replace existing formula bodies or add a second Job-creation rule without inspecting those implementations.

## Findings from upstream Espo, not yet verified on this instance

- Standard Lead conversion keeps the Lead and records the converted entities. The current upstream schema uses `Lead.createdOpportunity` and `Opportunity.originalLead`. Reusing that relationship could preserve access to the Lead's click ID without adding a duplicate field. See [sales management](https://docs.espocrm.com/user-guide/sales-management/) and [Lead metadata](https://github.com/espocrm/espocrm/blob/master/application/Espo/Modules/Crm/Resources/metadata/entityDefs/Lead.json).
- The upstream [`ConvertedAt` hook](https://github.com/espocrm/espocrm/blob/master/application/Espo/Modules/Crm/Hooks/Lead/ConvertedAt.php) fills an empty `convertedAt` when status changes to Converted. This is a candidate to reuse **only if conversion is the business's qualification event** and the installed behavior matches. A separate Qualified status requires its own existing or new milestone field.
- Opportunity's `closeDate` is a Date field, while a milestone needs the actual event time. Inspect existing datetime fields before introducing another one. Currency fields have separate value and currency attributes; preserve both. See [Opportunity metadata](https://github.com/espocrm/espocrm/blob/master/application/Espo/Modules/Crm/Resources/metadata/entityDefs/Opportunity.json) and [formula attribute naming](https://docs.espocrm.com/administration/formula/).
- [GET Metadata](https://docs.espocrm.com/development/api/metadata/) can omit internal definitions. A clean inventory is not proof that no server hooks/workflows exist.

## Decisions that need the live configuration

1. Identify the exact qualification transition and won stage from the existing process. Establish whether records created directly in those states count. Do not infer qualification from every enquiry or opportunity edit.
2. Reuse an existing Lead → Opportunity → Job relationship chain if it survives the normal creation/conversion path. Otherwise extend the existing mapping or creation handler. Preserve the original Lead ID and exact click ID; do not infer attribution by name, email or the latest record for an Account.
3. Reuse existing milestone datetimes where their semantics and behavior match. Populate a missing milestone on the first qualifying transition. Preserve a previously saved milestone on unrelated edits, stage reversal and re-entry. Do not stamp legacy records simply because they are edited after configuration is installed. Intentional historical backfill requires evidence of the original event time.
4. Identify the current Job value field and paired currency attribute. Keep zero valid and distinguish it from an unknown amount. Keep the value/currency together when creating a Job. Determine whether the existing Opportunity win value is already retained or needs an initial-win snapshot; later Job revisions must not silently rewrite that historical amount.
5. Integrate with existing server-side save behavior so UI, conversion, API and automation paths agree. Preserve current formulas/hooks and avoid recursive saves or duplicate Job creation. Review the installed Espo version and normal user permissions before applying configuration.

## Synthetic acceptance checks — not yet run

Use separately named `Attribution Flow Test — Do Not Contact` records with a unique synthetic click ID. Use an isolated CRM/test environment where available; inspect notifications and integrations before exercising existing automations. No website enquiry or email submission is needed for these checks.

| Operation | Required read-back result |
| --- | --- |
| Create an unqualified synthetic Lead | Exact click ID retained; qualification timestamp empty. |
| Perform the real qualification action | Actual event datetime recorded; original Lead remains identifiable. |
| Edit unrelated fields; reverse and repeat qualification | Original qualification datetime unchanged. |
| Convert through the existing Lead conversion UI/service | Opportunity resolves to the original Lead and exact click ID. |
| Mark Opportunity won through its existing stage action | First win datetime recorded; amount and currency retained together. |
| Edit, reopen and win again | First win datetime remains unchanged; agreed original-win value policy holds. |
| Create Job through the existing process | Job has a durable path to the original Lead or copied attribution; correct value and currency; only the expected number of Jobs. |
| Edit Job | Attribution, milestone dates and source relationships persist. |
| Repeat without GCLID and with zero value | No fabricated attribution; zero preserved rather than treated as missing. |
| Ordinary edit of a record already qualified/won before installation | No invented current-time historical milestone. |
| Repeat using normal CRM permissions | The flow works without requiring administrator privileges for ordinary record changes. |

For each test, record the synthetic record IDs, action time, before/after API reads, exact relationship/field names and pass/fail result. Leave Google Ads delivery disabled/unimplemented. Record installed configuration paths or administration steps and any remaining limitations here after live inspection and testing.
