import React, { useEffect, useState } from 'react'            //propio de react
import { getPersons, deletePerson } from "../application/api" //funciones de crud
import { Editar } from './Editar';                            //componentes

export const Listado = ({persons, setPersons, getPersonsData}) => {           //recibe los estados de la obtencion de datos principal
  const [editar, setEditar] = useState(0);

  /*const getPersonsData = async() => {                           //obtiene los datos de firestore
    const p = await getPersons();
    setPersons(p.docs);
  }*/  //esta funcion se ejecutaba en un useEffect pero se omitió ya que la carga se hace en el componente padre y aquí solo se actualiza al hacer un cambio 

  async function removePerson(personId) {
    await deletePerson(personId);
    const p = await getPersons();
    setPersons(p.docs);
  }

  return (
    <div className='read'>
      {
        persons ? (persons.map(p=> {
          return(
            <ul key={p.id} className="item">
                <li><strong>Nombre(s): </strong> {p.data().name}</li>
                <li><strong>Apellidos: </strong> {p.data().lastName}</li>
                <li><strong>Ubicación: </strong></li>
                <ul>
                    <li><strong>Ciudad: </strong> {p.data().direction.city}</li>
                    <li><strong>CP: </strong> {p.data().direction.cp}</li>  
                </ul>
                <button className='btn-edit' onClick={()=>setEditar(p.id)}>editar</button>
                <button className='btn-delt' onClick={()=>removePerson(p.id)}>Eliminar</button>
                <br/>
                {editar === p.id && (
                    <Editar 
                        p={p}
                        getPersonsData={getPersonsData}
                        setEditar={setEditar}
                        setPersons={setPersons}
                    />
                )}

            </ul>
          )
        }))
        :
        (<h1>No hay datos</h1>)
      }
    </div>
  )
}
