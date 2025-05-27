
import type { FC } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./page/home"
import Register from "./page/register"
import Detail from "./page/detail"
import Login from "./page/login"
import Dashboard from "./page/dashboard"

const App:FC = () => {
  return (
   <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="login/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
     <Route path="/detail" element={<Detail/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
