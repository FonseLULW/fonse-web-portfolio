import { Container, Text, Image, Button, Flex, VStack, Box, Center, Grid, GridItem } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpg'

export default function LandingPanel() {
    return (
        <Grid maxW='none' padding='0.5em' bg={['initial', null, 'grey']} templateAreas={[
            `
                "name"
                "role"
                "summary"
                "avatar"
                "action"
            `, null,
            `
                "avatar name"
                "avatar role"
                "avatar summary"
                "avatar action"
            `
        ]}>
            <GridItem area='name'>
                <Text fontSize='4xl' align='center'>Jose Alfonso Clarito</Text>
            </GridItem>
            <GridItem area='role'>
                <Text fontSize='2xl' align='center'>Software Developer</Text>
            </GridItem>
            <GridItem area='summary'>
                <Text align='center' fontSize='xl'>Lorem ipsum dolor sit amet consectetur.</Text>
            </GridItem>
            <GridItem area='avatar'>
                <Center h='100%' w='100%'>
                    <Box boxSize='2xs'>
                        <Image
                            borderRadius='full'
                            src={avatar}
                            alt='Fonse Clarito'
                            align='center'
                        />
                    </Box>
                </Center>
            </GridItem>
            <GridItem area='action'>
                <Button variant='solid' size='lg' width='100%'>Get in Touch</Button>
            </GridItem>
        </Grid>
    )
}