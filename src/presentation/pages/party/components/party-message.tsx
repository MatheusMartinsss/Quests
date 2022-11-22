import React from 'react'
import { Typography } from '@mui/material'
type props = {
    id: any
    name: string
    message: string
    event: boolean
}
const PartyMessage: React.FC<props> = ({ id, name, message, event }: props) => {
    return (
        event ? (
            <Typography key={id} color='red' variant='h6'>
                {message}
            </Typography>
        ) : (
            <Typography key={id}  variant='h6'>
                {name}: {message}
            </Typography>
        )
    )
}
export default PartyMessage