import React, { useState } from "react";

import cta_image_5 from "@assets/images/calltoaction/handshake.png";
import shape_4 from "@assets/images/shapes/shape_4.svg";
import site_logo_dark from "@assets/images/logo/site_logo_yellow_white.svg";
import icon_mapmark from "@assets/images/icons/icon_mapmark.svg";

import Image from "next/image";
import Link from "next/link";
import jsonp from "jsonp";

const FooterFive = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const url =
      "https://gmail.us21.list-manage.com/subscribe/post-json?u=2af78308d81b24a6ae6724a50&amp;id=8f69005e48&amp;f_id=005de9e6f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      setIsSuccess(true);
      setEmail("");
    });
  };
  return (
    <footer style={{ background: "#FAFAFA " }} className="site_footer style_4">
      <div className="calltoaction_section style_5">
        <div className="container">
          <div
            style={{
              backgroundColor: "#fff293",
              backgroundImage:
                "linear-gradient(315deg, #fff293 0%, #ffe884 74%)",
            }}
            className="content_box bg_primary decoration_wrap"
          >
            <div className="row align-items-center">
              <div className="col col-xxl-5 col-xl-6 col-lg-6 order-last">
                <div className="cta_image">
                  <Image
                    src={cta_image_5}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox Call To Action Image"
                  />
                </div>
              </div>
              <div className="col col-xxl-7 col-xl-6 col-lg-6">
                <div className="wrapper_box mb-4 mb-lg-0">
                  <div className="section_heading text-white">
                    <h2
                      style={{ color: "black" }}
                      className="heading_title mb-0"
                    >
                      Let’s Create Something Amazing Together.
                    </h2>
                  </div>
                  <Link
                    style={{ background: "black" }}
                    href="/contact"
                    className="bd-btn-link btn_warning"
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
                            Get Started
                          </span>
                          <span
                            style={{ color: "white" }}
                            className="bd-button-text"
                          >
                            Get Started
                          </span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{ background: "black" }}
              className="deco_item shape_1"
            ></div>
          </div>
        </div>
      </div>
      <div style={{ background: "#090910" }} className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6">
              <div className="site_logo">
                <Link className="site_link" href="/">
                  <Image
                    src={site_logo_dark}
                    style={{ width: "100%", height: "100%" }}
                    alt="Site Logo - Paradox - Agency Template"
                  />
                </Link>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Contact Us</h3>
                <div className="icon_list_widget">
                  <h4 className="widget_title mb-0">
                    If you want to email us:
                  </h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link href="mailto:contact@paradox.com">
                        <span
                          style={{ color: "white" }}
                          className="list_item_text"
                        >
                          contact@cearncreatives.com
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Find Us</h3>
                <div className="icon_list_widget">
                  <ul className="icon_list unordered_list_block">
                    <li style={{ color: "white" }}>
                      <Link href="#">
                        <span className="d-block mb-2">
                          <Image src={icon_mapmark} alt="Icon Mapmark" />
                        </span>
                        <span
                          style={{ color: "white" }}
                          className="list_item_text"
                        >
                          Misamis Oriental
                          <small
                            style={{ color: "white" }}
                            className="d-md-block"
                          >
                            Cagayan De Oro City, Philippines
                          </small>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Newsletter</h3>
                <form>
                  <div className="small_newsletter_form">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email Adreess"
                    />
                    <button onClick={onSubmitHandler} type="submit">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                  {/* <div className="form-check mb-0">
                    <input type="checkbox" id="checkMeOut" />
                    <label htmlFor="checkMeOut">Check me out</label>
                  </div> */}
                  <p style={{ height: "16px", color: "#4BB543" }}>
                    {isSuccess && "Susbribed successfully!"}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#090910", color: "white" }}
        className="footer_bottom"
      >
        <div className="container">
          <div className="footer_bottom_grid">
            <div style={{ color: "white" }} className="copyright_widget">
              Copyright © 2023 by Cearn Creatives
            </div>
            <div className="footer_social">
              <ul
                style={{ color: "white" }}
                className="social_icon unordered_list_end"
              >
                <li>
                  <Link
                    href="https://www.facebook.com/cearncreatives"
                    target="_blank"
                  >
                    <i
                      style={{ color: "white" }}
                      className="fab fa-facebook-f"
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/cearn-creatives/"
                    target="_blank"
                  >
                    <i
                      style={{ color: "white" }}
                      className="fab fa-linkedin"
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/cearncreatives"
                    target="_blank"
                  >
                    <i
                      style={{ color: "white" }}
                      className="fab fa-instagram"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;
