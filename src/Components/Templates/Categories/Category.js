import styled from "styled-components";

const Category = styled.div`
  text-align: center;
  transition: transform .2s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  p {
    margin-top: 1rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  img {
    position: relative;

    & ~ ::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background-color: ${(props) => props.$bgColor};
      z-index: -1;
    }
  }
`;

export default Category;
