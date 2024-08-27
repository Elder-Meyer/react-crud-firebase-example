import React, { useState, useEffect } from "react"; //propio de react
import { getPersons } from "../application/api"      //funciones de crud
import { Crear } from "../components/Crear";         //*********** */
import { Listado } from "../components/Listado";     //COMPONENTES
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom';

export const Router = () => {
  const [persons, setPersons] = useState(null);     //estado para guardar la info.

  const getPersonsData = async() => {               //obtiene los datos de firestore
    const p = await getPersons();
    setPersons(p.docs);
  }

  useEffect(()=>{                                   //ejecuta la funcion anterior al inicio
    getPersonsData();
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
    <h2>Conexion a firebase</h2>        <hr/>

    
        <nav>
          <ul>
            <li><NavLink to="/listado">LISTADO</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/crear">AGREGAR ELEMENTO</NavLink></li>
          </ul>
        </nav>
        
        {/**Rutas */}
        <Routes>
            <Route path="/" element={<Navigate to="/listado"/>} />
            <Route path="/listado" element={<Listado persons={persons} setPersons={setPersons} getPersonsData={getPersonsData} />} />
            <Route path="/crear" element={<Crear setPersons={setPersons} />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}
