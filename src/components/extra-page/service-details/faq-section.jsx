import Link from "next/link";
import React from "react";

const FaqSection = ({ data }) => {
  console.log(data, "data bitch");
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="faq_section section_space_lg"
    >
      <div className="container">
        <div className="row">
          <div className="col col-lg-4">
            <div className="details_sectio_content mb-4 mb-lg-0">
              <div className="section_heading">
                <h2 style={{ color: "black" }} className="heading_title">
                  Need to know User Common Questions
                </h2>
              </div>
              <Link href="/pricing" className="bd-btn-link btn_primary">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Need to Know More</span>
                      <span className="bd-button-text">Need to Know More</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="accordion_wrap" id="faq_accordion">
              {data?.map((item) => (
                <div className="accordion_item">
                  <h3 className="accordion_header m-0" id="heading_four">
                    <button
                      className="accordion_button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_four"
                      aria-expanded="false"
                      aria-controls="collapse_four"
                    >
                      {item.title}
                    </button>
                  </h3>
                  <div
                    id="collapse_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading_four"
                    data-bs-parent="#faq_accordion"
                  >
                    <div className="accordion_body">
                      <p style={{ color: "black" }} className="m-0">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
