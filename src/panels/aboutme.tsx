import { Container, Button, Text, SimpleGrid, Image, Box } from '@chakra-ui/react'
import jslogo from '../assets/js-test.png'

export default function AboutMePanel() {
    return (
        <Container maxW='none'>
            <Container className='aboutme'>
                <Text fontSize='2xl'>About Me</Text>
                <Text>Lorem ipsum dolor sit amet consectetur. Orci gravida elit sit vulputate platea convallis laoreet eget diam. Lorem mauris viverra elit nec pellentesque et fames tristique. Arcu sed vestibulum donec sagittis sem placerat sodales. Dictumst tincidunt consectetur sagittis aliquet dui ornare laoreet. Integer molestie morbi vitae elit. Non sed et non et purus egestas tincidunt sed.</Text>
            </Container>
            <Container className='skills'>
                <Text fontSize='2xl'>Skills</Text>
                <SimpleGrid columns={4} spacing={5}>
                    <Box><Image src={jslogo} alt='JavaScript' /></Box>
                    <Box><Image src={jslogo} alt='JavaScript' /></Box>
                    <Box><Image src={jslogo} alt='JavaScript' /></Box>
                    <Box><Image src={jslogo} alt='JavaScript' /></Box>
                    <Box><Image src={jslogo} alt='JavaScript' /></Box>
                </SimpleGrid>
            </Container>
            <Button>Download my resume!</Button>
        </Container>
    )
}