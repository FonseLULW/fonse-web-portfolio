import { Flex, Text, Image, Grid, Divider, VStack, Link, Box, GridItem, Heading, Spacer, useBreakpointValue } from '@chakra-ui/react'
import MsgForm from './components/msgform'
import { ContactConfig } from './data/contact_config'

export default function ContactMePanel() {
    return (
        <Grid id="contactmepanel" scrollSnapAlign={'start'} h={"100vh"} maxH={'100vh'} w={'100%'} maxW='none' padding='0' templateAreas={[`
            "title"
            "contacts"
            "form"
            "footer"
        `, null, `
            "title form"
            "contacts form"
            "footer form"
        `]} templateRows={['10% 10% auto 5%', null, '15% auto 5%']} templateColumns={['100%', null, '40% 60%']} bg={['primary']}>
            <GridItem display={'flex'} alignItems={['end', null, 'center']} area={"title"} bg={[null, null, 'primary']} h={'100%'}>
                <Heading fontSize={['4xl', null, '3xl', '4xl', '5xl']} variant='cover' bgColor={["primary", null, 'primary_variant']} w={['100%']}>Contact Me</Heading>
            </GridItem>
            <GridItem display={'flex'} flexDir={'column'} justifyContent={['center', null, 'start']} area={"contacts"} alignSelf={'end'} bg={['primary_variant', null, 'primary']} h={'100%'}>
                <Flex direction={['row', null, 'column']} justifyContent={'space-evenly'} alignItems={['center', null, 'start']} px={'2.5em'} gap={['0.5em', null, '1em']}>
                    {
                        ContactConfig.map(contact => 
                            <Flex alignItems={'center'} gap={5} key={contact.display + '_' + contact.strategy}>
                                <Box as='a' target='_blank' href={contact.ref} display={'flex'} alignItems={'center'} justifyContent={'center'} boxSize={41}><Image boxSize={'100%'} src={`contacts/${contact.imagepath}`} alt={contact.strategy} /></Box>
                                {
                                    useBreakpointValue([null, null,
                                        <Link href={contact.ref} fontWeight={'500'} letterSpacing={'1px'} fontSize={['lg', null, 'sm', 'xl', '2xl']} fontFamily={'Work Sans'} target='_blank'>{contact.display}</Link>
                                    ])
                                }
                            </Flex>    
                        )
                    }
                </Flex>
            </GridItem>
            <GridItem area={"form"} px={'2em'} pb='2em' pt={'0.5em'} h={'100%'} bg={['primary', null, 'white']}>
                <MsgForm />
            </GridItem>
            <GridItem area={"footer"} px={['0.5em', null, '1em']} alignSelf={'end'} py={['0.25em', null, '1em']} bg={[null, null, 'primary']} h={'100%'}>
                <Text fontFamily={'Work Sans'} fontWeight={'500'} fontSize={['sm', null, 'xs', 'sm', 'md']}>© 2023 Jose Alfonso Clarito All rights reserved</Text>
            </GridItem>
        </Grid>
    )
}