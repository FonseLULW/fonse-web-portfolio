import { Flex, Text, Image, Grid, Divider, VStack, Link, Box, GridItem, Heading } from '@chakra-ui/react'
import MsgForm from './components/msgform'
import { ContactConfig } from './data/contact_config'

export default function ContactMePanel() {
    return (
        <Grid id="contactmepanel" minH={"100vh"} maxW='none' padding='0.5em' templateAreas={[`
            "title"
            "contacts"
            "divider"
            "form"
            "footer"
        `, null, `
            "title title"
            "contacts divider"
            "contacts form"
            "footer footer"
        `]}>
            <GridItem area="title">
                <Heading fontSize='2xl'>Contact Me</Heading>
            </GridItem>
            <GridItem area={"contacts"}>
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
            <GridItem area={"divider"}>
                <Divider />
                <Heading as="h3" fontSize='xl'>or send me a message directly...</Heading>
            </GridItem>
            <GridItem area={"form"}>
                <MsgForm />
            </GridItem>
            <GridItem area={"footer"}>
                <Text>© All rights reserved</Text>
            </GridItem>
        </Grid>
    )
}