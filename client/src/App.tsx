import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { AppNavBar } from './components/AppNavBar'
import { Reservation } from './pages/Reservation'
import { BookingSuccess } from './pages/BookingSuccess'
import { AppFooter } from "./components/AppFooter";
import { Events } from './pages/Events'

function App() {

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/bookingSuccess" element={<BookingSuccess/>} />
      </Routes>
      <AppFooter />
    </>

  )
}

export default App
