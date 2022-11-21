import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { makeParty } from '../pages/'
const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    {makeParty()}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers