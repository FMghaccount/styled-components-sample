import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-family: 'iranyekan';
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 40px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ show }) => show};
  }
`
