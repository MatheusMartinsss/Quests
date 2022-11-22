import React, { useState } from 'react'
import { Box, Paper } from '@mui/material'
import PartyMessagesList from './components/party-messages-list'
import PartyMessageBox from './components/party-message-box'


const Party: React.FC = () => {

    const [messages, setMessages] = useState<any>([{
        id: 1,
        name: '',
        message: 'Matheus entrou na sala..',
        event: true
    }, {
        id: 2,
        name: 'Matheus',
        message: 'Olá, mundo!',
        event: false
    }, {
        id: 3,
        name: '',
        message: 'Matheus saiu da sala...',
        event: true
    }])
    const handleMessage = (message: string): void => {
        setMessages((_messages: any) => ([..._messages, { name: 'Matheus', id: messages.length + 1, event: false, message: message }]))
    }
    return (
        <Box
            component={Paper}
            padding={2}
            display="flex"
            flexGrow='1'
            flexDirection='column'
            margin='auto'
            minHeight='400px'
            minWidth='200px'
            maxWidth='1000px'
        >
            <PartyMessagesList
                data={messages}
            />
            <PartyMessageBox
                handleMessage={handleMessage}
            />
        </Box>
    )
}
export default Party;