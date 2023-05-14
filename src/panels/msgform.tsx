import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Button, VisuallyHiddenInput } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

const VALID_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export default function MsgForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [err, setErr] = useState('ServiceError');

    useEffect(() => {
        console.log(`'The error is ${err}'`);
    }, [err])
    
    const validate = (nameInput: string, emailInput: string, msgInput: string) => {
        if (!nameInput) { return 'InvalidName' }
        if (!VALID_EMAIL.test(emailInput)) { return 'InvalidEmail' }
        if (!msgInput) { return 'InvalidMessage' }
        return ''
    };

    const handleSubmit = () => {
        const err = validate(name.trim(), email.trim(), message.trim());
        if (!err) {
            setErr('hi')
            var mail = {
                from_name: name,
                from_email: email,
                message: message
            }

            emailjs.send('service_b2o1ust', 'template_9azdhnp', mail, 'iqsvLPGvnlVF9X5ael')
            .then((res) => {
                alert('msg sent')
            })
            .catch((error) => {
                setErr('ServiceError');
            })

            return;
        }
        setErr(err);
    }

    return (
        <>
            <FormControl isInvalid={err === 'InvalidName'}>
                <Input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} isRequired/>
                {
                    err === 'InvalidName' &&
                    <FormErrorMessage>
                        A name is required (Use 'anonymous' if you don't want to provide a name)
                    </FormErrorMessage>
                }
            </FormControl>
            <FormControl isInvalid={err === 'InvalidEmail'}>
                <Input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} isRequired/>
                {
                    err === 'InvalidEmail' &&
                    <FormErrorMessage>
                        A valid email is required
                    </FormErrorMessage>
                }
            </FormControl>
            <FormControl isInvalid={err === 'InvalidMessage'}>
                <Textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} isRequired></Textarea>
                {
                    err === 'InvalidMessage' &&
                    <FormErrorMessage>
                        A message is required
                    </FormErrorMessage>
                }
            </FormControl>
            <FormControl isInvalid={err === 'ServiceError'}>
                <VisuallyHiddenInput />
                {
                    err === 'ServiceError' &&
                    <FormErrorMessage>
                        Failed to send email
                    </FormErrorMessage>
                }
            </FormControl>
            <Button type="submit" onClick={handleSubmit}>Send</Button>
            
        </>
    )
}