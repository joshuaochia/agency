import React from "react";
import shape_circle_7 from "@assets/images/shapes/shape_circle_7.svg";
import Image from "next/image";

const PolicySection = () => {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="policy_section section_space_md bg_primary decoration_wrap"
    >
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-6 col-sm-6">
            <div className="iconbox_item policy_item_2 text-white">
              <div style={{ color: "black" }} className="serial_number">
                01
              </div>
              <div className="item_content">
                <h3 style={{ color: "black" }} className="item_title">
                  Customer First Approach
                </h3>
                <p style={{ color: "black" }} className="mb-0">
                  We treat your customer as our own customer.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-6">
            <div className="iconbox_item policy_item_2 text-white">
              <div style={{ color: "black" }} className="serial_number">
                02
              </div>
              <div className="item_content">
                <h3 style={{ color: "black" }} className="item_title">
                  Message Clarity
                </h3>
                <p style={{ color: "black" }} className="mb-0">
                  All of our service are tightly tailored to your business
                  message/purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-6">
            <div className="iconbox_item policy_item_2 text-white">
              <div style={{ color: "black" }} className="serial_number">
                03
              </div>
              <div className="item_content">
                <h3 style={{ color: "black" }} className="item_title">
                  Friendly Documentation
                </h3>
                <p style={{ color: "black" }} className="mb-0">
                  We create video/documentation for your future
                  employee/agency/yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_3">
        <Image
          data-parallax='{"y" : 150, "smoothness": 20}'
          src={shape_circle_7}
          alt="Paradox Illustration Image"
        />
      </div>
    </section>
  );
};

export default PolicySection;
