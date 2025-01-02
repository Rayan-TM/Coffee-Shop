import styled from "styled-components";

const Wrapper = styled.section`
  margin-block: 7rem;

  h2 {
    text-align: center;
  }

  p {
    max-width: 40rem;
    margin: 1rem auto;
    text-align: center;
    line-height: 1.5rem;
    color: #828282;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-block: 4rem;

    img {
      width: 50vw;
    }

    .reasons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      & > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        h4 {
          color: #828282;
          font-weight: normal;
          line-height: 1.5rem;
          width: 200px;
        }

        svg {
          font-size: 4rem;
          color: var(--primary-color);
        }
      }
    }

    @media (max-width: 992px) {
      flex-wrap: wrap;
      img{
        width: 75%;
      }
      .reasons{
        width: 100%;
        
        & > div {
          justify-content: center;
          flex-direction: column;
          text-align: center;

          h4 {
          
          width: fit-content;
        }
        }
      }
    }

    @media (max-width: 768px) {
      img{
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
