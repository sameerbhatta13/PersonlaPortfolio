import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './src/components/Navbar'
import HomePage from './src/components/HomePage'
const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                    <Route path='/home' element={<HomePage />} />

                </Routes>

            </Router>

        </>
    )
}
export default MyRoutes