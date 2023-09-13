import style from "./home.module.css"
import { useState,useEffect } from "react"
import axios from "axios"
import {useParams,useNavigate}from "react-router-dom"

const EditUser=()=>{
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigate=useNavigate()
    let {abc}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${abc}`)
        .then((response)=>{
            setName(response.data.name)
            setAge(response.data.age)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("ERROR");
        })
    },[abc])
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
    let formhandle=(e)=>{
        e.preventDefault()
        let payload={name,age,salary,company}
        console.log(name,age,salary,company);
        axios.put(`http://localhost:3000/users/${abc}`,payload)
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
        <div id={style.edituserblock}>
            <form action="">
                <label htmlFor="">Name: </label>
                <input type="text" onChange={nameData} value={name}/>
                <label htmlFor="">Age: </label>
                <input type="text" onChange={ageData} value={age}/>
                <label htmlFor="">Salary: </label>
                <input type="text" onChange={salaryData} value={salary} />
                <label htmlFor="">Company</label>
                <input type="text" onChange={companyData} value={company} />
                <button onClick={formhandle}>UPDATE</button>
            </form>
        </div>
    )
}
export default EditUser