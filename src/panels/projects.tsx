import { Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Card, CardHeader, CardBody, CardFooter, VStack, Box  } from '@chakra-ui/react'

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
                        <VStack> {/* need to decompose into a seperate component (turn it into grid not VStack as well)*/}
                            <Card>
                                <CardBody>
                                    <Box><Image src='https://images.unsplash.com/photo-1682794496831-81a52c8e9136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt='Project 1' /></Box>
                                    <Text fontSize='xl'>Project Name</Text>
                                    <Text fontSize='xl'>Company Name (or Solo Project)</Text>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <Box><Image src='https://images.unsplash.com/photo-1682480083604-69c8c1f78be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1960&q=80' alt='Project 1' /></Box>
                                    <Text fontSize='xl'>Project Name</Text>
                                    <Text fontSize='xl'>Company Name (or Solo Project)</Text>
                                </CardBody>
                            </Card>
                        </VStack>
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