import styled from "styled-components";

const Wrapper = styled.footer`
  padding-block: 5rem 3rem;
  background: url("/images/coffee-bg.webp") no-repeat;
  background-color: rgba(0, 0, 0, 0.9);
  background-blend-mode: multiply;
  background-size: cover;

  color: #fff;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  img {
    width: 13rem;
  }

  .details {
    display: flex;
    gap: 3rem;
    text-align: center;

    .content {
      white-space: nowrap;
      margin-top: 1rem;
      line-height: 1.5rem;
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;

    svg {
      cursor: pointer;
    }
  }

  .copyright {
    text-align: center;
  }

  @media (max-width: 768px) {
    .details {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
