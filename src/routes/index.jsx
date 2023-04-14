//1. Importar de React Router: Routes, Route

import { Routes, Route } from 'react-router-dom'
import  Portfile  from '../pages/Portfile'
import  Home  from '../pages/Home'
import  Contact  from '../pages/Contact'
import Error404 from '../pages/Error404'
import PortafolioDetalle from '../pages/PortafolioDetalle'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfile' element={<Portfile/>}> 
          <Route path=':pid' element={<PortafolioDetalle/>} />
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error404/>}/>
    </Routes>
  )
}

export default RoutesIndex