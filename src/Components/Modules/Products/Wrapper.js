import styled from "styled-components";

const Wrapper = styled.section`
  padding-block: 5rem;
  background-color: #f5f5f5;

  .container {
    position: relative;
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  .swiper {
    padding-block: 1rem;
    position: unset;
  }

  .swiper-prev {
    top: 1rem;
    right: 5rem;
    left: unset;

    &:hover {
      left: unset;
      right: 5.2rem;
    }
  }

  .swiper-next {
    top: 1rem;
  }

  @media (max-width: 576px) {
    h2 {
      margin-bottom: 6rem;
    }

    .swiper-prev,
    .swiper-next {
      top: 6rem;
    }
  }
`;

export default Wrapper;
