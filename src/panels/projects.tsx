import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Heading  } from '@chakra-ui/react'
import Projects from './components/myprojects'
import { MyProjects } from './data/project_config'

export default function ProjectsPanel() {
    return (
        <Container scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' id="projectspanel">
            <Heading fontSize='5xl' variant="cover" textAlign={'center'}>Projects</Heading>
            <Tabs variant='line' size={'lg'} isFitted>
                <TabList bg={'primary_variant'}>
                    <Tab>Work Experience</Tab>
                    <Tab>Group Projects</Tab>
                    <Tab>Solo Projects</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Projects arr={MyProjects} tags={['exp']}/>
                    </TabPanel>
                    <TabPanel>
                    <Projects arr={MyProjects} tags={['group']} exclude={['exp']}/>
                    </TabPanel>
                    <TabPanel>
                    <Projects arr={MyProjects} tags={['solo']} exclude={['exp']}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}