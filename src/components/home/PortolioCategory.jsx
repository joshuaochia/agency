import React from "react";
import Link from "next/link";
import * as cssStyles from "./PortfolioCategory.module.css";
function isOdd(num) {
  return num % 2;
}

const PortfolioCategory = ({ catID, arialabelledby, data, active }) => {
  return (
    <div
      className={`tab-pane fade  ${active}`}
      id={catID}
      role="tabpanel"
      aria-labelledby={arialabelledby}
      tabIndex="0"
    >
      <div className={`row asd ${cssStyles.row_items}`}>
        {data?.map((item, index) => {
          if (!isOdd(index)) {
            return (
              <div
                key={index + 1}
                className="col col-lg-8 element-item graphics"
                data-category="graphics"
              >
                <div className="portfolio_item layout_split">
                  <div className="item_image">
                    <Link href={`/portfolio-details/${item.slug}`}>
                      <img
                        src={item.thumbnailOne.url}
                        alt="Paradox Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/home-5">{item.category.title}</Link>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <Link href="/portfolio-details">{item.title}</Link>
                    </h3>
                    <p className="item_description">{item.description}</p>
                    <Link
                      className="btn-link"
                      href={`/portfolio-details/${item.slug}`}
                    >
                      <span className="btn_text">View Details</span>
                      <span className="btn_icon">
                        <img
                          src="/assets/images/icons/icon_arrow_down_right_dark.svg"
                          alt="Paradox icons"
                        />
                        <img
                          src="/assets/images/icons/icon_arrow_down_right_danger.svg"
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
                key={index + 1}
                className="col col-lg-4 element-item wordpress"
                data-category="wordpress"
              >
                <div className="portfolio_item layout_boxed">
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-grid">
                          {item.category.title}
                        </Link>
                      </li>
                    </ul>
                    <h3 className="item_title">
                      <Link href="/portfolio-details"> {item.title}</Link>
                    </h3>
                    <p className="item_description">{item.description}</p>
                    <Link
                      className="btn-link"
                      href={`/portfolio-details/${item.slug}`}
                    >
                      <span className="btn_text">View Details</span>
                      <span className="btn_icon">
                        <img
                          src="/assets/images/icons/icon_arrow_down_right_dark.svg"
                          alt="Paradox icons"
                        />
                        <img
                          src="/assets/images/icons/icon_arrow_down_right_danger.svg"
                          alt="Paradox icons"
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="item_image">
                    <Link href={`/portfolio-details/${item.slug}`}>
                      <img
                        src={item.thumbnailTwo.url}
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
