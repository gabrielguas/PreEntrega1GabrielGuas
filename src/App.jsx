import { useState } from 'react'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//import './App.css'



const Titulo = () => {
  return (
    <div>
      <h1>Tienda Bytes</h1>
      <h2>Soluciones integrales</h2>
    </div>
  )
}


function App() {

  return (
    <div>
      <Titulo />
      <Navbar />
      <ItemListContainer texto='Este es mi texto, creo que así está bien.'/>
      <Footer />
    </div>
  )
}

export default App
