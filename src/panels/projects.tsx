import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Heading  } from '@chakra-ui/react'
import Projects from './components/myprojects'

export default function ProjectsPanel() {
    return (
        <Container scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' id="projectspanel" bg={'secondary'}>
            <Heading fontSize='5xl' variant="cover" textAlign={'center'}>Projects</Heading>
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