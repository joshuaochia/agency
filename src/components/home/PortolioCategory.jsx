import React from "react";
import Link from "next/link";
function isOdd(num) {
  return num % 2;
}

const PortfolioCategory = ({ catID, arialabelledby, data }) => {
  console.log(data, "fuckeme");
  return (
    <div
      className="tab-pane fade"
      id={catID}
      role="tabpanel"
      aria-labelledby={arialabelledby}
      tabIndex="0"
    >
      <div className="row">
        {[1, 2, 3, 4, 5]?.map((item, index) => {
          if (!isOdd(index)) {
            return (
              <div
                className="col col-lg-8 element-item graphics"
                data-category="graphics"
              >
                <div className="portfolio_item layout_split">
                  <div className="item_image">
                    <Link href="/portfolio-details">
                      <img
                        src="assets/images/portfolio/portfolio_item_details_image_5.jpg"
                        alt="Paradox Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/home-5">Travel Agency</Link>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <Link href="/portfolio-details">
                        Online Reading Book App
                      </Link>
                    </h3>
                    <p className="item_description">
                      We help to generte positive cash flow & use the proceeds
                      in further
                    </p>
                    <Link className="btn-link" href="/portfolio-details">
                      <span className="btn_text">View Details</span>
                      <span className="btn_icon">
                        <img
                          src="assets/images/icons/icon_arrow_down_right_dark.svg"
                          alt="Paradox icons"
                        />
                        <img
                          src="assets/images/icons/icon_arrow_down_right_danger.svg"
                          alt="Paradox icons"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="col col-lg-4 element-item wordpress"
                data-category="wordpress"
              >
                <div className="portfolio_item layout_boxed">
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-grid">Meetup</Link>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <Link href="/portfolio-details">Online Meetup App</Link>
                    </h3>
                    <p className="item_description">
                      We help to generte positive cash flow & use the proceeds
                      in further
                    </p>
                    <Link className="btn-link" href="/portfolio-details">
                      <span className="btn_text">View Details</span>
                      <span className="btn_icon">
                        <img
                          src="assets/images/icons/icon_arrow_down_right_white.svg"
                          alt="Paradox icons"
                        />
                        <img
                          src="assets/images/icons/icon_arrow_down_right_white.svg"
                          alt="Paradox icons"
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="item_image">
                    <Link href="/portfolio-details">
                      <img
                        src="assets/images/portfolio/portfolio_item_details_image_6.jpg"
                        alt="Paradox Portfolio Image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PortfolioCategory;
