import React from 'react'
import ReactDOM from 'react-dom/client'
/*Importar BrowserRouter para que mi App pueda manejar rutas 
Debe estar en un componente superior, para que este disponible en toda mi App*/
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*BrowserRouter envuelve mi app.*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
