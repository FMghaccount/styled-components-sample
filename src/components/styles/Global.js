import { createGlobalStyle } from 'styled-components'
import iranyekaneot from '../../assets/fonts/iranyekan/weight-400/iranyekanwebregularfanum.eot'
import iranyekanttf from '../../assets/fonts/iranyekan/weight-400/iranyekanwebregularfanum.ttf'
import iranyekanwoff from '../../assets/fonts/iranyekan/weight-400/iranyekanwebregularfanum.woff'

const GlobalStyles = createGlobalStyle`
  

@font-face {
  font-family: 'iranyekan';
  font-style: normal;
  font-weight: 400;
  src: url(${iranyekaneot});
  src: url(${iranyekaneot}?#iefix)
      format('embedded-opentype'),
    url(${iranyekanwoff}.woff)
      format('woff'),
    url(${iranyekanttf})
      format('truetype');
}

 :root{
  font-size: 16px
 }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(0deg 0% 0%);
    font-family: 'iranyekan', 'Poppins', sans-serif;
    font-size: 1.15rem;
    margin: 0;
    line-height: 1.7;
  }

  p {
    opacity: 0.6;
    line-height: 1.8;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    body{font-size: 1rem}
  }
`

export default GlobalStyles
