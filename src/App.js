import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import MessageBox from './components/MessageBox'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
  desktop: '1440px',
  largeScreen: '1860px',
  WideScreen: '2240px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        <MessageBox />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
