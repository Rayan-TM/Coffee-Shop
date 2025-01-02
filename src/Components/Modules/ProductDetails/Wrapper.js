import styled from "styled-components";

const Wrapper = styled.div`
  
  .price-container {
    position: relative;

    .prev-price {
      text-decoration: line-through;
      color: rgb(218, 74, 71);
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  .curr-price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export default Wrapper;
