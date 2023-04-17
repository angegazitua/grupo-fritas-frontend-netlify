import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Resumen from './PaginaPrincipal'
import Equipo from './Equipo'


function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/paginaprincipal"} element={<Resumen />}/>
        <Route path={"/equipo"} element={<Equipo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;