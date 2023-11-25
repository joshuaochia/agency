import React, { useState } from "react";
import video_poster_image from "@assets/images/video/video_static_2.png";
import icon_eye_white from "@assets/images/icons/icon_eye_white.svg";
import icon_dart_board from "@assets/images/icons/icon_dart_board_white.svg";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <>
      <section style={{ background: "black" }} className="about_section_2">
        <div className="video_widget rounded-0">
          <Image
            src={video_poster_image}
            style={{ width: "100%", height: "100%" }}
            alt="Paradox Video Poster Image"
          />
        </div>
        <div style={{ background: "black" }} className="container">
          <div className="row align-items-center m-0">
            <div className="col col-xl-7 col-lg-7 p-0">
              <div className="about_content">
                <div className="section_heading text-white">
                  <h2 className="heading_subtitle text-uppercase">
                    <span className="double_icon">
                      <i className="fas fa-sharp fa-square-full"></i>
                      <i className="fas fa-sharp fa-square-full"></i>
                    </span>
                    <span>Who we Are</span>
                  </h2>
                  <h3 className="heading_title">
                    Leading digital solutions for financial excellence.
                  </h3>
                  <p className="heading_description mb-0">
                    We deliver cutting-edge digital solutions for the finance
                    industry, seamlessly integrating design, technology, and
                    strategy to elevate brands and redefine online experiences.
                  </p>
                </div>
                <div className="mission_vision row">
                  <div className="col col-md-6">
                    <div className="iconbox_item text-white">
                      <div className="item_icon">
                        <Image
                          src={icon_eye_white}
                          style={{ width: "auto", height: "auto" }}
                          alt="Paradox Icon Eye White"
                        />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Our Vision</h3>
                        <p className="mb-0">
                          Revolutionizing finance through digital brilliance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item text-white">
                      <div className="item_icon">
                        <Image
                          src={icon_dart_board}
                          style={{ width: "auto", height: "auto" }}
                          alt="Paradox Icon Eye White"
                        />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Our Mission</h3>
                        <p className="mb-0">
                          Elevating brands through innovative digital solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total_review_info text-white pt-4">
                  <div className="review_stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="review_text">
                    <span className="odometer" data-count="200">
                      8
                    </span>
                    <span>+ Client Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
