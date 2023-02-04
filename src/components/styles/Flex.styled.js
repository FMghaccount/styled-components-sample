import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  & h1, & button {
    direction: rtl;
    text-align: justify;
  }

  & p {
    direction: rtl;
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
