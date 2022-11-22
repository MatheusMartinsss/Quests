import { Box, Paper } from '@mui/material'
import React from 'react'
import PartyMember from './party-member'
type props = {
    members: any
}
const PartyMembersList: React.FC<props> = ({ members }: props) => {
    return (
        <Box
            display='flex'
            minWidth='100px'
            flexGrow={{ xs: '1', md: '0' }}
            flexDirection = {{xs: 'row', md: 'column'}}
            height={{ xs: '60px', md: '400px' }}
            padding={2}
            gap = {1}
            overflow='auto'
        >
            {members.map(({ name, score }: any) => (
                <PartyMember name={name} score={score} />
            ))}
        </Box>
    )
}
export default PartyMembersList