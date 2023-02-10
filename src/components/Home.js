import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaEdit,FaRegTrashAlt,FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

function Home() {
const history=useNavigate();

  const handleDelete=(id)=>{
    alert('Are you sure you want to delete')
    console.log(Employee.map((item)=>item.id).indexOf(id));
    let index=Employee.map((item)=>item.id).indexOf(id)
    console.log(index);
    Employee.splice(index,1)
    console.log(Employee);
    history('/')
  }

  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",JSON.stringify(salary));
  }
  return (
    <div>
        <h1 className='text-center mt-5'>Employee Management System</h1>
        <p className='p-4'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
        <Link to={'/add'}>
        <Button className='btn btn-success'>Add<FaUserPlus/></Button>
        </Link>

    <Table striped bordered hover style={{margin:"50px",border:"2px solid", width:"95%"}}>
      <thead>
        <tr>
          <th>Id</th>  
          <th>Username</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employee && Employee.length>0 ? 
            Employee.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.empname}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to={'/edit'}>
                      <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaEdit/></Button>
                      </Link>
                      <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaRegTrashAlt/></Button>
                    </td>
                </tr>
            ))
            : "No data available"
        }

      </tbody>
    </Table>
    </div>
  )
}

export default Home