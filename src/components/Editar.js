import React from 'react'
import { updatePerson, getPersons } from "../application/api"

export const Editar = ({p, getPersonsData, setEditar, setPersons}) => {

    const updatePersonData = async(e, id) =>{
        e.preventDefault();
        const p = await getPersons();
        
        let name = e.target.name.value.toUpperCase();    
        let lastName = e.target.lastName.value.toUpperCase();
        let city = e.target.city.value.toUpperCase();
        let cp = e.target.cp.value;
    
        await updatePerson(id, name, lastName, city, cp);
        getPersonsData();
        
        e.target.reset();

        setPersons(p.docs);
        setEditar(0);
    }    

  return (
    <div>
        <form onSubmit={e=> updatePersonData(e, p.id)} className="update">
            <label>Nombre:</label><input type="text" name="name" defaultValue={p.data().name} /><br/>
            <label>Apellidos:</label><input type="text" name="lastName" defaultValue={p.data().lastName} /><br/>
            <label>Ciudad:</label><input type="text" name="city" defaultValue={p.data().direction.city} /><br/>
            <label>Código Postal:</label><input type="text" name="cp" defaultValue={p.data().direction.cp} /><br/>
            <br/>
            
            <input type="submit" value="Actualizar" />
        </form>
    </div>
  )
}

