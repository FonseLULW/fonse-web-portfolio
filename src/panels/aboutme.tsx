import { Button, Text, SimpleGrid, Image, Box, Grid, GridItem, Heading, Highlight, Link, useBreakpoint, useBreakpointValue } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { SkillsConfig } from './data/skills_config'

export default function AboutMePanel() {
    const skillsGridRows = [3, 4, 4, 4, 4];
    const skillsGridCols = [4, 6, 8, 10, 14];

    return (
        <Grid scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' templateRows={'10% 20% 10% auto'} templateColumns='100%' templateAreas={`
            "about"
            "desc"
            "resume"
            "skills"
        `} id="aboutmepanel">
            <GridItem area='about'>
                <Heading fontSize={['3xl', null, '5xl']} variant={'fit'}>About Me</Heading>
            </GridItem>
            <GridItem area='desc' overflowY={'hidden'} px={'2em'} py={'0.5em'} fontSize={['sm', 'md', 'xl']} display={'flex'} flexDirection='column' justifyContent={['space-evenly', null, null, 'start']}>
                <Text>
                    As a developer with strong attention to detail, my goal is to create fun and engaging applications.
                {
                    useBreakpointValue([null, null, ' I strive to design and implement user-friendly applications through code that is easy to maintain and test.'
                    ])
                }
                </Text>
                <Text marginTop='1em'>
                        I also specialize in data analysis and engineering.
                {
                    useBreakpointValue([null, null, null, ' As a curious thinker, I like to know many things especially new and innovative technologies and how it will shape the future of our society.'
                    ])
                }
                </Text>
                
            </GridItem>
            <GridItem area='resume' py={'1em'} textAlign={['center', null, 'right']} pr={[null, null, '2em']} justifyContent={'center'}>
                <Button rightIcon={<DownloadIcon />} size={['md', 'lg']} as='a' target='_blank'
                    href='https://drive.google.com/file/d/1uX2hiBGdTisT9zp2ZP6TlNWfJNLrPfZ5/view?usp=drive_link'
                >Download my resume!</Button>
            </GridItem>
            <GridItem area='skills' display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                <Heading fontSize={['3xl', null, '5xl']} variant={'fit'}>Skills</Heading>
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