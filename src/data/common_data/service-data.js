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
    description:
      "Our web development expertise shines through meticulous code craftsmanship, ensuring optimal performance and scalability. We specialize in delivering seamless user experiences that set your digital presence apart.",
    btn_icon: btn_icon_2,
    fullTitle: "Website Development",
    service_facts: [
      "Clean code / structure",
      "Seamless Third party Integration.",
      "Developer / User friendly documentation",
    ],

    specific_service: [
      {
        title: "Webflow",
        icon: icon_together,
        description: `We believe on  designer first approach and excel in Webflow development, seamlessly blending creativity and functionality.`,
      },
      {
        title: "Nextjs",
        icon: icon_together,
        description: `3+yrs expertise in Next.js development, where we excel in crafting dynamic and high-performance applications. Ensuring cutting-edge and user-friendly website.`,
      },
      {
        title: "Gatsbyjs",
        icon: icon_together,
        description: `Our proficiency in Gatsby allows us to deliver high-performance solutions, leveraging its power to create lightning-fast and scalable websites.`,
      },
      {
        title: "Wordpress ",
        icon: icon_together,
        description: `Utilizing its versatile platform to create customizable, user-friendly websites. We harness the full potential of WordPress to enhance your digital presence.`,
      },
    ],
    QandA: [
      {
        title: "How long the development takes?",
        answer: `Ballpark estimations for web development projects can vary widely based on complexity, features, and specific requirements. Simple business website would take 4-6 weeks and larger than that can take 10+ weeks
       
          `,
      },
      {
        title:
          "Can you handle website maintenance and updates after the initial development?",

        answer: `Absolutely. We offer comprehensive website maintenance and support services, ensuring that your website remains up-to-date, secure, and optimized for performance even after the initial development phase.`,
      },
      {
        title: "How much the development cost?",

        answer: `Ballpark estimation are: Business website costs might range from $5,000 to $15,000. Medium-Sized Project: A more complex website or web application could cost between $15,000 and $50,000.`,
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
    fullTitle: "Website Design",
    description: `We redefine digital aesthetics with our web design expertise. From the inception of innovative concepts using tools like Figma and Adobe XD to client-centric collaboration, we prioritize crafting visually stunning interfaces that resonate with brand identity. Our designs go beyond aesthetics, incorporating responsiveness and accessibility to ensure a seamless and inclusive user experience."    `,
    service_facts: [
      "Responsive and Accessible Design",
      "Client-Centric Collaboration",
      "Customer first Design Approach",
    ],
    specific_service: [
      {
        title: "General UX/UI",
        icon: icon_together,
        description: `Meticulously designed with user experience in mind using Figma/Adobe XD, we ensure seamless navigation and engagement across various platforms.`,
      },
      {
        title: "B2B Design",
        icon: icon_together,
        description: `Elevate your brand. We specialize in crafting professional websites that not only showcase your business but also resonate to your target audience`,
      },
      {
        title: "Web/Mobile Apps",
        icon: icon_together,
        description: `Harness the power of innovation with our Web/Mobile Apps Design expertise. Whether it's a responsive web application or a sleek mobile app.`,
      },
      {
        title: "Landing Page",
        icon: icon_together,
        description: `Make a lasting first impression with our Landing Page designs. Optimized for conversions, our designs are crafted to captivate and engage visitors.`,
      },
    ],
    QandA: [
      {
        title: "Can you handle responsive design for various devices?",
        answer: `Absolutely. Responsive design is at the core of our approach. We ensure that our designs adapt seamlessly to different screen sizes and devices, providing a consistent and optimized experience for users across desktops, tablets, and mobile devices.

        `,
      },
      {
        title:
          "What tech stack do you use for web design, and how do you handle the handover after the design phase?",

        answer: `Our web design tech stack includes industry-leading tools such as Figma and Adobe XD for design conceptualization. Once the design phase is complete, we provide comprehensive handovers, delivering design files in the preferred format for seamless integration into the chosen development environment. This ensures a smooth transition from design to development, maintaining the integrity of the visual elements throughout the implementation process.`,
      },
      {
        title: "How long does the web design process typically take?",

        answer: `The duration of the web design process varies based on the complexity and scope of the project. Generally, it can range from a few weeks for simpler designs to several months for more intricate projects. We work closely with clients to establish clear timelines during the planning phase, ensuring timely delivery while maintaining a high standard of design excellence.`,
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
    description: `Elevate your visual storytelling with our expert video editing services tailored for shorts, reels, and TikTok content. We specialize in crafting dynamic and engaging videos that captivate audiences and leave a lasting impression.`,
    fullTitle: "Video Editing",
    service_facts: [
      "Strategic Storytelling",
      "Platform Optimization",
      "Captivating results",
    ],
    specific_service: [
      {
        title: "Youtube shorts",
        icon: icon_together,
        description: `Dive into the world of YouTube Shorts with our specialized video editing services designed to elevate your short-form content game.`,
      },
      {
        title: "Instagram reels",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
      {
        title: "Tiktok Edits",
        icon: icon_together,
        description: `Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.`,
      },
    ],
    QandA: [
      {
        title:
          "What is the typical turnaround time for receiving my edited videos?",
        answer: `Timeliness is a priority for us. Our efficient editing process ensures quick turnaround times, allowing you to promptly share timely and high-quality videos that resonate with your audience. `,
      },
      {
        title: "What is the pricing structure for your video editing services?",

        answer: `Our pricing structure is tailored to the specific needs of your project. Factors such as video duration, complexity, and additional services required contribute to the final quote. Get in touch with us for a customized quote based on your unique requirements.`,
      },
      {
        title: " Do you offer packages for bulk or ongoing editing services?",

        answer: `Yes, we offer packages for bulk or ongoing services. These packages are designed to provide cost savings and continuity for clients with recurring editing needs. Contact us to discuss your specific requirements, and we can tailor a package to suit your content strategy.`,
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
    description: `Transform your Discord community into a thriving hub of engagement with our comprehensive Discord Channel Management service. From setup to ongoing moderation, we handle the intricate details, ensuring your Discord channel becomes a vibrant space for your community to connect, communicate, and grow.`,
    fullTitle: "Discord Channel Management",
    service_facts: [
      "Active Moderation and Community Engagement",
      "Content Curation and Event Promotion",
      "Analytics and Feedback Insights",
    ],
    specific_service: [
      {
        title: "Management/Engageement",
        icon: icon_together,
        description: `We handle the day-to-day operations, fostering a positive atmosphere, moderating discussions, and actively engaging with community members. `,
      },
      {
        title: "Growth Strategy",
        icon: icon_together,
        description: `Take your Discord community to new heights with our Growth Strategy Implementation service. We work to execute tailored strategies `,
      },
      {
        title: "Event promotion strategy",
        icon: icon_together,
        description: `Elevate your Discord experience with our Event Promotion Strategy. We craft and implement dynamic strategies to promote and host events within your community.`,
      },
    ],
    QandA: [
      {
        title:
          "How can I get started with your Discord Channel Management services?",
        answer: `Getting started is easy! Reach out to us through our contact page or inquiry form, and our team will respond promptly. We'll discuss your specific needs, provide a customized proposal, and guide you through the process of enhancing your Discord community experience.        `,
      },
      {
        title:
          "How long does it take to see results from your Discord Channel Management services?",

        answer: `The timeline to see results can vary based on factors such as the existing state of your community, the implemented strategies, and the overall goals. However, many clients experience noticeable improvements in engagement and community dynamics within the first few weeks of implementing our Discord Channel Management services.`,
      },
      {
        title:
          "Can I expect an immediate increase in member engagement after implementing your Discord Channel Management services?",

        answer: `While immediate results can vary, our Discord Channel Management services are designed to enhance engagement quickly. The implementation of active moderation, strategic content, and engagement initiatives often leads to an initial boost in community activity.`,
      },
    ],
  },
  {
    id: 23,
    slug: "discord-development",
    icon: <ServiceIconFive />,
    title: "Discord Channel",
    titleTwo: "Development",
    description: `Unlock the full potential of your Discord server with our comprehensive Discord Development Services. Whether you're seeking to create custom bots, develop unique channels, or enhance the overall functionality of your server, our experienced developers are here to turn your vision into reality.`,
    btn_icon: btn_icon_2,
    fullTitle: "Discord Development",
    service_facts: [
      "Tailored Solutions for Diverse Needs",
      "Interactive and Engaging Features:",
      "Ongoing Support and Adaptability",
    ],
    specific_service: [
      {
        title: "Custom Bot Development  ",
        icon: icon_together,
        description: `Empower your server with tailored bots designed to meet your specific needs. From moderation and automated tasks to interactive games and engagement features.`,
      },

      {
        title: "Channel Creation & Optimize",
        icon: icon_together,
        description: `Transform your server layout with strategically designed channels that optimize user experience. Our developers create and optimize channels based on your server's objectives.

        `,
      },
      {
        title: "Integration of Features",
        icon: icon_together,
        description: `Elevate your server's functionality. Whether it's integrating APIs, creating interactive commands, or implementing unique moderation tools, we bring a wealth of expertise to enhance your Discord server.`,
      },
    ],
    QandA: [
      {
        title:
          "How do you ensure ongoing support and maintenance for the implemented features?",
        answer: `Our commitment extends beyond development. We provide ongoing support and maintenance to ensure the smooth operation of your Discord features. Whether it's addressing technical issues, implementing updates, or adding new functionalities, we are dedicated to the long-term success of your Discord server.`,
      },
      {
        title:
          "How can I get started with your Discord Development Services for my server?",

        answer: `Getting started is simple. Reach out to us through our contact page or inquiry form. We'll promptly discuss your project requirements, provide a customized proposal, and guide you through the process of enhancing your Discord community experience with our development services.`,
      },
    ],
  },
  {
    id: 24,
    icon: <ServiceIconSix />,
    slug: "system-integration",
    title: "System Automation /",
    titleTwo: "Integration",
    btn_icon: btn_icon_2,
    description: `Unlock the full potential of your business processes with our comprehensive system automation and integration services. Leveraging cutting-edge tools and platforms, we seamlessly connect and automate workflows to enhance efficiency and drive productivity.`,
    fullTitle: "System Integration / Automation",
    service_facts: [
      "Automate Workflow",
      "Integrate 3rd party apps",
      "More work accuracy",
    ],
    specific_service: [
      {
        title: "Zapier Integration",
        icon: icon_together,
        description: `Leverage Zapier to create connections between your  applications. Our expertise in Zapier allows us to design custom workflows that automate repetitive tasks.`,
      },
      {
        title: "Google App Script Solutions",
        icon: icon_together,
        description: `With Google App Script, we bring automation to your G Suite applications. Our custom scripts enhance the functionality of Google Workspace.`,
      },
      {
        title: "Mailchimp Integration",
        icon: icon_together,
        description: `Optimize your marketing efforts with Mailchimp integration. We design seamless connections between Mailchimp and your existing systems.`,
      },
      {
        title: "Dubsado Workflow Automation",
        icon: icon_together,
        description: `Tansform your client management with Dubsado workflow automation. We tailor  to meet your specific needs, automating , invoicing, and project management.`,
      },
    ],
    QandA: [
      {
        title:
          "What is the primary benefit of utilizing Zapier in system automation?",
        answer: `Zapier simplifies system automation by enabling seamless connections between different applications, automating repetitive tasks, and ensuring efficient data flow across systems.`,
      },
      {
        title:
          "How does Google App Script enhance workflow automation within G Suite applications?",

        answer: `Google App Script serves as a powerful tool for workflow automation within G Suite. By creating custom scripts, we optimize processes, automate tasks, and enhance collaboration across Google Workspace applications, tailoring them to your specific needs.`,
      },
      {
        title:
          "How does Dubsado workflow automation transform client management processes?",

        answer: `Dubsado workflow automation revolutionizes client interactions, invoicing, and project management. Our tailored approach ensures that Dubsado aligns seamlessly with your business processes, optimizing client management for increased efficiency and organization.`,
      },
    ],
  },
];
export default service_data;
