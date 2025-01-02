import styled from "styled-components";

const Wrapper = styled.section`
  padding-block: 5rem;
  background-color: #ede4da;

  .offers-container {
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    .swiper {
      padding: 1rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-weight: bold;

      h2 {
        font-size: 1rem;
        span {
          display: inline-block;
          margin-top: 1rem;
          font-size: 2.5rem;
          color: var(--primary-color);
          letter-spacing: 0.5rem;
          text-transform: uppercase;
        }
      }

      .cta-button {
        width: fit-content;
      }
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
`;

export default Wrapper;
