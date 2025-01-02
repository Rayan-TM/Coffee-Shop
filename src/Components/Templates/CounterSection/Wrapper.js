import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/images/coffee-bg.webp") fixed no-repeat;
  background-size: cover;

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    color: #fff;
    text-align: center;
    backdrop-filter: blur(3px);
    padding: 8rem 1rem;

    h2 {
      font-size: 3rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    height: fit-content;

    .overlay {
      padding-block: 5rem;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
