import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './components/Start/Start'
import Result_Frame from './components/Result_Frame/Result_Frame'
import About from './components/About/About'

function App() {
  const [imgurl,setimgurl]=useState("");
  const [mobileview,setmobileview]=useState(false);
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/start' element={<Start mobileview={mobileview} setmobileview={setmobileview} setimgurl={setimgurl}/>}></Route>
      <Route path='/Frame' element={<Result_Frame mobileview={mobileview} imgurl={imgurl}/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
