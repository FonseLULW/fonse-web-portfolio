import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Heading  } from '@chakra-ui/react'
import Projects from './components/myprojects'
import { MyProjects } from './data/project_config'

export default function ProjectsPanel() {
    return (
        <Container scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' id="projectspanel">
            <Heading fontSize='5xl' variant="cover" textAlign={'center'}>Projects</Heading>
            <Tabs variant='line' size={'lg'} isFitted>
                <TabList bg={'primary_variant'}>
                    <Tab>Team projects</Tab>
                    <Tab>Solo projects</Tab>
                    <Tab>Data Science (Solo)</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Projects arr={MyProjects} tags={['group']}/>
                    </TabPanel>
                    <TabPanel>
                    <Projects arr={MyProjects} tags={['solo']} exclude={['data']}/>
                    </TabPanel>
                    <TabPanel>
                    <Projects arr={MyProjects} tags={['data']}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}