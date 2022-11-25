import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'

import Auth from '../auth/Auth'

function Content() {
  return (
    <main className="content">
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
      </Routes>
    </main>
  )
}

export default Content