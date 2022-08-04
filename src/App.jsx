import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Home, Login, ProductDetail, Purchases} from "./Pages"
import {NavBar, LoadingScreen} from "./Components";
import {useSelector} from "react-redux";

function App() {
  
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NavBar/>
      { isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<ProductDetail />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/purchases' element={<Purchases />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
