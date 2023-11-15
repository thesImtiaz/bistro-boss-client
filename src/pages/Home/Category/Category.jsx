import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import salads from "../../../assets/home/slide1.jpg";
import pizzas from "../../../assets/home/slide2.jpg";
import soups from "../../../assets/home/slide3.jpg";
import desserts from "../../../assets/home/slide4.jpg";
import salads1 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="font-cinzel mb-16"
      >
        <SwiperSlide>
          <img src={salads} alt="" />
          <h3 className="text-lg md:text-3xl font-normal uppercase text-center -mt-16 text-white text-shadow text-shadow-x-sm text-shadow-y-xs text-shadow-black">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizzas} alt="" />
          <h3 className="text-lg md:text-3xl font-normal uppercase text-center -mt-16 text-white text-shadow text-shadow-x-sm text-shadow-y-xs text-shadow-black">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={soups} alt="" />
          <h3 className="text-lg md:text-3xl font-normal uppercase text-center -mt-16 text-white text-shadow text-shadow-x-sm text-shadow-y-xs text-shadow-black">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={desserts} alt="" />
          <h3 className="text-lg md:text-3xl font-normal uppercase text-center -mt-16 text-white text-shadow text-shadow-x-sm text-shadow-y-xs text-shadow-black">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={salads1} alt="" />
          <h3 className="text-lg md:text-3xl font-normal uppercase text-center -mt-16 text-white text-shadow text-shadow-x-sm text-shadow-y-xs text-shadow-black">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
