import { ThemeProvider } from 'styled-components'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Card from './components/cardSection/Card'
import { Container } from './components/ContainerElement'
import GlobalStyles from './components/Global'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
