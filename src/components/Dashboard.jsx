import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from "axios";
const Dashboard = () => {
    const[employeeList,setEmployeeList]=useState([])
    const fetchEmployeeList = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                setEmployeeList(response.data)
            }
        )
    }

    React.useEffect(()=>{fetchEmployeeList()},[])
  return (
    <div>
      <Navbar/>
      <div className="container">
        <h3>Employee List</h3>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {employeeList.map((value,index)=>{
        return <tr>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.email}</td>
      </tr>
    }

    )}
    
   
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
