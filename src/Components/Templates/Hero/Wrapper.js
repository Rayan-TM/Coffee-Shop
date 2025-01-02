import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  max-height: 800px;
  background: url("/images/hero.webp") no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    background: url("/images/bg-paper.webp");
    width: 100%;
    height: 50px;
  }

  .container {
    small {
      font-size: 1rem;
    }

    h1 {
      font-size: 4rem;
      margin-block: 1rem;
      font-weight: normal;

      span {
        font-weight: 600;
      }
    }

    @media (max-width: 992px) {
      h1 {
        font-size: 3rem;
      }
    }

    @media (max-width: 576px) {
      text-align: center;
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export default Wrapper;
