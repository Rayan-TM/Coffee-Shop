import styled from "styled-components";

const Button = styled.button`
  background-color: var(--primary-color);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  color: #fff;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &.swiper-next {
    right: 1.5rem;

    &:hover {
      right: 1.2rem;
    }
  }

  &.swiper-prev {
    left: 1.5rem;

    &:hover {
      left: 1.2rem  ;
    }
  }
`;

export default Button;
