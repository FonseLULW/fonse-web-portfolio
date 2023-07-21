import { Text, Image, Button, Box, Center, Grid, GridItem } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpg'

export default function LandingPanel() {
    return (
        <Grid minH={"100vh"} maxW='none' padding='0.5em' bg={['initial', null, 'brand.900']} templateAreas={[
            `
                "name"
                "role"
                "summary"
                "avatar"
                "action"
            `, null,
            `
                "name avatar"
                "role avatar"
                "summary avatar"
                "action avatar"
            `
        ]}>
            <GridItem area='name'>
                <Text fontSize='4xl' align='center' fontWeight={'bold'}>Jose Alfonso Clarito</Text>
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
                <Button variant='solid' size='lg'>Get in Touch</Button>
            </GridItem>
        </Grid>
    )
}