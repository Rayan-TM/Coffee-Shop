import Container from "../../../Shared/Container";
import CTAButton from "../../../Shared/CTAButton";
import Timer from "../../Modules/Timer/Timer";
import Wrapper from "./Wrapper";
import SingleProduct from "../../Modules/SingleProduct/SingleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useOnScreen from "../../../Hooks/useOnScreen";
import { useEffect, useRef } from "react";

export default function SpecialOffers({ products }) {
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
      <Container className="offers-container">
        <div className="content">
          <h2>
            Amazing <br />
            <span>Offers</span>
          </h2>
          <CTAButton className="cta-button">View All</CTAButton>
          <span>Just until :</span>
          <Timer hours={23} minutes={1} seconds={10} />
        </div>
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
            500: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <SingleProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
}
