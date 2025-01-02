import styled, { css } from "styled-components";

const CTAButton = styled.button`
  ${({ $bgColor, $color, $hoverBgColor, $hoverColor }) => css`
    border: 2px solid ${$bgColor || "var(--primary-color)"};
    padding: 1rem 1.3rem;
    background-color: ${$bgColor || "var(--primary-color)"};
    color: ${$color || "#fff"};
    cursor: pointer;
    transition: all 0.2s linear;
    border-radius: 25px;
    letter-spacing: 0.1rem;

    &:hover {
      background-color: ${$hoverBgColor || "#fff"};
      color: ${$hoverColor || "var(--primary-color)"};
    }
  `}
`;

export default CTAButton;
