import React, { useState } from 'react'
import { Grid, TextField, Button, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material'

type props = {
    handleParty: React.FC
}
const PartyForm: React.FC<props> = ({ handleParty }: props) => {
    const [form, setForm] = useState({ name: '', type: 'public', password: '' })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm((_form) => ({ ..._form, [event.target.name]: event.target.value }))
    };
    return (
        <Grid container spacing={2} padding={5}>
            <Grid item xs={12} md={12}>
                <TextField fullWidth label='Nome' placeholder='Digite o nome da sala...'></TextField>
            </Grid>
            <Grid item xs={12} md={12}>
                <FormLabel id="type">Sala</FormLabel>
                <RadioGroup
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                >
                    <FormControlLabel value="public" control={<Radio />} label="Pública" />
                    <FormControlLabel value="private" control={<Radio />} label="Privada" />
                </RadioGroup>
            </Grid>
            {form.type === 'private' && (
                <Grid item xs={12} md={12}>
                    <TextField fullWidth label='Senha' placeholder='Digite a senha...' type='password'></TextField>
                </Grid>
            )}
            <Grid item xs={12} md={6}>
                <Button fullWidth variant='contained' color='error'>
                    Cancelar
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button fullWidth variant='contained' color='success'>
                    Criar
                </Button>
            </Grid>
        </Grid>
    )
}
export default PartyForm