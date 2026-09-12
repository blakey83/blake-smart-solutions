import type { WifiSitelinkPage } from "./wifiSitelinks";

export const starlinkSitelinkPages: WifiSitelinkPage[] = [
{
  "slug": "business-starlink-installation",
  "metadata": {
    "title": "Business Starlink Installation Perth | Blake Smart Solutions",
    "description": "Starlink installation for Perth offices, shops and workshops. Roof mounting, neat cabling, setup and testing, with a fixed quote before booking."
  },
  "h1": "Starlink Installation for Perth Businesses",
  "subhead": "Get your business’s Starlink kit professionally mounted, neatly cabled and tested. Blake Smart Solutions plans and installs Starlink for offices, shops, workshops and small commercial premises across Perth, with a clear scope and fixed installation quote before booking.",
  "bullets": [
    "Plan dish placement around clear sky view and a practical cable route",
    "Securely mount your customer-supplied Starlink kit",
    "Bring cabling inside neatly and protect exposed sections",
    "Set up and test the connection before handover",
    "Assess existing network connections and any extra Wi-Fi work",
    "Agree the installation scope, price and access before booking"
  ],
  "heroCtaLines": [
    "Tell us your suburb, premises type and whether you already have your Starlink kit.",
    "We’ll discuss the installation and arrange a site assessment if needed, with any assessment costs agreed beforehand."
  ],
  "enquiryName": "Business Starlink Installation Quote",
  "heroImage": "/images/solutions/starLink/business/henderson-starlink-roof-mount.png",
  "heroImageAlt": "Starlink dish mounted on a commercial metal roof in Bibra Lake",
  "review": {
    "quote": "A big thank you to Daniel from Blake Smart Solutions. His communication was excellent, he was on time, and he went above and beyond to help us with our data connections. Nothing was ever too much trouble, and his advice was always spot on. Highly recommend his services.",
    "author": "Mark Anthony"
  },
  "problem": {
    "title": "Your Starlink kit needs a practical place in your business.",
    "paragraphs": [
      "You’ve chosen Starlink for your premises, but the dish still needs a suitable mounting position, the cable needs a route inside and the router needs to connect where your team works. Roof access, nearby obstructions and the building layout all affect the installation.",
      "We assess those details before starting. If your main concern is poor Wi-Fi inside the building, we also check whether the issue is local coverage rather than the incoming internet connection, so the proposed work addresses the right problem."
    ]
  },
  "solution": {
    "title": "A clear installation plan for your premises",
    "paragraphs": [
      "We start with the Starlink kit you have, your roof type, the available sky view and where the connection is needed inside. From there, we agree the mounting method, cable route and setup work.",
      [
        "If you need coverage beyond the Starlink router, we can quote ",
        {
          "text": "business Wi-Fi and network installation",
          "href": "/wifi-solutions-perth/business-wifi-installation"
        },
        " separately. Existing network integration depends on the equipment already installed and the connections your business needs."
      ],
      "You receive a fixed quote for the agreed installation scope. We discuss access and any expected interruption before booking, then test the installed connection and explain the setup at handover."
    ],
    "points": [
      "Dish placement and mounting assessment",
      "Suitable mounting hardware specified in your quote",
      "Neat cable routing and protection where needed",
      "Starlink setup and connection testing",
      "Optional Wi-Fi and network work quoted separately",
      "Practical handover and local help by arrangement"
    ]
  },
  "useCases": [
    {
      "title": "Offices and consulting rooms",
      "description": "Plan the dish, cable entry and router location around desks, reception and meeting areas, with any additional Wi-Fi requirements identified before quoting."
    },
    {
      "title": "Shops and small commercial premises",
      "description": "Arrange mounting and cabling around customer areas and agreed access times, with existing business network connections considered in the scope."
    },
    {
      "title": "Workshops and small warehouses",
      "description": "Bring the connection into the office or agreed work area. Identify where metal walls or the premises layout may require additional Wi-Fi equipment."
    }
  ],
  "whyProperly": {
    "title": "Plan the connection from the roof to the work area",
    "paragraphs": [
      "A secure roof mount is one part of the job. Dish obstructions, exposed cabling and router placement can all affect the finished setup. We plan these together so the installation suits the premises.",
      "Installing Starlink does not automatically improve Wi-Fi throughout a building. Where extra access points, cabling or network changes are needed, we explain the options and include only the work you agree to in the quote."
    ]
  },
  "proof": {
    "image": "/images/solutions/starLink/business/bibra-lake-starlink-roof-mount.jpg",
    "imageAlt": "Starlink dish and braced roof mount at a Henderson premises",
    "title": "Check the premises. Agree the work. Test the connection.",
    "intro": "The installation starts with a practical assessment of the site and ends with a handover of the agreed setup.",
    "problem": "Establish where the dish can be mounted, how the cable will enter and where your business needs the connection.",
    "solution": "Agree the mounting, cable route and setup, identifying any additional network equipment or access arrangements before installation.",
    "result": "Test the installed connection at handover, explain the equipment and identify any remaining coverage limitations."
  },
  "faqs": [
    {
      "question": "Do we need to supply our own Starlink kit?",
      "answer": "Yes. We install customer-supplied Starlink equipment. Tell us which kit you have and whether it has arrived so we can confirm the mounting and installation requirements. Your Starlink service subscription is arranged separately."
    },
    {
      "question": "How much does a business Starlink installation cost?",
      "answer": "We quote for your premises based on roof access, mounting hardware, cable routing and setup requirements. Any additional Wi-Fi or network work is priced separately in the scope. We agree assessment costs before a visit and provide a fixed quote for the agreed work before booking."
    },
    {
      "question": "Can you install Starlink at leased premises?",
      "answer": "We can assess a leased premises, but you will need to arrange any required landlord or building manager permission for roof access, mounting and cable entry before installation."
    },
    {
      "question": "Can Starlink connect to our existing business network?",
      "answer": "Often, but the requirements depend on your Starlink kit and existing router, firewall and network equipment. We review the proposed connection and quote any additional equipment or configuration needed. If an IT provider manages the network, we agree the changes with them before work starts."
    },
    {
      "question": "Will the Starlink router cover the whole premises?",
      "answer": "Coverage depends on the building layout, wall materials and where devices are used. We assess the areas you need covered and can quote additional access points or cabling where appropriate."
    },
    {
      "question": "Can you plan the installation around opening hours?",
      "answer": "We discuss site access and any likely connectivity interruption before booking. Suitable times are agreed as part of the installation scope and depend on availability."
    },
    {
      "question": "Can you guarantee our business internet speed?",
      "answer": "We test the connection at handover, but cannot guarantee an ongoing speed or uninterrupted service. Performance depends on the Starlink service, sky view, conditions and your local network."
    },
    {
      "question": "What happens after installation?",
      "answer": "We explain the installed setup and how to contact us for further help. Follow-up troubleshooting and network changes can be arranged, with availability and charges confirmed when booked. Starlink account and service issues remain with Starlink."
    }
  ],
  "finalTitle": "Get Starlink installed at your business premises"
}
];

export const starlinkSitelinkPagesBySlug = Object.fromEntries(
  starlinkSitelinkPages.map((page) => [page.slug, page]),
) as Record<string, WifiSitelinkPage>;
