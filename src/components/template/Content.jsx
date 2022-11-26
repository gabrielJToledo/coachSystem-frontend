import React from 'react'
import './Content.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import Auth from '../auth/Auth'
import Home from '../dashboard/Home'


function Content() {
  return (
    <main className="content">
      <Routes>
        {/* <Route path='/' element={<Navigate to="/home" />}></Route> */}
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </main>
  )
}

export default Content