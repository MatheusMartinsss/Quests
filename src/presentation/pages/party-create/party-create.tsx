import React from 'react'
import { Container } from '@mui/material'
import PartyForm from './components/party-form'
const PartyCreate: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <PartyForm />
        </Container>
    )
}
export default PartyCreate