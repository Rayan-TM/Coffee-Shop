import styled from "styled-components";

const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #fff;
  color: var(--primary-color);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s linear;
  font-size: 1.2rem;
  position: relative;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }

  @media (max-width: 1200px) {
    height: 2.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    height: 3rem;
    font-size: 1.2rem;
  }
`;

export default IconBox;
