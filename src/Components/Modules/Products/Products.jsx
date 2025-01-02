import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "./Wrapper";
import Container from "../../../Shared/Container";
import Heading2 from "../../../Shared/Heading2";
import SwiperButtons from "../SwiperButtons/SwiperButtons";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Autoplay } from "swiper/modules";
import useOnScreen from "../../../Hooks/useOnScreen";
import { useEffect, useRef } from "react";

export default function Products({ title, products }) {
  const [target, isVisible] = useOnScreen();
  const swiperRef = useRef();

  useEffect(() => {
    if (!isVisible) {
      swiperRef?.current?.swiper?.autoplay?.stop();
    } else {
      swiperRef?.current?.swiper?.autoplay?.start();
    }
  }, [isVisible]);
  return (
    <Wrapper ref={target}>
      <Container className="container">
        <Heading2>{title}</Heading2>
        <Swiper
          ref={swiperRef}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <SingleProduct product={product} />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Container>
    </Wrapper>
  );
}
