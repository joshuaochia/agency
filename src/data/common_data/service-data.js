import btn_icon_2 from "@assets/images/icons/icon_arrow_down_right_white.svg";

import ServiceIconOne from "@svg/service-icon-1";
import ServiceIconTwo from "@svg/service-icon-2";
import ServiceIconThere from "@svg/service-icon-3";
import ServiceIconFour from "@svg/service-icon-4";
import ServiceIconFive from "@svg/service-icon-5";
import ServiceIconSix from "@svg/service-icon-6";
import icon_together from "@assets/images/icons/icon_together_primary.svg";

const service_data = [
  {
    id: 19,
    slug: "web-development",
    icon: <ServiceIconOne />,
    title: "Web Development",
    titleTwo: "Planning",
    description: "We help generate positive cash flow and use revenue data",
    btn_icon: btn_icon_2,
    fullTitle: "Website Development",
    service_facts: [
      "Front-end web development is responsible for the look",
      "Back-end web development",
      "Testing and debugging code requires patience",
    ],
    specific_service: [
      {
        title: "UX",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
  },
  {
    id: 20,
    slug: "web-design",
    icon: <ServiceIconTwo />,
    title: "Web Design",
    titleTwo: "Service",
    btn_icon: btn_icon_2,
    fullTitle: "Consulting Service",
    service_facts: [
      "Front-end web development is responsible for the look",
      "Back-end web development",
      "Testing and debugging code requires patience",
    ],
    specific_service: [
      {
        title: "UX",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
  },
  {
    id: 21,

    slug: "video-edit",
    icon: <ServiceIconThere />,
    title: "Video / Shorts",
    titleTwo: "Editing",
    btn_icon: btn_icon_2,
    fullTitle: "Sales & Marketing",
    service_facts: [
      "Front-end web development is responsible for the look",
      "Back-end web development",
      "Testing and debugging code requires patience",
    ],
    specific_service: [
      {
        title: "UX",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
  },
  {
    id: 22,
    slug: "discord-management",
    icon: <ServiceIconFour />,
    title: "Discord Channel",
    titleTwo: "Management",
    btn_icon: btn_icon_2,
    fullTitle: "Inventory Management",
    service_facts: [
      "Front-end web development is responsible for the look",
      "Back-end web development",
      "Testing and debugging code requires patience",
    ],
    specific_service: [
      {
        title: "UX",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
  },
  {
    id: 23,
    slug: "discord-development",
    icon: <ServiceIconFive />,
    title: "Discord Channel",
    titleTwo: "Development",
    btn_icon: btn_icon_2,
    fullTitle: "Best Cost Reductions",
    service_facts: [
      "Front-end web development is responsible for the look",
      "Back-end web development",
      "Testing and debugging code requires patience",
    ],
    specific_service: [
      {
        title: "UX",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
  },
  {
    id: 24,
    icon: <ServiceIconSix />,
    slug: "system-automation",
    title: "System Automation /",
    titleTwo: "Integration",
    btn_icon: btn_icon_2,
    fullTitle: "Save More Money",
    service_facts: [
      "Front-end web development is responsible for the look",
      "Back-end web development",
      "Testing and debugging code requires patience",
    ],
    specific_service: [
      {
        title: "UX",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
  },
];
export default service_data;
