import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default Main