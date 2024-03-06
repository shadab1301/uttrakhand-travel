import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Home/Home';
import { Contact } from './Components/Contact/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
