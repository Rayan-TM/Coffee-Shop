import styled from "styled-components";

const Wrapper = styled.header`
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    display: grid;
    place-items: center;
    background: var(--primary-color);
    width: 200px;
    position: relative;
    padding: 1rem;
    box-shadow: 6px 8px 15px 0 rgba(0, 0, 0, 0.59);

    img {
      width: 130px;
    }

    &::before,
    &::after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      bottom: -28px;
      border-top: 30px solid var(--primary-color);
      filter: drop-shadow(6px 9px 5px rgba(0, 0, 0, 0.35));
    }

    &::before {
      left: 0;
      border-right: 100px solid transparent;
    }

    &::after {
      right: 0;
      border-left: 100px solid transparent;
    }
  }

  .right-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    .search-container {
      background-color: #fff;
      display: flex;
      border-radius: 25px;
      position: relative;
      padding: 1rem;

      svg {
        margin-bottom: -3px;
        cursor: pointer;

        &:hover {
          color: var(--primary-color-200);
        }
      }

      .left {
        display: flex;
        border-right: 1px solid #333;
        padding-right: 1rem;

        input {
          border: none;
          outline: none;
          font-size: 1rem;
          padding-left: 0.5rem;
          width: 100%;
        }

        button {
          border: none;
          background-color: transparent;
          font-size: 1.2rem;
        }
      }
    }

    .burger-menu {
      border: none;
    }
  }

  @media (max-width: 576px) {
    .logo-container {
      margin-right: 1rem;

      img {
        width: 100px;
      }
    }
  }
`;

export default Wrapper;
