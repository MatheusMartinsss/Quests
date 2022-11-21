import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakePartyMenu, MakePartyCreate, MakeParty } from '../pages/'
const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MakePartyMenu />} />
                <Route path='/criar' element={<MakePartyCreate />} />
                <Route path='/sala/:id' element={<MakeParty/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers