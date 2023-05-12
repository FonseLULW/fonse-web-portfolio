import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Card, CardHeader, CardBody, CardFooter, VStack, Box  } from '@chakra-ui/react'
import Projects from './myprojects'

export default function ProjectsPanel() {
    return (
        <Container maxW='none'>
            <Text fontSize='2xl'>Projects</Text>
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