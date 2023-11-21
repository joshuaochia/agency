import Link from "next/link";
import React, { useState } from "react";
import service_details from "@assets/images/video/service_details_video_poster.jpg";
import icon_together from "@assets/images/icons/icon_together_primary.svg";
import icon_care from "@assets/images/icons/icon_care_primary.svg";
import icon_teaching from "@assets/images/icons/icon_teaching_primary.svg";
import icon_communication from "@assets/images/icons/icon_communication_primary.svg";
import Image from "next/image";
import ModalVideo from "react-modal-video";

const DetailsSection = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setIsOpen(false)}
      /> */}
      <section
        style={{ background: "#FAFAFA" }}
        className="details_section service_details section_space_lg position-relative"
      >
        <div className="container">
          <div className="details_content_wrap">
            <div className="row">
              <div className="col col-lg-6">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2
                      style={{ color: "black" }}
                      className="heading_title mb-0"
                    >
                      {item?.fullTitle}
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
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
              <div style={{ color: "black" }} className="col col-lg-6">
                <p>{item.description}</p>
                <ul className="icon_list unordered_list_block">
                  {item.service_facts?.map((fact, index) => (
                    <li key={index + 1}>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="section_space_lg"></div>
            <div className="row">
              <div className="col col-lg-4">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2
                      style={{ color: "black" }}
                      className="heading_title mb-0"
                    >
                      What we specifically do
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">Get a quote</span>
                          <span className="bd-button-text">Get a quote</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col col-lg-8">
                <div className="row">
                  {item.specific_service?.map((service, index) => (
                    <div key={index + 1} className="col col-md-6">
                      <div className="iconbox_item bg-white">
                        <div className="item_icon">
                          <Image
                            src={service.icon}
                            style={{ width: "100%", height: "100%" }}
                            alt="Paradox Icon Eye White"
                          />
                        </div>
                        <div
                          style={{ color: "black" }}
                          className="item_content"
                        >
                          <h3 style={{ color: "black" }} className="item_title">
                            {service.title}
                          </h3>
                          <p className="mb-0">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;
