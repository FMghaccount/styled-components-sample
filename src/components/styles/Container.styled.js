import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 1200px ;
  }
  @media (min-width: ${({ theme }) => theme.largeScreen}) {
    width: 1640px ;
  }
  @media (min-width: ${({ theme }) => theme.WideScreen}) {
    width: 1880px ;
  }

`
