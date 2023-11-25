import React from "react";
import Image from "next/image";
import brand_1 from "@assets/images/clients/edocuments.png";
import brand_2 from "@assets/images/clients/lustre.png";
import brand_3 from "@assets/images/clients/measure_minds.png";
import brand_4 from "@assets/images/clients/smidige.png";
import brand_5 from "@assets/images/clients/united_nation.png";

const BrandSectionFive = () => {
  return (
    <div
      style={{ background: "white" }}
      className="client_logo_section section_space_lg decoration_wrap"
    >
      <div className="container">
        <div
          style={{
            backgroundColor: "#fff293",
            backgroundImage: "linear-gradient(315deg, #fff293 0%, #ffe884 74%)",
            backgroundSize: "101% 100%",

            backgroundRepeat: "no-repeat",
          }}
          className="client_logo_boxed"
        >
          <div className="client_logo_item">
            <Image
              src={brand_1}
              style={{ width: "150px", height: "100%" }}
              alt="Paradox Client Logo"
            />
          </div>
          <div className="client_logo_item">
            <Image
              src={brand_2}
              style={{ width: "150px", height: "100%" }}
              alt="Paradox Client Logo"
            />
          </div>
          <div className="client_logo_item">
            <Image
              src={brand_3}
              style={{ width: "150px", height: "100%" }}
              alt="Paradox Client Logo"
            />
          </div>
          <div className="client_logo_item">
            <Image
              src={brand_4}
              style={{ width: "150px", height: "100%" }}
              alt="Paradox Client Logo"
            />
          </div>
          <div className="client_logo_item">
            <Image
              src={brand_5}
              style={{ width: "150px", height: "100%" }}
              alt="Paradox Client Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSectionFive;
