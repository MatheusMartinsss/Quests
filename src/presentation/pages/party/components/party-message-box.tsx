import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'

type props = {
    handleMessage: (message: string) => void
}
const PartyMessageBox: React.FC<props> = ({ handleMessage }: props) => {
    const [message, setMessage] = useState<string>('')
    const sendMessage = (): void => {
        handleMessage(message)
        setMessage('')
    }
    return (
        <Box
            padding={2}
            display="flex"
            minHeight='50px'

        >
            <TextField
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        return sendMessage()
                    }
                }}
                fullWidth
                onChange={({ target }) => setMessage(target.value)}
                value={message}
            >
            </TextField>
        </Box>
    )
}
export default PartyMessageBox