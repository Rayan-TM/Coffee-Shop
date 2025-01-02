import styled from "styled-components";

const Wrapper = styled.section`
  padding-block: 5rem 8rem;
  position: relative;
  background-color: rgb(245, 245, 245);
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    background: url("/images/bg-paper.webp");
    width: 100%;
    height: 50px;
  }
  .arrow-right {
    font-size: 1.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 3rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      cursor: pointer;
      font-size: 1.3rem;
      transition: transform 0.2s linear;
      color: var(--primary-color-200);

      &:hover {
        transform: translateX(-10px);
      }
    }
  }

  .articles {
    display: flex;
    gap: 2rem;

    article {
      width: 25%;
      padding: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      transition: transform 0.2s linear;
      background-color: #fff;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-10px);

        .overlay {
          opacity: 1;
        }
      }

      .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.2s linear;
        display: grid;
        place-items: center;

        button {
          background-color: transparent;
          border: 2px solid #fff;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          color: #fff;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          cursor: pointer;
        }
      }

      .img-container {
        position: relative;
        height: 180px;
        border-radius: 0.5rem 1.7rem;
        overflow: hidden;
        margin-bottom: 1rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .body {
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          line-height: 1.5rem;
          margin-top: 0.5rem;
          color: #a3a3a3;
        }
      }

      .footer {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #a3a3a3;
        padding-top: 1rem;

        .date,
        .view {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #a3a3a3;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }

    @media (max-width: 992px) {
      flex-wrap: wrap;

      article {
        width: 30%;
      }
    }

    @media (max-width: 768px) {
      article {
        width: 47%;
      }
    }

    @media (max-width: 600px) {
      article {
        width: 70%;
        margin-inline: auto;
      }
    }

    @media (max-width: 400px) {
      article {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
