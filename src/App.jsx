import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './assets/Inicio.jsx'
import Historial from './assets/Historial.jsx'
import { FormularioProveedor } from './assets/FormularioContexto.jsx'; 
import Navbar from './assets/Navbar.jsx';


function App() {

  return (

    <FormularioProveedor>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='Historial' element={<Historial/>}></Route>
        </Routes>
      </BrowserRouter>
      </FormularioProveedor>
  )
}

export default App
