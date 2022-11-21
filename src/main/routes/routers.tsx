import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeParty, MakePartyCreate } from '../pages/'
const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MakeParty />} />
                <Route path='/criar' element={<MakePartyCreate />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers