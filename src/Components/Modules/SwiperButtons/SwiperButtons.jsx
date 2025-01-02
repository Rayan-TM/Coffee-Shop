import { useSwiper } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Button from "./Button";

export default function SwiperButtons() {
  const swiper = useSwiper();

  return (
    <>
      <Button className="swiper-prev" onClick={() => swiper.slidePrev()}>
        <BsArrowLeftCircle />
      </Button>
      <Button className="swiper-next">
        <BsArrowRightCircle onClick={() => swiper.slideNext()} />
      </Button>
    </>
  );
}
