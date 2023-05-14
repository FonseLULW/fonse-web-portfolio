import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Button } from '@chakra-ui/react'
import { useState } from 'react'

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

    const handleSubmit = () => {
        const err = validate(name.trim(), email.trim(), message.trim());
        if (!err) {
            setErr('');
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
            <Button type="submit" onClick={handleSubmit}>Send</Button>
            
        </>
    )
}