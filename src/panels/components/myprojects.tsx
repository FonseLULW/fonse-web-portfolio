import { Text, Image, Card, CardBody, Box, Grid, SimpleGrid, Flex, useBreakpointValue  } from '@chakra-ui/react'
import { ProjectConfig } from '../data/project_config'

export default function Projects({arr, tags, lim = 5}: {arr: Array<ProjectConfig>, tags: Array<string>, lim?: number}) {
    const cols = useBreakpointValue([1, 2, 3, 4, 5]) || 3
    return (
        <SimpleGrid 
            columns={cols}
            templateColumns={`repeat(${cols}, 1fr)`}
            gap={'1em'}
        >
            {
                arr
                .filter(proj => tags.some(tag => proj.tags.includes(tag)))
                .slice(0, useBreakpointValue([lim, 2 * cols]))
                .map(proj => 
                    <Card key={proj.key} h='100%' variant={'filled'} bg={'primary_variant'} border={'2px solid black'}>
                        <CardBody p={0} h={'100%'} display={'flex'} flexDir={'column'} justifyContent={'end'}>
                            <Box bg={'#EEE9DA45'} display={'flex'} justifyContent={'center'} flexGrow={'2'}>
                                <Image src={proj.imagepath} alt={proj.title}/>
                            </Box>
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