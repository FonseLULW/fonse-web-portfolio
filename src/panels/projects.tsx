import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Heading  } from '@chakra-ui/react'
import Projects from './components/myprojects'

export default function ProjectsPanel() {
    return (
        <Container minH={"100vh"} maxW='none' padding='0.5em' id="projectspanel" bg={'secondary'}>
            <Heading fontSize='2xl'>Projects</Heading>
            <Text fontSize='l'>Lorem ipsum</Text>
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}