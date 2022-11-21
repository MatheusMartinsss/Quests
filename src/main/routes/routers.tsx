import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeParty } from '../pages/'
const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MakeParty />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers