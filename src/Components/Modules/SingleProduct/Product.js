import styled from "styled-components";

const Product = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-right: 2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  padding: 0.8rem;
  cursor: pointer;

  h4 {
    margin-block: 1rem;
    font-size: 1.1rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--primary-color);
    border-radius: 0.5rem;
    transition: transform 0.1s linear;
    z-index: -1;
  }

  &:hover {
    &::before {
      transform: rotate(-5deg);
    }

    .footer {
      .more-options {
        bottom: 70%;
        opacity: 1;
      }
    }
  }

  .off {
    position: absolute;
    right: 1rem;
  }

  img {
    width: 100%;
  }

  button {
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    position: relative;

    &:hover {
      span {
        opacity: 1;
        right: 130%;
        visibility: visible;
      }
    }

    span {
      position: absolute;
      right: 150%;
      font-size: 0.7rem;
      background-color: var(--primary-color-200);
      color: #fff;
      white-space: nowrap;
      padding: 0.5rem;
      border-radius: 0.3rem;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s linear;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);

      &::before {
        content: "";
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        top: 35%;
        right: -5%;
        transform: rotate(45deg);
        background-color: var(--primary-color-200);
      }
    }
  }

  button:not(.favorite) {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--primary-color-300);
    display: grid;
    place-items: center;
    transition: all 0.2s linear;
    color: #fff;

    &:hover {
      background-color: var(--primary-color-200);
    }
  }

  .favorite {
    position: absolute;
    background-color: transparent;
    color: #828282;
    transition: color 0.2s linear;

    &:hover {
      color: var(--primary-color);
    }
  }

  .footer {
    position: relative;

    display: flex;
    align-items: end;
    justify-content: space-between;

    .more-options {
      position: absolute;
      right: 0;
      bottom: 100%;
      opacity: 0;
      transform: translateY(-20px);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transition: all 0.2s ease;
    }
  }
`;

export default Product;
