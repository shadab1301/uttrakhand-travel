import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './Components/Menu/Header';
import Footer from './Components/Menu/Footer';
import Home from './Components/Home/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
