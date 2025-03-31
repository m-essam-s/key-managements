import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './component/Layout'
import Home from './routes/Home'
import DiffieHellman from './routes/DiffieHellman'
import ElGamal from './routes/ElGamal'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="diffie-hellman" element={<DiffieHellman />} />
          <Route path="elgamal" element={<ElGamal />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
