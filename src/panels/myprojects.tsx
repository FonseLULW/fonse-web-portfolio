import { Text, Image, Card, CardBody, Box, VStack  } from '@chakra-ui/react'
import { ProjectConfig } from './data/project_config'

export default function Projects() {
    console.log(ProjectConfig.length)
    return (
        <VStack>
            {
                ProjectConfig.map(proj => 
                    <Card>
                        <CardBody>
                            <Box><Image src={proj.imagepath} alt={proj.title} /></Box>
                            <Text fontSize='xl'>{proj.title}</Text>
                            <Text fontSize='xl'>{proj.subtitle}</Text>
                        </CardBody>
                    </Card>
                )
            }
        </VStack>
    )
}