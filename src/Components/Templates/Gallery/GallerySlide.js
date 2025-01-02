import styled from "styled-components";

const GallerySlider = styled.div`
  .swiper {
    width: 90vw;
    height: 80vh;
    position: unset;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: fit-content;
    color: #fff;

    &::after {
      border-radius: 50%;
      border: 1px solid #fff;
      width: 3rem;
      height: 3rem;
      font-size: 1.4rem;
      display: grid;
      place-items: center;
    }
  }

  .swiper-button-prev {
    left: 2rem;
  }

  .swiper-button-next {
    right: 2rem;
  }

  .swiper-pagination {
    bottom: 5vh;
    color: #fff;
  }

  .swiper-slide {
    .gallery {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }

      span {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.5rem;
        border-radius: 5px;
        text-align: center;
      }
    }
  }
`;

export default GallerySlider;
