import { FormControl, FormErrorMessage, Divider, Heading, Input, Textarea, Button, VisuallyHiddenInput, Icon, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import { AiOutlineSend } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const VALID_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export default function MsgForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    
    const validate = (nameInput: string, emailInput: string, msgInput: string) => {
        if (!nameInput) { return 'InvalidName' }
        if (!VALID_EMAIL.test(emailInput)) { return 'InvalidEmail' }
        if (!msgInput) { return 'InvalidMessage' }
        return ''
    };

    const handleSubmit = async () => {
        const err = validate(name.trim(), email.trim(), message.trim());
        if (!err) {
            setIsLoading(true);
            var mail = {
                from_name: name,
                from_email: email,
                message: message
            }

            try {
                await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, mail, import.meta.env.VITE_PUBLIC_USER_ID)
                setErr('');
                setSent(true);
                setTimeout(() => { setSent(false); }, 2000);
            } catch (e) {
                console.log("Env:", import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, mail, import.meta.env.VITE_PUBLIC_USER_ID)
                console.log("Service Error:", e)
                setErr('ServiceError');
            }

            setIsLoading(false);
            return;
        }
        setErr(err);
    }

    return (
        <Flex h={'100%'} direction={'column'} justifyContent={'center'} gap={'0.75em'}>
            <Divider borderColor={'black'} height={'1px'}/>
            <Heading as="h3" fontSize={['lg', null, 'xl']} fontFamily={'Comfortaa'}>or send me a message directly...</Heading>
            <FormControl isInvalid={err === 'InvalidName'} minH={'10%'} display={'flex'} flexDir={'column'} gap={'0.1em'}>
                <FormErrorMessage color={['red.700', null, 'red.500']}>
                    A name is required
                </FormErrorMessage>
                <Input py={'2em'} type="text" bg={'white'} borderColor={'grey'} placeholder='Name' value={name} onChange={e => setName(e.target.value)} isRequired/>
            </FormControl>
            <FormControl isInvalid={err === 'InvalidEmail'} minH={'10%'}>
                <FormErrorMessage color={['red.700', null, 'red.500']}>
                    A valid email is required
                </FormErrorMessage>
                <Input type="email" py={'2em'} bg={'white'} borderColor={'grey'} placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} isRequired/>
            </FormControl>
            <FormControl isInvalid={err === 'InvalidMessage'} minH={'20%'} maxH={'50%'} flexGrow={'2'}>
                <Textarea h={'100%'} placeholder="Message" borderColor={'grey'} bg={'white'} value={message} onChange={e => setMessage(e.target.value)} isRequired></Textarea>
                <FormErrorMessage color={['red.700', null, 'red.500']}>
                    A message is required
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={err === 'ServiceError'}>
                <VisuallyHiddenInput />
                <FormErrorMessage color={['red.700', null, 'red.500']}>
                    Failed to send email. Try again later.
                </FormErrorMessage>
            </FormControl>
            <Button isLoading={isLoading} fontWeight={'600'} fontSize={['xl', null, '2xl']} letterSpacing={'0.05em'} type="submit" onClick={handleSubmit}
                rightIcon={sent ? <CheckIcon /> : <Icon as={AiOutlineSend} />}
                bgColor={sent ? 'green.300' : ['primary_variant', null, 'primary']}
            >{sent ? "Sent": "Send"}</Button>
            
        </Flex>
    )
}