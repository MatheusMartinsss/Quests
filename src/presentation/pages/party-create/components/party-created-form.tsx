import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
type props = {
    data: any
}
const PartyCreatedForm: React.FC<props> = ({ data }: props) => {
    return (
        <Grid container spacing={2} padding={5} maxWidth='600px'>
            <Grid item xs={12} md={12}>
                <TextField value={data.name} fullWidth  label='Nome da sala'> </TextField>
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField value={data.codigo} fullWidth label='Codigo da sala'> </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button color='warning' fullWidth variant='contained'>
                    <ContentCopyIcon />
                    Copiar codigo
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button color='success' fullWidth variant='contained'>
                    <WhatsAppIcon />
                    Compartilhar
                </Button>
            </Grid>
            <Grid item xs={12} md={12}>
                <Button color='primary' fullWidth variant='contained'>
                    Ir para a sala
                    <ExitToAppIcon />
                </Button>
            </Grid>
        </Grid>
    )
}
export default PartyCreatedForm