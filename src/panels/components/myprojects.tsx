import { Text, Image, Card, CardBody, Box, Grid, SimpleGrid  } from '@chakra-ui/react'
import { ProjectConfig } from '../data/project_config'

export default function Projects({arr, numCols}: {arr: Array<ProjectConfig>, numCols: number}) {
    return (
        <SimpleGrid 
            columns={numCols}
            templateColumns={['100%', null, `repeat(${numCols}, 1fr)`]}
        >
            {
                arr.slice(0, 2 * numCols).map(proj => 
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