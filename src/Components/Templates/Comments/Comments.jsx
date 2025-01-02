import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../Shared/Container";
import Wrapper from "./Wrapper";
import { comments } from "../../../fakeData";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Controller, Navigation } from "swiper/modules";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import SwiperButtons from "../../Modules/SwiperButtons/SwiperButtons";
import useOnScreen from "../../../Hooks/useOnScreen";

export default function Comments() {
  const [textSlider, setTextSlider] = useState(null);
  const [imageSlider, setImageSlider] = useState(null);
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
        <span>☕</span>
        <h2>What do customers say about us?</h2>
        <Swiper
          onSwiper={setTextSlider}
          controller={{ control: imageSlider }}
          slidesPerView={1}
          className="text-slider"
          modules={[Controller]}
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <p>
                <RiDoubleQuotesL />
                {comment.message}
                <RiDoubleQuotesR />
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          ref={swiperRef}
          onSwiper={setImageSlider}
          controller={{ control: textSlider }}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          navigation={{
            prevEl: "swiper-button-prev",
            nextEl: "swiper-button-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          modules={[Navigation, Controller, Autoplay]}
          className="image-slider"
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="image-slide">
                <img
                  loading="lazy"
                  src={`/images/${comment.img}`}
                  alt={comment.username}
                />
                <p>
                  {comment.username} ({comment.country})
                </p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Container>
    </Wrapper>
  );
}
