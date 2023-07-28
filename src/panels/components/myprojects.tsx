import { Text, Image, Card, CardBody, Box, Grid, SimpleGrid, Flex  } from '@chakra-ui/react'
import { ProjectConfig } from '../data/project_config'

export default function Projects({arr, numCols}: {arr: Array<ProjectConfig>, numCols: number}) {
    return (
        <SimpleGrid 
            columns={numCols}
            templateColumns={['100%', null, `repeat(${numCols}, 1fr)`]}
            gap={'1em'}
        >
            {
                arr.slice(0, 2 * numCols).map(proj => 
                    <Card key={proj.key} h='fit-content' variant={'filled'} bg={'primary_variant'} border={'2px solid black'}>
                        <CardBody p={0} h={'fit-content'}>
                            <Box h={'fit-content'} w={'100%'}><Image src={proj.imagepath} alt={proj.title} h={'250px'}/></Box>
                            <Flex h={'fit-content'} flexDir={'column'} justifyContent={'space-between'} px={'0.5em'} py={'0.5em'}>
                                <Text fontSize='xl' fontWeight={'bold'}>{proj.title}</Text>
                                <Text fontSize='lg'>{proj.subtitle}</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                )
            }
        </SimpleGrid>
    )
}