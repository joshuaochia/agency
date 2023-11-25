import React from "react";
import about_image_1 from "@assets/images/about/first_about_image.png";
import shape_circle_2 from "@assets/images/shapes/shape_circle_2.svg";
import Image from "next/image";
import Link from "next/link";

const DetailsAboutSection = () => {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="about_section section_space_lg pb-0 decoration_wrap"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6">
            <div className="about_image decoration_wrap mb-4 mb-lg-0 text-center">
              <Image
                className="wow fadeInLeft"
                data-wow-delay=".1s"
                src={about_image_1}
                style={{ width: "100%", height: "100%" }}
                alt="Paradox - About Image"
              />
              <div className="deco_item shape_1">
                <Image
                  className="wow zoomIn"
                  data-wow-delay=".1s"
                  src={shape_circle_2}
                  style={{ width: "100%", height: "100%" }}
                  alt="Paradox - Shape Image"
                />
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content">
              <div className="section_heading mb-0">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span style={{ color: "black" }}>About US</span>
                </h2>
                <h3 style={{ color: "black" }} className="heading_title">
                  Credible Digital Innovation
                </h3>
                <p style={{ color: "black" }} className="heading_description">
                  At Cearn Creatives, we're more than just a digital agency;
                  we're your creative partners in the digital realm. With a
                  passion for innovation and a commitment to excellence, we
                  specialize in delivering top-notch services that elevate your
                  online presence
                </p>
                <p
                  style={{ color: "black" }}
                  className="heading_description mb-0"
                >
                  Where digital excellence converges with financial precision.
                  As industry specialists catering to finance, including
                  insurance, mortgage, fintech, forex brokers, stocks, and
                  trading platforms like IQ Option, we bring a tailored approach
                  to your unique sector.
                </p>
              </div>
              <hr />
              <div className="row">
                <div className="col col-md-6">
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">
                        Cutting-Edge Design
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">
                        Versatile Expertise
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col col-md-6">
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">
                        Cloud-Powered Solutions
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">
                        Comprehensive Services
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn_wrap">
                <Link href="/contact" className="bd-btn-link btn_primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Get a Quotes</span>
                        <span className="bd-button-text">Get a Quotes</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsAboutSection;
