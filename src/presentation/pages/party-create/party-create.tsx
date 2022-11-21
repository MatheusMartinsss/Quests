import React from 'react'
import { Box } from '@mui/material'
import PartyForm from './components/party-form'
import PartyCreatedForm from './components/party-created-form'

const party = {
    name: 'Nova Party',
    codigo: 'ABF25323'
}
const PartyCreate: React.FC = () => {
    let created: boolean = false
    const handlePartyCreate: React.FC = (): any => {
        created = !created
        return { created }
    }
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
     
        >
            {created ?
                <PartyForm
                    handleParty={handlePartyCreate}
                />
                :
                <PartyCreatedForm
                    data={party}
                />
            }
        </Box>
    )
}
export default PartyCreate