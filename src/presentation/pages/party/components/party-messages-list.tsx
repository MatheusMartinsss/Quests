import React from 'react'
import { Box} from '@mui/material'
import PartyMessage from './party-message'
import PartyMessageBox from './party-message-box'
type props = {
    data: any
}
const PartyMessagesList: React.FC<props> = ({ data }: props) => {
    return (
        <Box
            padding={2}
            display="flex"
            flexDirection='column'
            overflow='scroll'
            height='400px'
        >
            {data.map(({ id, message, name, event }: any) => (
                <PartyMessage key={id} id={id} name={name} event={event} message={message} />
            ))}
        </Box>
    )
}
export default PartyMessagesList