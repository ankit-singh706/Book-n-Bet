import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';


import NavBar from './components/Navbar/Navbar'
import Tickets from './pages/Tickets/Tickets'
import Foot from './components/Footer/Footer'
import Detail from './components/Detail/Detail'
import Stadium from './components/3DStadium/Stadium';
import Payment from './pages/Payments/Payment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <NavBar/>
        <Routes>
          {/* <Route path='/' element={<Homepage/>}></Route> */}
          <Route path='/iccTickets' element={<Tickets/>}></Route>
          
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/stadiumview" element={<Stadium/>}></Route>
          <Route path="/checkout" element={<Payment/>}></Route>

        </Routes>
        <Foot/>
      </Router>
  )
}

export default App
