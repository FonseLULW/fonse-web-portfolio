import { Text, Image, Card, CardBody, Box, Grid, SimpleGrid  } from '@chakra-ui/react'
import { ProjectConfig } from '../data/project_config'

export default function Projects() {
    return (
        <SimpleGrid minChildWidth='300px'>
            {
                ProjectConfig.map(proj => 
                    <Card key={proj.key} h='100%'>
                        <CardBody>
                            <Box><Image src={proj.imagepath} alt={proj.title} /></Box>
                            <Text fontSize='xl'>{proj.title}</Text>
                            <Text fontSize='xl'>{proj.subtitle}</Text>
                        </CardBody>
                    </Card>
                )
            }
        </SimpleGrid>
    )
}