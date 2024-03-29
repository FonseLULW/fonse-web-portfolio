import { Text, Image, Button, Box, Center, Grid, GridItem, Heading, Highlight } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpg'

export default function LandingPanel() {
    const getInTouch = () => {
        document.getElementById("contactmepanel")?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Grid scrollSnapAlign={'start'} minH={"100vh"} maxH={'100vh'} maxW='none' bg={'initial'} templateAreas={[
            `
                "hello"
                "name"
                "role"
                "summary"
                "avatar"
                "action"
            `, null, null,
            `
                "hello avatar"
                "name avatar"
                "role avatar"
                "summary avatar"
                "action avatar"
            `
        ]} gridTemplateColumns={[null, null, null, '64fr 36fr']} gridTemplateRows={[null, null, null, '40fr auto auto 20fr 40fr']}>
            <GridItem area='hello' alignSelf={'flex-end'}>
                <Text fontSize={['xl', null, '3xl', '4xl']} align='center'>Hello, my name is</Text> 
            </GridItem>
            <GridItem area='name'>
                <Heading as='h1' fontSize={['4xl', null, '5xl', '6xl']} textAlign={'center'} fontWeight={'semibold'} fontFamily={'name'} textTransform='uppercase' letterSpacing='widest'>Jose Alfonso Clarito</Heading>
            </GridItem>
            <GridItem area='role'>
                <Text fontSize={['xl', null, '3xl', '4xl']} align='center'><Highlight query='Software Developer' styles={{ px: '5', py: '2', rounded: 'full', bg: 'primary_variant' }}>Software Developer</Highlight></Text> 
            </GridItem>
            <GridItem area='summary' alignSelf={'end'}>
                <Text mb={'0.25em'} align='center' px={['0.5em', '0.5em', null, null, null, '6em']} fontSize={['sm', 'lg', 'xl']}>I am a detail-oriented full-stack software developer focused on providing every customer with the best user experience in every app.</Text>
            </GridItem>
            <GridItem area='avatar'>
                <Center h='100%' w='100%' bg={['initial', null, null, null, 'primary']} borderRadius={['0%', '0%', '0% 0% 0% 35%']}>
                    <Box justifySelf={'center'}>
                        <Image
                            margin={'auto'}
                            boxSize={['75%', '50%', null,'75%']}
                            borderRadius={['50%', null, null, '25%']}
                            borderColor={'primary_variant'}
                            borderStyle={'solid'}
                            borderWidth={10}
                            src={avatar}
                            alt='Fonse Clarito'
                            align='center'
                            objectFit={'fill'}
                        />
                    </Box>
                </Center>
            </GridItem>
            <GridItem area='action'>
                <Center mt={'0.25em'}><Button variant='solid' size={'lg'} fontSize={['2xl', null, null, '3xl']} onClick={getInTouch}>Get in Touch</Button></Center>
            </GridItem>
        </Grid>
    )
}