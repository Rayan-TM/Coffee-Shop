import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 0.5rem 2rem;

  .menu {
    list-style: none;
    display: flex;
  }

  .menu-item {
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s linear;
    font-weight: 600;

    &:hover {
      color: var(--primary-color-300);
    }

    &:hover .mega-menu-item::before {
      border-color: var(--primary-color-300);
    }

    .mega-menu-item {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 20%;
        right: -15px;
        width: 0.5rem;
        height: 0.5rem;
        transform: rotate(45deg);
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transition: all 0.2s linear;
      }
    }

    .mega-menu.active {
      opacity: 1;
      top: 150%;
      visibility: visible;
    }
  }

  .mega-menu {
    min-width: 70vw;
    display: flex;
    gap: 2rem;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 180%;
    left: -100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    justify-content: space-between;
    z-index: 1000;
    transition: all 0.2s linear;
    cursor: default;
  }

  .mega-column {
    width: fit-content;
    white-space: nowrap;

    h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.8rem;
        color: #333;
        font-size: 1rem;
        cursor: pointer;
        font-weight: normal;

        &:hover {
          color: var(--primary-color-200);
        }
      }
    }
  }

  .swiper {
    width: 400px;

    .swiper-slide {
      text-align: center;
      font-size: 18px;

      .product {
        border: 2px solid var(--primary-color-200);
        border-radius: 1rem;
        padding: 1rem;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        margin-inline: 0.25rem;
        cursor: pointer;

        .img-container {
          position: relative;

          img {
            width: 150px;
          }
        }
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h5 {
        font-size: 1.2rem;
      }

      .rating {
        display: flex;
        gap: 0.5rem;
      }
    }

    .swiper-pagination-bullet {
      background-color: var(--primary-color);
    }

    .swiper-pagination-bullet-active {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: -50%;
        top: -50%;
        height: 1rem;
        width: 1rem;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 1300px) {
    .mega-menu {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1200px) {
    padding-inline: 0;
  }

  @media (max-width: 992px) {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    backdrop-filter: blur(6px);
    inset: 0;
    z-index: 1000;

    .search-box {
      background-color: #fff;
      margin: 1rem;
      border-radius: 25px;
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;

      input{
        border: none;
        outline: none;
      }

      button {
        background-color: transparent;
        border: none;
      }
    }

    .options {
      display: flex;
      gap: 1rem;
      margin: 3rem 1rem;
    }

    .menu {
      flex-direction: column;
      background-color: var(--primary-color);
      max-width: 250px;
      margin-right: 1rem;
      border-radius: 0 1rem 1rem 0;
      padding-block: 1rem;
      height: 100%;
      position: relative;

      .close {
        position: absolute;
        right: -15px;
        background-color: #fff;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
        border: none;
        z-index: 1;
      }
    }

    .mega-menu-item::before {
      display: none;
    }
  }
`;

export default Wrapper;
