import React from 'react'                                       //propio de react
import { savePersonName, getPersons } from "../application/api" //funciones de crud

export const Crear = ({setPersons}) => {                        //el componente recibe el estado para modificarlo desde qeuí
  const savePerson = async(e) => {                              //guarda los datos de la persona al hacer click en guardar
    e.preventDefault();  let target = e.target;
      let name      = target.name.value.toUpperCase();
      let lastName  = target.lastName.value.toUpperCase();
      let city      = target.city.value.toUpperCase();
      let cp        = target.cp.value;
    savePersonName(name, lastName, city, cp);
    e.target.reset();

    const p = await getPersons();
    setPersons(p.docs);
  }

  return (
    <>
        <form onSubmit={savePerson} className="create">
            <label>Nombre:</label><input type="text" placeholder="Nombre(s)" name="name" required/><br/>
            <label>Apellidos:</label><input type="text" placeholder="Apellidos" name="lastName" required/><br/>
            <label>Ciudad:</label><input type="text" placeholder="ciudad" name="city" required/><br/>
            <label>Código postal:</label><input type="text" placeholder="Código postal" name="cp" required/><br/>
            <input className='btn-create' type="submit" value="Guardar" />
        </form>
    </>
  )
}
