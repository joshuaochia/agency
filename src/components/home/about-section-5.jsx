import Link from "next/link";
import React from "react";
import Image from "next/image";
import about_image from "@assets/images/about/custom_about.png";
import about_image_2 from "@assets/images/about/about_image_6.jpg";
import shape_4 from "@assets/images/shapes/shape_4.svg";
import shape_circle_3 from "@assets/images/shapes/shape_circle_3.svg";
import shape_circle_4 from "@assets/images/shapes/shape_circle_2.svg";
import about_overlay from "@assets/images/about/about_image_7.jpg";

const AboutSectionFive = () => {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="about_section section_space_lg decoration_wrap bg_light_3"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6">
            <div className="about_image_2 decoration_wrap">
              <div className="image_wrap">
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay=".6s"
                  src={about_image}
                  style={{ width: "100%", height: "100%" }}
                  alt="Paradox - About Image"
                />
              </div>
              <div className="deco_item bg_image">
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay=".6s"
                  src={about_image_2}
                  style={{ width: "100%", height: "100%" }}
                  alt="Paradox - Shape Image"
                />
              </div>
              <div className="deco_item shape_3"></div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content">
              <div className="section_heading style_3">
                <h2
                  style={{
                    backgroundColor: "#fff293",
                    backgroundImage:
                      "linear-gradient(315deg, #fff293 0%, #ffe884 74%)",
                  }}
                  className="heading_subtitle"
                >
                  <span>About Us</span>
                </h2>
                <h3 style={{ color: "black" }} className="heading_title">
                  Were Cearn Creatives for trusted companies.
                </h3>
                <p
                  style={{ color: "black" }}
                  className="heading_description mb-0"
                >
                  Our action plan is focused and planned. We are result oriented
                  digital agency and we believe in communication clarity.
                </p>
              </div>
              <div className="progress_item">
                <h4 style={{ color: "black" }} className="item_title">
                  Digital Design
                </h4>
                <div
                  style={{ border: "1px solid rgba(15, 14, 14, 0.1)" }}
                  className="progress"
                >
                  <div
                    style={{ backgroundColor: "black" }}
                    className="progress_bar rx_width_84 wow animated"
                    role="progressbar"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ color: "black" }} className="value_text">
                      84%
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress_item mb-0">
                <h4 style={{ color: "black" }} className="item_title">
                  Digital Development
                </h4>
                <div
                  style={{ border: "1px solid rgba(15, 14, 14, 0.1)" }}
                  className="progress"
                >
                  <div
                    style={{ backgroundColor: "black" }}
                    className="progress_bar rx_width_93 wow animated"
                    role="progressbar"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ color: "black" }} className="value_text">
                      93%
                    </span>
                  </div>
                </div>
              </div>
              <div className="btn_wrap pb-0">
                <Link
                  style={{ backgroundColor: "black" }}
                  href="/about"
                  className="bd-btn-link btn_primary"
                >
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i
                        style={{ color: "white" }}
                        className="fa-light fa-arrow-right-long"
                      ></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span
                          style={{ color: "white" }}
                          className="bd-button-text"
                        >
                          Know More
                        </span>
                        <span
                          style={{ color: "white" }}
                          className="bd-button-text"
                        >
                          Know More
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_4">
        <Image
          src={shape_circle_4}
          style={{ width: "100%", height: "100%" }}
          alt="Paradox - Shape Image"
        />
      </div>
      <div className="deco_item shape_5">
        <Image
          src={shape_circle_3}
          style={{ width: "100%", height: "100%" }}
          alt="Paradox - Shape Image"
        />
      </div>
      <div className="deco_dot"></div>
    </section>
  );
};

export default AboutSectionFive;
