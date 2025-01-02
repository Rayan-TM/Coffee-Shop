import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 0.2rem;

  & > div {
    position: relative;
    transition: all 0.2s linear;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.2s linear;
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }

    &:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: scale 0.2s linear;
    }

    span {
      position: absolute;
      left: 10px;
      top: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  @media (max-width: 992px) {
    height: unset;

    & > div {
      &:first-child {
        grid-column: span 4;
      }
    }
  }

  

  @media (max-width: 768px) {
    & > div {
      grid-column: span 2;
    }
  }

  @media (max-width: 576px) {
    & > div {
      grid-column: span 4;
    }
  }
`;

export default Wrapper;
