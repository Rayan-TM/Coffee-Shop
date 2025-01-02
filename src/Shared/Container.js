import styled from "styled-components";

const Container = styled.div`
  width: 1320px;
  margin-inline: auto;

  @media (max-width: 1400px) {
    width: 1140px;
  }

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

export default Container;
