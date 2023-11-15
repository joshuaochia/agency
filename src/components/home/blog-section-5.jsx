import React from "react";
import blogs_data from "@data/blogs-data";
import Image from "next/image";
import Link from "next/link";

const BlogSectionFive = () => {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="blog_section section_space_lg bg_light_3"
    >
      <div className="container">
        <div className="section_heading style_3 text-center">
          <h2
            style={{
              backgroundColor: "#fff293",
              backgroundImage:
                "linear-gradient(315deg, #fff293 0%, #ffe884 74%)",
            }}
            className="heading_subtitle"
          >
            <span>Our Blog</span>
          </h2>
          <h3 style={{ color: "black" }} className="heading_title mb-0">
            Our Latest Blogs
          </h3>
        </div>

        <div className="blog_grouped row">
          {blogs_data.slice(0, 3).map((item) => (
            <div className="col col-lg-4 col-md-6" key={item.id}>
              <div
                style={{ border: "1px solid rgba(15, 14, 14, 0.1)" }}
                className="blog_item bg-white"
              >
                <Link
                  className="item_image"
                  href={`/blog-details/${item.id}`}
                  data-cursor-text="VIEW"
                >
                  <Image
                    src={item.img}
                    style={{ width: "100%", height: "100%" }}
                    alt="Paradox Blog Image"
                  />
                </Link>
                <div className="item_content">
                  <div className="flex_wrap">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link
                          style={{
                            backgroundColor: "#fff293",
                            backgroundImage:
                              "linear-gradient(315deg, #fff293 0%, #ffe884 74%)",
                          }}
                          href="/blog-classic"
                        >
                          {item.blogCat}
                        </Link>
                      </li>
                    </ul>
                    <span className="post_date">{item.date}</span>
                  </div>
                  <h3 className="item_title">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h3>
                  <Link className="btn-link" href={`/blog-details/${item.id}`}>
                    <span className="btn_text">Read More</span>
                    <span className="btn_icon">
                      <Image
                        src={item.btnIcon}
                        style={{ width: "100%", height: "100%" }}
                        alt="Paradox - Icon Arrow Down Right"
                      />
                      <Image
                        src={item.btnIconTwo}
                        style={{ width: "100%", height: "100%" }}
                        alt="Paradox - Icon Arrow Down Right"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="btn_wrap pb-0 text-center">
          <Link
            style={{ backgroundColor: "black" }}
            href="/blog"
            className="bd-btn-link btn_primary"
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
                  <span style={{ color: "white" }} className="bd-button-text">
                    View All Blog
                  </span>
                  <span style={{ color: "white" }} className="bd-button-text">
                    View All Blog
                  </span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionFive;
