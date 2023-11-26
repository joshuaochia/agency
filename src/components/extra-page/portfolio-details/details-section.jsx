import React from "react";

import icon_arrow_down from "@assets/images/icons/icon_arrow_down_left_dark.svg";
import icon_arrow_left_primary from "@assets/images/icons/icon_arrow_left_primary.svg";
import icon_arrow_down_right from "@assets/images/icons/icon_arrow_down_right_dark.svg";
import icon_arrow_right_primary from "@assets/images/icons/icon_arrow_right_primary.svg";
import Link from "next/link";
import Image from "next/image";

const DetailsSection = ({ item }) => {
  console.log(item);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(item.dateStarted);

  const finalDate = date.toLocaleDateString("en-US", options);
  console.log(item, "image");
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="details_section portfolio_details section_space_lg"
    >
      <div className="container">
        <div className="section_space_md pt-0">
          <div className="details_item_image">
            <img
              src={item.bannerImage?.url}
              style={{ width: "100%", height: "100%" }}
              alt="Paradox Portfolio Image"
            />
          </div>
        </div>
        <div className="details_content_wrap">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="section_heading mb-0 mb-lg-5">
                <h2 style={{ color: "black" }} className="heading_title mb-0">
                  {item?.title}
                </h2>
              </div>
            </div>
            <div style={{ color: "black" }} className="col col-lg-6">
              <p>{item.longDescription}</p>
            </div>
          </div>
          <div className="details_info_box">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Date</span>
                <strong>{finalDate}</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Category</span>
                <strong>{item.category?.title}</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Estimation</span>
                <strong>{item.estimation}</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Client</span>
                <strong>{item.client}</strong>
              </div>
            </div>
          </div>
          <h3
            style={{ color: "black" }}
            className="details_item_info_title mb-3"
          >
            The Problem
          </h3>
          <p style={{ color: "black" }}>{item.problem}</p>
          <div className="row mb-5">
            {item.portfolioOpportunitiesCollection?.items?.map((opp, index) => (
              <div key={index + 1} className="col col-lg-4 col-md-6">
                <div className="iconbox_item bg-white">
                  <div className="item_icon">
                    <img
                      src={opp.icon?.url}
                      style={{ width: "100%", height: "100%" }}
                      alt="Paradox Icon Eye White"
                    />
                  </div>
                  <div style={{ color: "black" }} className="item_content">
                    <h3 style={{ color: "black" }} className="item_title">
                      {opp.title}
                    </h3>
                    <p className="mb-0">{opp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-lg-between mb-5">
            <div className="col col-lg-4">
              <div className="details_sectio_content mb-4 mb-lg-0">
                <div className="section_heading">
                  <h2 style={{ color: "black" }} className="heading_title">
                    What we did for this project
                  </h2>
                </div>
                <Link href="/pricing" className="bd-btn-link btn-primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">
                          Get This Service Now
                        </span>
                        <span className="bd-button-text">
                          Get This Service Now
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col col-lg-6">
              <p style={{ color: "black" }}>{item.whatWeDid}</p>
              <ul className="icon_list unordered_list_block">
                {item.whatWeDidList?.map((list, index) => (
                  <li key={index + 1}>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{list}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            {item.photoResultsCollection?.items.map((photo, index) => (
              <div key={index + 1} className="col col-md-6">
                <div className="details_item_image m-0">
                  <img
                    src={photo.url}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox Portfolio Image"
                  />
                </div>
              </div>
            ))}
          </div>

          <h3
            style={{ color: "black" }}
            className="details_item_info_title mb-3"
          >
            Final Result
          </h3>
          <p style={{ color: "black" }}>{item.finalResult}</p>

          <div className="social_wrap">
            <h3 className="social_title text-uppercase">Share:</h3>
            <ul className="social_icon unordered_list_end">
              <li>
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/" target="_blank">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pagination_wrap">
            <div className="other_post_pagination">
              <Link
                href="/portfolio-details"
                data-cursor="-exclusion -lg"
                data-cursor-stick="#prev_post"
              >
                <span className="btn_text">Previous Portfolio</span>
                <span id="prev_post" className="btn_icon">
                  <Image
                    src={icon_arrow_down}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox - Icon Arrow Down Left"
                  />
                  <Image
                    src={icon_arrow_left_primary}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox - Icon Arrow Down Left"
                  />
                </span>
              </Link>
              <Link
                href="/portfolio-details"
                data-cursor="-exclusion -lg"
                data-cursor-stick="#next_post"
              >
                <span className="btn_text">Next Portfolio</span>
                <span id="next_post" className="btn_icon">
                  <Image
                    src={icon_arrow_down_right}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox - Icon Arrow Down Right"
                  />
                  <Image
                    src={icon_arrow_right_primary}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox - Icon Arrow Down Right"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
