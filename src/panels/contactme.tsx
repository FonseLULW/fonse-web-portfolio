import { Container, Flex, Text, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Divider, Button, VStack, Link, Box } from '@chakra-ui/react'
import jslogo from '../assets/js-test.png'

export default function ContactMePanel() {
    return (
        <Container maxW='none'>
            <Text fontSize='2xl'>Contact Me</Text>
            <VStack>
                <Flex>{/* Decompose into smaller component */}
                    <Box><Image boxSize={50} src={jslogo} alt='JavaScript'/></Box>
                    <Link>jalfonsclarito@gmail.com</Link>
                </Flex>
                <Flex>{/* Decompose into smaller component */}
                    <Box><Image boxSize={50} src={jslogo} alt='JavaScript' /></Box>
                    <Link>jalfonsclarito@gmail.com</Link>
                </Flex>
            </VStack>
            <Divider />
            <Text fontSize='md'>or send me a message directly...</Text>
            <FormControl>
                <Input type="text" placeholder='Name'/>
                <Input type="email" placeholder='Email'/>
                <Textarea placeholder="Message"></Textarea>
                <Button type="submit">Send</Button>
            </FormControl>
        </Container>
    )
}