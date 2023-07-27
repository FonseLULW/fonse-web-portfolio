import { Container, VisuallyHidden } from '@chakra-ui/react'
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
  return (
    <ChakraProvider theme={defaultTheme}>
      <Fonts />
      <Container maxW={"unset"} minW={"fit-content"} height="fit-content" minH={'fit-content'} m={0} p={0} scrollSnapType={'y mandatory'}>
        {/* <VisuallyHidden  scrollSnapAlign={'start'} w={'0px'} h={'0px'}/> */}
        <LandingPanel/>

        {/* <VisuallyHidden  scrollSnapAlign={'start'} w={'0px'} h={'0px'}/> */}
        <AboutMePanel/>

        {/* <VisuallyHidden  scrollSnapAlign={'start'} w={'0px'} h={'0px'}/> */}
        <ProjectsPanel/>

        {/* <VisuallyHidden  scrollSnapAlign={'start'} w={'0px'} h={'0px'}/> */}
        <ContactMePanel/>
      </Container>
    </ChakraProvider>
  )
}

export default App
