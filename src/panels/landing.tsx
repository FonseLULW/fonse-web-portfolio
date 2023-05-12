import { Container, Text, Image, Button, Flex, VStack, Box, Center } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpg'

export default function LandingPanel() {
    let [titleHeight, descHeight, imgHeight, btnHeight] = ['20%', '15%', '40%', '25%'];
    return (
        <Container maxW='none' padding='0.5em'>
            <VStack h='100%' spacing='0px'>
                <Flex height={titleHeight} direction='column' justifyContent='flex-end'>
                    <Text fontSize='4xl' align='center'>Jose Alfonso Clarito</Text>
                    <Text fontSize='2xl' align='center'>Software Developer</Text>
                </Flex>
                <Flex height={descHeight} direction='column' justifyContent='flex-end' alignItems='center'>
                    <Text align='center' fontSize='xl' width='80%'>Lorem ipsum dolor sit amet consectetur.</Text>
                </Flex>
                <Container height={imgHeight}>
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
                </Container>
                <Container height={btnHeight} centerContent>
                    <Button variant='solid' size='lg' width='100%'>Get in Touch</Button>
                </Container>
            </VStack>
        </Container>
    )
}