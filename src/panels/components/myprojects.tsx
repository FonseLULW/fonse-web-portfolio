import { Text, Image, Card, CardBody, Box, Grid, SimpleGrid  } from '@chakra-ui/react'
import { ProjectConfig } from '../data/project_config'

let dummy = Array(10);

for (let i = 0; i < 10; i++) {
    dummy.push({
        key: i,
        title: 'Project 1', 
        subtitle: 'Subtitle', 
        imagepath: 'https://images.unsplash.com/photo-1682794496831-81a52c8e9136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    })
}


console.log(dummy);

export default function Projects() {
    return (
        <SimpleGrid minChildWidth='300px'>
            {
                dummy.map(proj => 
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