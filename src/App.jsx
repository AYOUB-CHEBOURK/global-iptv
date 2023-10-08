import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar , Footer} from './components/index'
import{ Home , Installation , Blog , Contact , BlogPage} from './page/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {

  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/installation' element={<Installation/>}/>
            <Route path='/blogPage' element={<BlogPage/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
