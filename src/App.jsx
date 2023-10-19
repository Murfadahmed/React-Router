import { Link, Routes, Route } from "react-router-dom"
import { Home, Contact, Portfolio, About } from "./components"

function App() {
  

  return (
    <>
    <h1>murfad ahmed</h1>
      <ul className='flex gap-4 justify-center my-3'>
        <Link to="/home">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
      </ul>



      <Routes>
        <Route path="/home " element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App