import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 180px 0 60px;

  ul {
    list-style-type: none;
  }
  ul:first-child {
    padding-left: 15px;
    padding-right: 15px
  }
  ul:first-child li {
    text-align: justify;
  }

  ul li {
    margin-bottom: 20px;
    text-align: center;
    direction: rtl;
  }

  p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }

    ul li {
      text-align: center !important;
    }

    p {
      margin-top: 40px;
    }
  }
`
