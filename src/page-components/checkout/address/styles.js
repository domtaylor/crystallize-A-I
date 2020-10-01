export const Label = styled.div`
  font-size: 0.7rem;
  /* padding-left: 15px; */
  opacity: 1;
  text-transform: uppercase;
  padding-bottom: 8px;
  font-weight: 600;
`;
export const InputGroup = styled.div`
  width: 100%;
  padding-right: 15px;
`;

export const Input = styled.input`
  background: var(--color-main-background);
  width: 100%;
  color: var(--color-text-sub);
  font-size: 16px;
  font-weight: 500;
  padding: 15px 15px;
  margin-bottom: 0.5rem;
  border: none;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  border-bottom: 1px solid var(--color-box-background);
  transition: border 0.2s ease-in-out;
  &::placeholder {
    font-size: 12px;
    opacity: 0.5;
    padding-left: 10px;
  }
  &:valid {
    border-bottom: 1px solid #b7e2e4;
  }

  &:invalid {
    border-bottom: 1px solid var(--color-error);
  }

  &[value=''] {
    border-bottom: 1px solid var(--color-box-background);
  }
`;
