import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// useParams me permite recuperar rutas dinamicas :pid
// useNavigate me permite cambiar la ruta de forma programatica, es decir usarla en alguna funcion de js

const PortafolioDetalle = () => {
    const proyectos = [
        {id:1, nombre: 'Pinterest', desc: "Un clon de pinterest con HTML y CSS"},
        {id:2, nombre: 'Cajero', desc: "Simulador de Cajero automatico con HTML, CSS Y JS"},
        {id:3, nombre: 'Pokedex', desc: "Consumir la PokeAPI y mostrar un listado de pokemons con HTML, CSS y JS"}
    ]

    const { pid } = useParams() // Tiene el valor que yo le mando en ruta
    const navigate = useNavigate() // Para cambiar de ruta programaticamente
  return (
    <>
        <h3>ID: {proyectos[pid - 1].id}</h3>
        <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
        <p>Descripcion:{proyectos[pid - 1].desc}</p>
        <button onClick={() => {navigate('/portfile')}}>Nos vamos al portafolio</button>
        {/*Si quiero ir a la pagina anterior del historial: navigate(-1)
        Si quiero ir a la pagina siguiente del historial: navigate(1)*/} 
    </>
  )
}

export default PortafolioDetalle