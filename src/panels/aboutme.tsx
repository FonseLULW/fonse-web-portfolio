import { Button, Text, SimpleGrid, Image, Box, Grid, GridItem, Heading, Highlight, Link, useBreakpoint, useBreakpointValue } from '@chakra-ui/react'
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
            <GridItem area='desc' px={'2em'} py={'0.5em'} fontSize={['sm', 'md', 'xl']}>
                <Text>
                    As a developer with strong attention to detail, I strive to design and implement user-friendly applications through code that is easy to maintain and test. My goal is to create web/mobile apps and video games that everyone will find fun in.
                </Text>
                <Text marginTop='1em'>
                    I also specialize in data analysis and engineering. As a curious thinker, I like to know many things especially new and innovative technologies and how it will shape the future of our society. My favorite programming concepts are design patterns and programming paradigms.
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