import { Button, Container, Form, Stack } from 'react-bootstrap'
import './MaximSendMessage.scss'
import { IoIosSend } from 'react-icons/io'

const MaximSendMessage = () => {
    return (
        <div className='MaximSendMessage'>
            <Container>
                <Stack gap={2} direction='horizontal'>
                    <Form.Control type='text'/>
                    <Button><IoIosSend/></Button>
                </Stack>
            </Container>
        </div>
    )
}

export default MaximSendMessage