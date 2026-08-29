export type QuoteTermsSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
  footerParagraphs?: string[];
};

export const quoteTermsContent = {
  title: "Quote Terms & Conditions",
  intro:
    "These terms explain how quotes, variations, equipment orders, site conditions and payment are handled by Blake Smart Solutions.",
  notice:
    "By accepting a quote, paying a deposit or instructing us to proceed, you agree to these terms.",
  sections: [
    {
      title: "Quote and Scope of Works",
      paragraphs: [
        "This quote is based on the scope of works, equipment and information stated in the quote and on conditions reasonably observable or disclosed at the time the quote was prepared.",
        "Only work and equipment specifically included in the quote are included in the quoted price. Any additional work, equipment, materials or services requested or required outside the quoted scope will be treated as a variation and may incur additional charges.",
      ],
    },
    {
      title: "Quote Validity",
      paragraphs: [
        "Unless otherwise stated, quotes are valid for 30 days from the date of issue.",
        "Pricing may be revised after this period or where supplier pricing, availability, freight charges or other material costs change before the quote is accepted.",
      ],
    },
    {
      title: "Acceptance",
      paragraphs: [
        "Acceptance of this quote, including by email, electronic approval, payment of a deposit, or instruction to proceed, constitutes acceptance of these Terms & Conditions.",
      ],
    },
    {
      title: "Deposits and Equipment Orders",
      paragraphs: [
        "Where a deposit is specified, work will not be scheduled and equipment will not normally be ordered until the deposit has been received.",
        "Special-order, configured or specifically procured equipment may not be returnable once ordered. If a customer cancels after equipment has been ordered, the customer may be responsible for reasonable costs already incurred by Blake Smart Solutions, including non-refundable supplier charges.",
      ],
    },
    {
      title: "Variations and Additional Work",
      paragraphs: [
        "Where additional work becomes necessary or is requested after commencement, Blake Smart Solutions will advise the customer where practicable before proceeding.",
        "Variations may include, but are not limited to:",
      ],
      list: [
        "additional or relocated cabling;",
        "inaccessible or obstructed cable paths;",
        "additional equipment or mounting hardware;",
        "faults in existing cabling, equipment or infrastructure;",
        "changes requested by the customer;",
        "additional labour caused by site conditions not reasonably apparent when quoted; and",
        "work required to make existing infrastructure suitable for the quoted installation.",
      ],
      footerParagraphs: [
        "Variations will be charged at the price agreed with the customer or, where no fixed variation price has been agreed, at Blake Smart Solutions' applicable labour and materials rates.",
      ],
    },
    {
      title: "Existing Infrastructure and Hidden Site Conditions",
      paragraphs: [
        "Unless expressly included in the quote, Blake Smart Solutions is not quoting to repair, replace or upgrade existing electrical, communications, networking, building or other infrastructure.",
        "Quotes assume that existing infrastructure relied upon for the installation is operational and suitable for its intended use.",
        "If concealed damage, inaccessible areas, unsuitable construction, blocked conduits, faulty cabling, electrical faults, hazardous materials or other unforeseen site conditions are discovered, Blake Smart Solutions may pause the affected work and discuss the available options and any additional costs with the customer.",
      ],
    },
    {
      title: "Access and Customer Responsibilities",
      paragraphs: [
        "The customer must provide reasonable and safe access to the areas necessary to complete the works, including access to buildings, roof spaces, communications equipment and other relevant areas where applicable.",
        "The customer is responsible for obtaining any permissions or approvals required from property owners, strata bodies, landlords or other relevant parties unless the quote specifically states otherwise.",
        "Additional attendance or labour resulting from unavailable access, cancelled appointments, incorrect information or other circumstances within the customer's control may be chargeable.",
      ],
    },
    {
      title: "Installation Location and Making Good",
      paragraphs: [
        "Equipment locations and cable routes may need to be adjusted during installation to accommodate building construction, access, safety requirements, signal performance or other site conditions.",
        "Blake Smart Solutions will take reasonable care when carrying out installation work. Unless specifically included in the quote, the price does not include painting, plastering, patching, cabinetry, landscaping or other specialist building repair or decorative making-good work.",
      ],
    },
    {
      title: "Wi-Fi, Networking and Internet Services",
      paragraphs: [
        "Network and Wi-Fi performance depends on factors outside Blake Smart Solutions' control, including building construction, interference, client devices, neighbouring networks, internet service provider performance and changes to the radio-frequency environment.",
        "Where Blake Smart Solutions supplies and installs a network or Wi-Fi solution, we will configure and test the installed system as part of commissioning. Unless expressly stated in the quote, quoted performance does not constitute a guarantee of a particular internet speed, Wi-Fi speed or wireless performance at every location or on every device.",
        "Blake Smart Solutions is not responsible for faults or performance limitations originating from third-party services or networks including NBN, Starlink, mobile networks or other internet service providers.",
      ],
    },
    {
      title: "Existing and Customer-Supplied Equipment",
      paragraphs: [
        "Where Blake Smart Solutions connects to, configures or relies upon equipment not supplied by Blake Smart Solutions, we cannot guarantee the condition, compatibility, reliability or ongoing performance of that equipment.",
        "Additional work required because customer-supplied or existing equipment is faulty, incompatible, incorrectly configured or unsuitable may be charged separately.",
      ],
    },
    {
      title: "Third-Party Products and Services",
      paragraphs: [
        "Some installations depend on third-party products, software, cloud platforms, subscriptions or internet services.",
        "Features, pricing, availability, compatibility and ongoing operation of third-party services are controlled by their respective providers and may change independently of Blake Smart Solutions.",
        "Any ongoing subscription or service charge is the customer's responsibility unless expressly included in the quote.",
      ],
    },
    {
      title: "Scheduling and Delays",
      paragraphs: [
        "Installation dates are subject to equipment availability, site access, weather, supplier delays and other circumstances reasonably outside Blake Smart Solutions' control.",
        "Where a delay occurs, Blake Smart Solutions will make reasonable efforts to reschedule or complete the works as soon as practicable.",
      ],
    },
    {
      title: "Payment",
      paragraphs: [
        "Unless otherwise stated in the quote, payment is due in accordance with the payment terms shown on the invoice.",
        "Additional works and approved variations may be invoiced separately.",
        "Equipment supplied remains the property of Blake Smart Solutions until all amounts owing for that equipment have been paid in full, to the extent permitted by law.",
      ],
    },
    {
      title: "Cancellation and Rescheduling",
      paragraphs: [
        "If the customer cancels or postpones accepted work, Blake Smart Solutions may charge reasonable costs actually incurred as a result, including non-refundable equipment, supplier charges and work already performed.",
        "Where practical, Blake Smart Solutions will take reasonable steps to minimise these costs.",
      ],
    },
    {
      title: "Completion and Fault Reporting",
      paragraphs: [
        "The customer should notify Blake Smart Solutions as soon as reasonably practicable if they believe there is a fault with the completed work.",
        "Where a reported fault is found to result from work or equipment supplied by Blake Smart Solutions, it will be addressed in accordance with applicable consumer guarantees and any applicable manufacturer warranty.",
        "Where a service call is found to relate to an unrelated fault, customer-supplied equipment, third-party service, changed configuration, damage after installation or another matter outside the original works, the attendance may be chargeable.",
      ],
    },
    {
      title: "Australian Consumer Law",
      paragraphs: [
        "Nothing in these Terms & Conditions excludes, restricts or modifies any consumer guarantee, right or remedy that cannot lawfully be excluded under the Australian Consumer Law or any other applicable law.",
      ],
    },
  ] satisfies QuoteTermsSection[],
};
