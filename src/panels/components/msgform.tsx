import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Button, VisuallyHiddenInput, VStack, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineSend } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const VALID_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export default function MsgForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [err, setErr] = useState('');
    
    const validate = (nameInput: string, emailInput: string, msgInput: string) => {
        if (!nameInput) { return 'InvalidName' }
        if (!VALID_EMAIL.test(emailInput)) { return 'InvalidEmail' }
        if (!msgInput) { return 'InvalidMessage' }
        return ''
    };

    const handleSubmit = async () => {
        const err = validate(name.trim(), email.trim(), message.trim());
        if (!err) {
            var mail = {
                from_name: name,
                from_email: email,
                message: message
            }

            try {
                await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, mail, import.meta.env.VITE_PUBLIC_USER_ID)
                alert('msg sent');
                setErr('');
            } catch (e) {
                console.log("Env:", import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, mail, import.meta.env.VITE_PUBLIC_USER_ID)
                console.log("Service Error:", e)
                setErr('ServiceError');
            }


            return;
        }
        setErr(err);
    }

    return (
        <Flex h={'100%'} direction={'column'} justifyContent={'center'} gap={'0.75em'}>
            <FormControl isInvalid={err === 'InvalidName'} minH={'10%'}>
                <Input h={'100%'} type="text" bg={'white'} placeholder='Name' value={name} onChange={e => setName(e.target.value)} isRequired/>
                <FormErrorMessage>
                    A name is required
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={err === 'InvalidEmail'} minH={'10%'}>
                <Input h={'100%'} type="email" bg={'white'} placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} isRequired/>
                <FormErrorMessage>
                    A valid email is required
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={err === 'InvalidMessage'} minH={'20%'} flexGrow={'2'}>
                <Textarea h={'100%'} placeholder="Message" bg={'white'} value={message} onChange={e => setMessage(e.target.value)} isRequired></Textarea>
                <FormErrorMessage>
                    A message is required
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={err === 'ServiceError'}>
                <VisuallyHiddenInput />
                <FormErrorMessage>
                    Failed to send email
                </FormErrorMessage>
            </FormControl>
            <Button fontWeight={'600'} fontSize={'xl'} letterSpacing={'0.05em'} mt={'1.75em'} minH={'10%'} type="submit" bg={'primary_variant'} onClick={handleSubmit} rightIcon={<Icon as={AiOutlineSend} />}>Send</Button>
            
        </Flex>
    )
}