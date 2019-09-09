import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--gunMetal);
  color: ${prop => (prop.cart ? "var(--gunMetal)" : "var(--otterBrown)")};
  border-color: ${prop =>
    prop.cart ? "var(--gunMetal)" : "var(--otterBrown)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${prop =>
      prop.cart ? "var(--gunMetal)" : "var(--otterBrown)"};
    color: var(--cream);
    border-color: var(--gunMetal);
  }
  &:focus {
    outline: none;
  }
`;
