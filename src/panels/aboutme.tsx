import { Button, Text, SimpleGrid, Image, Box, Grid, GridItem, Heading, Center, AspectRatio } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { SkillsConfig } from './data/skills_config'

export default function AboutMePanel() {
    return (
        <Grid minH={"100vh"} maxW='none' padding='0' templateRows={'10% 20% 10% 60%'} templateColumns='100%' templateAreas={`
            "about"
            "desc"
            "resume"
            "skills"
        `} id="aboutmepanel">
            <GridItem area='about'>
                <Heading fontSize='5xl' variant={'fit'}>About Me</Heading>
            </GridItem>
            <GridItem area='desc' px={'2em'} py={'0.5em'}>
                <Text noOfLines={4} fontSize={'xl'}>
                Lorem ipsum dolor sit amet consectetur. Orci gravida elit sit vulputate platea convallis laoreet eget diam. Lorem mauris viverra elit nec pellentesque et fames tristique. Arcu sed vestibulum donec sagittis sem placerat sodales. Dictumst tincidunt consectetur sagittis aliquet dui ornare laoreet. Integer molestie morbi vitae elit. Non sed et non et purus egestas tincidunt sed.
                </Text>
            </GridItem>
            <GridItem area='resume' py={'1em'} textAlign={'right'} pr={'2em'}>
                <Button rightIcon={<DownloadIcon />} size={'lg'} h={'100%'}>Download my resume!</Button>
            </GridItem>
            <GridItem area='skills'>
                <Heading fontSize='5xl' variant={'fit'}>Skills</Heading>
                <SimpleGrid columns={14} py={'2em'} spacingX={'1.5em'} spacingY={'1.5em'} justifyItems={'center'} mx={'2.5em'}>
                    {
                        SkillsConfig.map(item => 
                            <Box key={item.skill}>
                                <Image w={'250px'} src={
                                    `${item.imagepath}`
                                } alt={item.skill}/>
                            </Box>)
                    }
                </SimpleGrid>
            </GridItem>
        </Grid>
    )
}