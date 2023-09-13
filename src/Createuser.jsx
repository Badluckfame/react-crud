import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const CreateUser=()=>{
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let nameData=(x)=>{
        setName(x.target.value)
    }
    let ageData=(x)=>{
        setAge(x.target.value)
    }
    let salaryData=(x)=>{
        setSalary(x.target.value)
    }
    let companyData=(x)=>{
        setCompany(x.target.value)
    }
let navigate=useNavigate()

    let sub=(e)=>{
        e.preventDefault()
        console.log(name,age,salary,company);
        let payload={name,age,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("GOT THE DATA");
        })
        .catch(()=>{
            console.log("ERROR");
        })


navigate("/user")
window.location.assign("/user")
    }
    return(
        <div id={style.createuserblock}>
            <form action="">
                <label htmlFor="">Name: </label>
                <input type="text" onChange={nameData}/>
                <label htmlFor="">Age: </label>
                <input type="text" onChange={ageData}/>
                <label htmlFor="">Salary: </label>
                <input type="text" onChange={salaryData} />
                <label htmlFor="">Company</label>
                <input type="text" onChange={companyData} />
                <button onClick={sub}>SUBMIT</button>
            </form>
        </div>
    )
}
export default CreateUser