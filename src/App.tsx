import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text, VStack } from '@chakra-ui/react'
import LandingPanel from './panels/landing'
import AboutMePanel from './panels/aboutme'
import ProjectsPanel from './panels/projects'
import ContactMePanel from './panels/contactme'

function App() {
  return (
    <>
      <LandingPanel />
      <AboutMePanel />
      <ProjectsPanel/>
      <ContactMePanel />
    </>
  )
}

export default App
