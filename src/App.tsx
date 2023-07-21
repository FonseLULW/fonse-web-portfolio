import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text, VStack, Container, chakra  } from '@chakra-ui/react'
import LandingPanel from './panels/landing'
import AboutMePanel from './panels/aboutme'
import ProjectsPanel from './panels/projects'
import ContactMePanel from './panels/contactme'
import Fonts from './fonts'

function App() {
  return (
    <>
    <Fonts />
    <Container maxW={"unset"} minW={"fit-content"} height="fit-content" m={0} p={0}>
      <LandingPanel />
      <AboutMePanel />
      <ProjectsPanel/>
      <ContactMePanel />
    </Container></>
  )
}

export default App
