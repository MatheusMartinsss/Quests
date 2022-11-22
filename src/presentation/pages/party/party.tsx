import React, { useState } from 'react'
import { Box, Paper, Grid } from '@mui/material'
import { PartyMembersList, PartyMessageBox, PartyMessagesList } from './components/'

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

    let members = [{
        name: 'Matheus',
        score: 800
    }, {
        name: 'Usuario2',
        score: 700,
    }, {
        name: 'Usuario3',
        score: 600
    }]

    const handleMessage = (message: string): void => {
        setMessages((_messages: any) => ([..._messages, { name: 'Matheus', id: messages.length + 1, event: false, message: message }]))
    }
    return (
        <Box
            component={Paper}
            padding={2}
            display="flex"
            margin='auto'
            minHeight='400px'
            minWidth='200px'
            maxWidth='1000px'
        >
            <Grid
                container
                spacing={1}
            >
                <Grid item xs={12} md={10} order={{ xs: 2, md: 1 }}>
                    <PartyMessagesList
                        data={messages}
                    />
                </Grid>
                <Grid item xs={12} md={2} order={{ xs: 1, md: 2 }}>
                    <PartyMembersList
                        members={members}
                    />
                </Grid>
                <Grid item xs={12} md={12} order={{ xs: 3, md: 4 }}>
                    <PartyMessageBox
                        handleMessage={handleMessage}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
export default Party;