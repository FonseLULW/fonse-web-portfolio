import { Flex, Text, Image, Grid, Divider, VStack, Link, Box, GridItem } from '@chakra-ui/react'
import MsgForm from './msgform'
import { ContactConfig } from './data/contact_config'

export default function ContactMePanel() {
    return (
        <Grid maxW='none'>
            <GridItem>
                <Text fontSize='2xl'>Contact Me</Text>
            </GridItem>
            <GridItem>
                <VStack>
                    {
                        ContactConfig.map(contact => 
                            <Flex key={contact.display + '_' + contact.strategy}>
                                <Box><Image boxSize={50} src={`contacts/${contact.imagepath}`} alt={contact.strategy} /></Box>
                                <Link href={contact.ref}>{contact.display}</Link>
                            </Flex>    
                        )
                    }
                </VStack>
            </GridItem>
            <GridItem>
                <Divider />
                <Text fontSize='md'>or send me a message directly...</Text>
            </GridItem>
            <GridItem>
                <MsgForm />
            </GridItem>
        </Grid>
    )
}