import { Container } from '@chakra-ui/react'
import LandingPanel from './panels/landing'
import AboutMePanel from './panels/aboutme'
import ProjectsPanel from './panels/projects'
import ContactMePanel from './panels/contactme'
import Fonts from './util/fonts'
import { ChakraProvider } from '@chakra-ui/react'
import defaultTheme from './themes/default/theme'
import './App.css'
import './index.css'


function App() {
  const snapAlign = 'start';

  return (
    <ChakraProvider theme={defaultTheme}>
      <Fonts />
      <Container maxW={"unset"} minW={"fit-content"} height="fit-content" m={0} p={0} scrollSnapType={'y mandatory'}>
        <LandingPanel snap={snapAlign}/>
        <AboutMePanel snap={snapAlign}/>
        <ProjectsPanel snap={snapAlign}/>
        <ContactMePanel snap={snapAlign}/>
      </Container>
    </ChakraProvider>
  )
}

export default App
