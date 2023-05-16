import { Container, Button, Text, SimpleGrid, Image, Box, Grid, GridItem } from '@chakra-ui/react'
import jslogo from '../assets/js-test.png'
import { SkillsConfig } from './data/skills_config'

export default function AboutMePanel() {
    return (
        <Grid maxW='none' templateRows={'20% 10% 70%'} templateColumns='100%' templateAreas={`
            "about"
            "resume"
            "skills"
        `}>
            <GridItem area='about'>
                <Text fontSize='2xl'>About Me</Text>
                <Text>Lorem ipsum dolor sit amet consectetur. Orci gravida elit sit vulputate platea convallis laoreet eget diam. Lorem mauris viverra elit nec pellentesque et fames tristique. Arcu sed vestibulum donec sagittis sem placerat sodales. Dictumst tincidunt consectetur sagittis aliquet dui ornare laoreet. Integer molestie morbi vitae elit. Non sed et non et purus egestas tincidunt sed.</Text>
            </GridItem>
            <GridItem area='resume'>
                <Button>Download my resume!</Button>
            </GridItem>
            <GridItem area='skills'>
                <Text fontSize='2xl'>Skills</Text>
                <SimpleGrid minChildWidth='100px' spacing={5}>
                    {
                        SkillsConfig.map(item => <Box key={item.skill}><Image src={`/skills/${item.imagepath}`} alt={item.skill}/></Box>)
                    }
                </SimpleGrid>
            </GridItem>
        </Grid>
    )
}