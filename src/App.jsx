import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavbarComponents from "./Components/Navbar";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Solutions from "./Components/Solutions";
import Customers from "./Components/Customers";

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route path="" element={<NavbarComponents/>}>

      <Route path='/' element={<About/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/solutions' element={<Solutions/>}/>
      <Route path='/customers' element={<Customers/>} />
      
      </Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
