import { Routes, Route } from 'react-router-dom'

import Home from './modules/general/home/home'
import Notfound from './modules/general/not-found/not-found'
import Profile from './modules/general/profile/profile'

function AppRouting() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default AppRouting
