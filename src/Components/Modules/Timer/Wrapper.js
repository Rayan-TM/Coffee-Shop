import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  .box {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    padding: 0.6rem;
    width: 60px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    font-weight: 600;

    .unit {
      color: var(--primary-color-200);
    }
  }
`;

export default Wrapper;
