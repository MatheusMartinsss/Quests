import React from 'react'
import { Box, Paper, Grid, TextField, Button } from '@mui/material'

const PartyMenu: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Grid
                component={Paper}
                container
                spacing={2}
                padding={5}
                maxWidth='400px'
            >
                <Grid item xs={12} md={12}>
                    <TextField variant='outlined' label='Codigo' placeholder='Digite o codigo de uma sala..' fullWidth></TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button color='success' fullWidth variant='contained'>Entrar</Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button color='inherit' fullWidth variant='contained'>Criar</Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button color='inherit' fullWidth variant='contained'>Salas</Button>
                </Grid>
            </Grid>
        </Box>

    )
}

export default PartyMenu