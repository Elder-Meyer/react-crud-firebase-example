import { db } from "./firebase"
import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"

//ALTA
export const savePersonName = (name, lastName, city, cp) =>{
    addDoc(collection(db, 'persons'), { 
        name,
        lastName,
        direction: {
            city,
            cp,
        } 
    });
}

//CONSULTA
export const getPersons = async() =>{
    const result = await getDocs(query(collection(db, 'persons')));
    return result;
}

//REMOVE
export const deletePerson = async(id) =>{
    await deleteDoc(doc(db, 'persons', id));
}

//UPDAT4
export const updatePerson = async(id, name, lastName, city, cp) =>{
    await updateDoc(doc(db, 'persons', id), {
        name,
        lastName,
        direction: {
            city,
            cp,
        }
    });
}