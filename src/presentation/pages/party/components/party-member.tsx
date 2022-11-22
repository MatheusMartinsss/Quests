import React from 'react'
import { Typography } from '@mui/material'


type props = {
    name: string
    score: number
}
const PartyMember: React.FC<props> = ({ name, score }: props) => {
    return (
        <Typography variant='h6'>
            {name}  {score}
        </Typography>
    )
}
export default PartyMember;