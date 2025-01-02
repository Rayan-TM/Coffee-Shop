import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons from "../../Modules/SwiperButtons/SwiperButtons";
import Wrapper from "./Wrapper";
import Category from "./Category";
import Container from "../../../Shared/Container";

export default function Categories() {
  const categories = [
    { id: 1, name: "turkish coffee", img: "category1.webp" },
    { id: 2, name: "coffee tester pack", img: "category2.webp" },
    { id: 3, name: "espresso maker", img: "category3.webp" },
    { id: 4, name: "accessories and equipment", img: "category4.webp" },
    { id: 5, name: "brewed coffee and espresso", img: "category5.webp" },
    { id: 6, name: "robusta coffee", img: "category6.webp" },
    { id: 7, name: "teas", img: "category7.webp" },
  ];

  const colors = ["#E9EAEE", "#EDE4DA", "#ffd8ab"];

  return (
    <Wrapper>
      <Container>
        <Swiper
          loop
          navigation={{
            prevEl: "swiper-left",
            nextEl: "swiper-right",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
    
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category.id}>
              <Category $bgColor={colors[index % 3]}>
                <img
                  loading="lazy"
                  src={`/images/${category.img}`}
                  alt={category.name}
                />
                <p>{category.name}</p>
              </Category>
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Container>
    </Wrapper>
  );
}
