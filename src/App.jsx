import './App.css'
import { Route, Routes } from 'react-router-dom'

// Pages
import Homepage from './pages/Homepage/Homepage'
import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'


// Components
import Nav from './components/Nav/Nav'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      

 
    </>
  )
}

export default App
