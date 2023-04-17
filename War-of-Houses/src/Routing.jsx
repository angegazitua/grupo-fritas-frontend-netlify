import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Resumen from './PaginaPrincipal'


function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/paginaprincipal"} element={<Resumen />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;