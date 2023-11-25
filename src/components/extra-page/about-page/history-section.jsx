import React from "react";

// import Swiper and modules styles
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const HistorySection = () => {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="history_section section_space_lg"
    >
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span style={{ color: "#373745" }}>Our History</span>
          </h2>
          <h3 style={{ color: "#373745" }} className="heading_title mb-0">
            Cearn Creatives
          </h3>
        </div>
      </div>
      <div className="history_carousel_wrap">
        <div className="history_carousel">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={false}
            navigation={{
              clickable: true,
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3.2,
              },
            }}
          >
            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div
                  style={{ backgroundColor: "#373745" }}
                  className="content_wrap"
                >
                  <div
                    style={{ backgroundColor: "#373745" }}
                    className="iconbox_item"
                  >
                    <div className="item_content">
                      <h3 className="item_title">
                        We were thinking for creating a Finance focus agency
                      </h3>
                      <p className="mb-0">
                        To help them stand out beautifully and secure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4
                    style={{ color: "#373745" }}
                    className="year_text m-0 text-center"
                  >
                    <span>2021</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_item">
                <div
                  style={{ backgroundColor: "#373745" }}
                  className="content_wrap"
                >
                  <div
                    style={{ backgroundColor: "#373745" }}
                    className="iconbox_item"
                  >
                    <div className="item_content">
                      <h3 className="item_title">
                        Choosing services & branding
                      </h3>
                      <p className="mb-0">
                        We perform a lot of research and gather some portfolio
                        to show off.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4
                    style={{ color: "#373745" }}
                    className="year_text m-0 text-center"
                  >
                    <span>2022</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div
                  style={{ backgroundColor: "#373745" }}
                  className="content_wrap"
                >
                  <div
                    style={{ backgroundColor: "#373745" }}
                    className="iconbox_item"
                  >
                    <div className="item_content">
                      <h3 className="item_title">Start of Cearn Creatives</h3>
                      <p className="mb-0">
                        We start helping Forex, Stock, and Cost management web
                        apps.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4
                    style={{ color: "#373745" }}
                    className="year_text m-0 text-center"
                  >
                    <span>2023</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel_item">
                <div
                  style={{ backgroundColor: "#373745" }}
                  className="content_wrap"
                >
                  <div
                    style={{ backgroundColor: "#373745" }}
                    className="iconbox_item"
                  >
                    <div className="item_content">
                      <h3 className="item_title">
                        Offering wide range of service
                      </h3>
                      <p className="mb-0">
                        We ought to expand are services to become one stop
                        digital solution
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4
                    style={{ color: "#373745" }}
                    className="year_text m-0 text-center"
                  >
                    <span>Present </span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
