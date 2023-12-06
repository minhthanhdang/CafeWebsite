import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { AppNavBar } from './components/AppNavBar'
import { Reservation } from './pages/Reservation'

function App() {

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservation" element={<Reservation/>} />
      </Routes>
    </>
  )
}

export default App
