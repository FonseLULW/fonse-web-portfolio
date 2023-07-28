import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Heading  } from '@chakra-ui/react'
import Projects from './components/myprojects'
import { MyProjects } from './data/project_config'

export default function ProjectsPanel() {
    return (
        <Container scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' id="projectspanel">
            <Heading fontSize='5xl' variant="cover" textAlign={'center'}>Projects</Heading>
            <Tabs variant='line' isFitted>
                <TabList bg={'primary_variant'}>
                    <Tab borderTopWidth={0} borderStartWidth={0} borderEndWidth={0} borderRadius={0}>Web / Mobile</Tab>
                    <Tab borderTopWidth={0} borderStartWidth={0} borderEndWidth={0} borderRadius={0}>Game Development</Tab>
                    <Tab borderTopWidth={0} borderStartWidth={0} borderEndWidth={0} borderRadius={0}>Data Engineering</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Projects arr={MyProjects} numCols={3}/>
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