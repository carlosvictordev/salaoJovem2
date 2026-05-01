import { Routes, Route } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import Account from "./pages/landing/Account"
import Home from "./pages/Home"
import Calendare from "./pages/Calendare"
import Conta from "./pages/Conta"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/account" element={<Account />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/agenda" element={<Calendare/>}/>
      <Route path="/conta" element={<Conta/>}/>
    </Routes>
  )
}

export default App