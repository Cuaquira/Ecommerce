
import './App.css'
import { Home, Login, ProductDetail, Purchases } from "./Pages"
// import { NavBar, LoadingScreen } from "./Components"
import NavBar from "./Components/NavBar"
import LoadingScreen from "./Components/LoadingScreen"
import { useSelector } from "react-redux"
import {Container} from "react-bootstrap"
import { HashRouter, Routes, Route, } from 'react-router-dom'
import ProtectedRoutes from './Components/ProtectedRoutes'

  function App() {

    const isLoading = useSelector(state => state.isLoading)

    return (
      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScreen />}
        <Container>
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoutes/>}>
            <Route path='/purchases' element={<Purchases />} />
            </Route>
          </Routes>
        </Container>

      </HashRouter>
    )
  }

export default App
