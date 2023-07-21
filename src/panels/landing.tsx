import { Text, Image, Button, Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpg'

export default function LandingPanel() {
    return (
        <Grid minH={"100vh"} maxW='none' bg={['initial', null, 'brand.900']} templateAreas={[
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
        ]} gridTemplateColumns={[null, null, '64fr 36fr']}>
            <GridItem area='name'>
                <Heading as='h1' fontSize='4xl' textAlign={'center'} fontWeight={'bold'} fontFamily={'name'} textTransform='uppercase'>Jose Alfonso Clarito</Heading>
            </GridItem>
            <GridItem area='role'>
                {/* Replace with fancy animation */}
                <Text fontSize='2xl' align='center'>Software Developer</Text> 
            </GridItem>
            <GridItem area='summary'>
                <Text align='center' fontSize='xl'>Lorem ipsum dolor sit amet consectetur.</Text>
            </GridItem>
            <GridItem area='avatar'>
                <Center h='100%' w='100%' bg='primary' borderBottomLeftRadius={'35%'} borderTopRightRadius={['35%', null, '0%']}>
                    <Box justifySelf={'center'}>
                        <Image
                            margin={'auto'}
                            boxSize={'75%'}
                            borderRadius={['50%', null, '25%']}
                            borderColor={'black'}
                            borderStyle={'solid'}
                            borderWidth={1}
                            src={avatar}
                            alt='Fonse Clarito'
                            align='center'
                            objectFit={'fill'}
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