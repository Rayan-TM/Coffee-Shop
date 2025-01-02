import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    background-color: transparent;
    border: none;

    svg {
      font-size: 3rem;
      color: #fff;
    }
  }
`;

export default Wrapper;
