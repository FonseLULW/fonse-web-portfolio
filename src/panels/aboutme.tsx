import { Button, Text, SimpleGrid, Image, Box, Grid, GridItem, Heading, Center, AspectRatio, useBreakpoint, useBreakpointValue } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { SkillsConfig } from './data/skills_config'

export default function AboutMePanel() {
    const skillsGridRows = [4, 4, 4, 4, 4];
    const skillsGridCols = [4, 6, 8, 10, 14];

    return (
        <Grid scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' templateRows={'10% 20% 10% fit-content'} templateColumns='100%' templateAreas={`
            "about"
            "desc"
            "resume"
            "skills"
        `} id="aboutmepanel">
            <GridItem area='about'>
                <Heading fontSize={['4xl', null, '5xl']} variant={'fit'}>About Me</Heading>
            </GridItem>
            <GridItem area='desc' px={'2em'} py={'0.5em'}>
                <Text fontSize={['sm', 'md', 'xl']}>
                Lorem ipsum dolor sit amet consectetur. Orci gravida elit sit vulputate platea convallis laoreet eget diam. Lorem mauris viverra elit nec pellentesque et fames tristique. Arcu sed vestibulum donec sagittis sem placerat sodales. Dictumst tincidunt consectetur sagittis aliquet dui ornare laoreet. Integer molestie morbi vitae elit. Non sed et non et purus egestas tincidunt sed.
                </Text>
            </GridItem>
            <GridItem area='resume' py={'1em'} textAlign={['center', null, 'right']} pr={'2em'}>
                <Button rightIcon={<DownloadIcon />} size={['md', 'lg']} as='a' target='_blank'
                    href='https://drive.google.com/file/d/1uX2hiBGdTisT9zp2ZP6TlNWfJNLrPfZ5/view?usp=drive_link'
                >Download my resume!</Button>
            </GridItem>
            <GridItem area='skills'>
                <Heading fontSize={['4xl', null, '5xl']} variant={'fit'}>Skills</Heading>
                <SimpleGrid columns={skillsGridCols} w={'fit-content'} py={'2em'} spacingX={'1.5em'} spacingY={'1.5em'} justifyItems={'center'} mx={'2.5em'}  >
                    {
                        SkillsConfig
                        .slice(0, useBreakpointValue(skillsGridCols.map((colsize, i) => colsize * skillsGridRows[i])))
                        .map(item => 
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