import { useEffect, useState } from "react"
import style from "./home.module.css"
import {Link} from "react-router-dom"
import axios from "axios"
const Users=()=>{
    let[users,setUsers]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            setUsers(response.data)
            console.log("DATA HAS BEEN STORED");
            console.log(response.data);
        })
        .catch(()=>{
            console.log("ERROR");
        })
    },[])
    let deleteData=(x)=>{
        axios.delete(`http://localhost:3000/users/${x}`)
        window.location.reload('/user')
    }
    return(
        <div id={style.userblock}>
            {users.map((x)=>{
                return(
                    <div id={style.userdata}>
                        <h3>Id:{x.id} </h3>
                        <h3>Name:{x.name} </h3>
                        <h3>Age:{x.age} </h3>
                        <h3>Salary:{x.salary} </h3>
                        <h3>Company:{x.company} </h3>
                        <button><Link to={`/edituser/${x.id}`}>EDIT</Link></button>
                        <button onClick={()=>{deleteData(x.id)}}>DELETE</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Users