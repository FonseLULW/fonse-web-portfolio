import { Flex, Text, Image, Grid, Divider, VStack, Link, Box, GridItem, Heading, Spacer } from '@chakra-ui/react'
import MsgForm from './components/msgform'
import { ContactConfig } from './data/contact_config'

export default function ContactMePanel() {
    return (
        <Grid id="contactmepanel" scrollSnapAlign={'start'} minH={"100vh"} maxW='none' padding='0' templateAreas={[`
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
        `]} templateRows={'10% 20% 5% auto 5%'} bg={'primary'}>
            <GridItem area={"title"} h={'fit-content'}>
                <Heading fontSize={['4xl', null, '5xl']} variant='cover' width={'90%'} bgColor="primary_variant" mt={'0.5em'}>Contact Me</Heading>
            </GridItem>
            <GridItem area={"contacts"} alignSelf={'end'} pb={'1em'}>
                <VStack color={'black'} alignItems={'start'} px={'2.5em'} gap={'0.5em'}>
                    {
                        ContactConfig.map(contact => 
                            <Flex alignItems={'center'} gap={5} key={contact.display + '_' + contact.strategy}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} boxSize={41}><Image boxSize={'100%'} src={`contacts/${contact.imagepath}`} alt={contact.strategy} /></Box>
                                <Link href={contact.ref} fontWeight={'500'} letterSpacing={'1px'} fontSize={'lg'} fontFamily={'Work Sans'} target='_blank'>{contact.display}</Link>
                            </Flex>    
                        )
                    }
                </VStack>
            </GridItem>
            <GridItem area={"divider"} px={'2em'} display={'flex'} flexDir={'column'} justifyContent={'space-evenly'}>
                <Divider borderColor={'black'} height={'1px'}/>
                <Heading as="h3" fontSize={['xl', null, 'xl']} fontFamily={'Inder'}>or send me a message directly...</Heading>
            </GridItem>
            <GridItem area={"form"} px={'2em'} pb='2em' pt={'0.5em'}>
                <MsgForm />
            </GridItem>
            <GridItem area={"footer"} px={'0.5em'} alignSelf={'end'} py={'0.25em'}>
                <Text fontFamily={'Work Sans'} fontWeight={'500'}>© All rights reserved</Text>
            </GridItem>
        </Grid>
    )
}