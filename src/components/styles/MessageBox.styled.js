import styled from 'styled-components'

export const StyledMessageBox = styled.div`
  position: relative;
  margin-top: 12rem;
`
export const CallToAction = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 31.25rem;
  margin: 0 1.25rem;
  background-color: white;
  border-radius: 0.9375rem;
  padding: 1.875rem 1.25rem;
  box-shadow: 0.625rem 0.625rem 1rem 0.25rem rgb(0 0 0 / 22%);
  left: 50%;
  left: 0;
  right: 0;
  top: -90px;
  margin: 0 auto;
  text-align: center;

  & > .subtitle {
    margin-top: unset;
    margin-bottom: 2.5rem;
  }

  & > button {
    direction: rtl;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    &{font-size: 0.8rem}
    & > button {font-size: 0.78rem}
  }

`

