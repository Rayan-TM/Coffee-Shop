import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
  padding-block: 5rem;

  .container > span {
    font-size: 5rem;
  }

  h2 {
    margin-block: 1rem;
  }

  .text-slider {
    margin-block: 2rem;

    p {
      width: 50vw;
      max-width: 600px;
      margin-inline: auto;
      font-size: 1.4rem;
      color: #818181;
      font-style: italic;
    }

    @media (max-width: 992px) {
      p {
        width: unset;
      }
    }
  }

  .image-slider {
    width: 50vw;
    max-width: 600px;
    padding: 1rem;

    .image-slide {
      p {
        font-size: 0.6rem;
        margin-top: 1rem;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.2s linear;
      }
    }

    .swiper-slide-active .image-slide {
      p {
        opacity: 1;
      }
    }

    .swiper-prev{
      left: 0;
    }

    .swiper-next{
      right: 0;
    }

    .swiper-slide:not(.swiper-slide-active) {
      opacity: 0.5;
      transition: all 0.3s linear;
    }

    .swiper-slide-active {
      z-index: 1;
      transform: scale(1.3);
      opacity: 1;
      transition: all 0.3s linear;
    }

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export default Wrapper;
