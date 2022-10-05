import React, { useState,useEffect } from 'react'
import {db} from "./firebase.config"
import {collection, addDoc, getDocs} from "firebase/firestore"
import { async } from '@firebase/util';
function MyData() {
const [newName, setNewName] = useState("");
const [newAge, setNewAge] = useState(0);

const [users, setUsers] = useState([])
const userCollectionRef = collection(db, "users");

const createUser = async () => {
await addDoc(userCollectionRef, {name: newName, age: newAge})
alert("submitted successfully")
} 

useEffect(() => {

    const getUsers = async () => {
    const data = await getDocs(userCollectionRef)
    console.log(data);
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
 
   

    getUsers();
}, [])





  return (
    <div>{users.map((users) => {
        return(
            <>
             <div>
                <input type='text' placeholder="Your Name" onChange={(event) => {
                      setNewName(event.target.value)
                }} />
                 <input type='#' placeholder="Your Age" onChange={(event) => {
                      setNewAge(event.target.value)
                }} /> 
                <button onClick={createUser}>Submit</button>
             </div>
            <div className='' style={{textAlign: "center" , display: "flex" , justifyItems: "center"}}>
                <h1>
                    Name: {users.name}
                    Age: {users.age}
                    JOB: {users.job}
                </h1>
            </div>

     

            </>
          
        )
    })}</div>
  )
}

export default MyData