import styled from "styled-components";

const Heading2 = styled.h2`
  font-size: 2.5rem;
  color: ${({ $color }) => $color || "var(--primary-color)"};

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export default Heading2;
