import Link from "next/link";
import React from "react";
import PortfolioCategory from "./PortolioCategory";
const PortfolioSectionTwo = ({
  page,
  item,
  limit,
  data,
  portfolioSingular,
}) => {
  let allTab = portfolioSingular
    ? [
        {
          title: "View All",
          dataBsTarget: "#nav-home",
          ariaControls: "",
        },
      ]
    : [
        {
          title: "View All",
          dataBsTarget: "#nav-home",
          ariaControls: "",
        },
        {
          title: "Web Dev",

          dataBsTarget: "#nav-webdev",
          ariaControls: "nav-webdev",
        },
        {
          title: "Web Design",

          dataBsTarget: "#nav-webdesign",
          ariaControls: "nav-webdesign",
        },
        {
          title: "Video Edit",

          dataBsTarget: "#nav-videoedit",
          ariaControls: "nav-videoedit",
        },
        {
          title: "Discord Management",

          dataBsTarget: "#nav-discordmanagement",
          ariaControls: "nav-discordmanagement",
        },
        {
          title: "Discord Dev",

          dataBsTarget: "#nav-discorddev",
          ariaControls: "#nav-discorddev",
        },
        {
          title: "System Integration",

          dataBsTarget: "#nav-systemint",
          ariaControls: "nav-systemint",
        },
      ];

  return (
    <section
      style={{ backgroundColor: "#fafafa" }}
      className="portfolio_section section_space_lg"
    >
      <div className="decoration_wrap">
        <div className="container">
          <div className="section_heading style_2 text-center">
            <h2 className="heading_subtitle">
              <span style={{ color: "black" }}> Portfolio</span>
            </h2>
            <h3 style={{ color: "black" }} className="heading_title mb-0">
              {item?.title ? `${item.title} Works ` : "My Best Works"}
            </h3>
          </div>
          <div className="button-group filters-button-group style_2">
            <div className="portfolio_button">
              <nav>
                <div className="nav" id="nav-tab" role="tablist">
                  {allTab.map((tab, index) => (
                    <button
                      key={index + 1}
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target={tab.dataBsTarget}
                      type="button"
                      role="tab"
                      aria-controls={tab.ariaControls}
                      aria-selected="true"
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={"active show"}
              data={data.all}
              catID="nav-home"
              arialabelledby={"nav-home-tab"}
            />
          </div>
          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={" "}
              data={data.webDev}
              catID="nav-webdev"
              arialabelledby={"nav-webdev-tab"}
            />
          </div>
          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={" "}
              data={data.webDesign}
              catID="nav-webdesign"
              arialabelledby={"nav-webdesign-tab"}
            />
          </div>

          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={" "}
              data={data.videoEdit}
              catID="nav-videoedit"
              arialabelledby={"nav-videoedit-tab"}
            />
          </div>

          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={" "}
              data={data.discordManagement}
              catID="nav-discordmanagement"
              arialabelledby={"nav-discordmanagement-tab"}
            />
          </div>

          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={" "}
              data={data.discordDev}
              catID="nav-discorddev"
              arialabelledby={"nav-discorddev-tab"}
            />
          </div>

          <div className="tab-content" id="nav-tabContent">
            <PortfolioCategory
              active={" "}
              data={data.systemInt}
              catID="nav-systemint"
              arialabelledby={"nav-systemint-tab"}
            />
          </div>
        </div>
        <div
          className="deco_item shape_1"
          data-parallax='{"y" : 200, "smoothness": 20}'
        >
          <img
            src="assets/images/shapes/shape_box_1.png"
            alt="Paradox Illustration"
          />
        </div>
        <div
          className="deco_item shape_2"
          data-parallax='{"y" : -200, "smoothness": 20}'
        >
          <img
            src="assets/images/shapes/shape_box_2.png"
            alt="Paradox Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionTwo;
