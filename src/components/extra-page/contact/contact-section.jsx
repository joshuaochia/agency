import NiceSelect from "@ui/niceSelect";
import Link from "next/link";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactSection = () => {
  const [state, handleSubmit] = useForm("xyyqqyny");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const selectHandler = (e) => {};

  return (
    <section
      style={{ background: "rgb(250, 250, 250)" }}
      className="contact_section section_space_lg"
    >
      <div className="container">
        <div className="section_heading">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span style={{ color: "black" }}>Contact Us</span>
          </h2>
          <h3 style={{ color: "black" }} className="heading_title mb-0">
            Feel Free Contact Us
          </h3>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <div className="contact_form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="select_option m-0">
                      <NiceSelect
                        options={[
                          { value: "Select Subject", text: "Select Subject" },
                          {
                            value: "Website Development",
                            text: "Website Development",
                          },
                          { value: "Website Design", text: "Website Design" },

                          { value: "Video Editing", text: "Video Editing" },
                          {
                            value: "Discord Management",
                            text: "Discord Management",
                          },
                          {
                            value: "Discord Development",
                            text: "Discord Development",
                          },
                          {
                            value: "System Automation",
                            text: "System Automation",
                          },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="Select Subject"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Write your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="bd-btn-link">
                      <span className="bd-button-content-wrapper">
                        <span className="bd-button-icon">
                          <i className="fa-light fa-arrow-right-long"></i>
                        </span>
                        <span className="pd-animation-flip">
                          <span className="bd-btn-anim-wrapp">
                            <span className="bd-button-text">Send Now</span>
                            <span className="bd-button-text">Send Now</span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              {state.succeeded && (
                <p style={{ color: "#4BB543", marginTop: "10px" }}>
                  Email sent successfully! We will reach back between 1-2
                  working days.
                </p>
              )}

              {state.errors && (
                <p style={{ color: "#cc0000", marginTop: "10px" }}>
                  Something went wrong please try again.
                </p>
              )}
            </div>
          </div>
          <div className="col col-lg-6">
            <ul className="contact_info_list style_2 ps-lg-4 unordered_list_block">
              <li>
                <strong>Location:</strong>
                <span>Philippines, Cagayan De Oro 9000</span>
              </li>

              <li>
                <strong>Email:</strong>
                <span>contact@cearncreatives.com</span>
              </li>
              <li>
                <strong>Opening:</strong>
                <span>8am - 5pm, Sunday Close</span>
              </li>
              <li>
                <strong>Follow Us:</strong>
                <ul className="social_icon unordered_list">
                  <li>
                    <Link
                      href="https://www.facebook.com/cearncreatives"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/cearn-creatives/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
