import React from 'react'
import { Link,Outlet } from 'react-router-dom'
// <Outlet/> es un componente que sirve en ruteos anidados para indicarle al padre, donde debe renderearse el hijo.

const Portfile = () => {
  return (
    <>
      <h1>Portafile</h1>
      <Outlet/>
      <nav>
        <ul>
          <li>
            <Link to="/Portfile/1">Pinterest</Link>
          </li>
          <li>
            <Link to="/Portfile/2">Cajero</Link>
          </li>
          <li>
            <Link to="/Portfile/3">Pokedex</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Portfile