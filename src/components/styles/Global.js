import { createGlobalStyle } from 'styled-components'
import Vazireot from '../../assets/fonts/vazir/Vazir.eot';
import Vazirttf from '../../assets/fonts/vazir/Vazir.ttf';
import Vazirwoff from '../../assets/fonts/vazir/Vazir.woff';
import Vazirwoff2 from '../../assets/fonts/vazir/Vazir.woff2';

const GlobalStyles = createGlobalStyle`
   @font-face {
   font-family: 'Vazir';
   src: url(${Vazireot});
   src: url(${Vazireot}?#iefix)
       format('embedded-opentype'),
     url(${Vazirwoff2}) format('woff2'),
     url(${Vazirwoff}) format('woff'),
     url(${Vazirttf}) format('truetype');
   font-weight: normal;
   font-style: normal;
 }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Vazir', 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`

export default GlobalStyles


