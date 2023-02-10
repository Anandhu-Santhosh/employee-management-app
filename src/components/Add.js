import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  const [id ,setId]=useState('')
  const [empname ,setEmpname]=useState('')
  const [age ,setAge]=useState('')
  const [designation ,setDesignation]=useState('')
  const [salary ,setSalary]=useState(0)

  let history=useNavigate()

  const handleData=(e)=>{
    e.preventDefault();
    let ids=uuid()
    console.log(ids);
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      empname:empname,
      age:age,
      designation:designation,
      salary:salary,
    })
    history('/')
  }
  return (
    <div>
          <h1 className='text-center mt-5'>Add employee details</h1>
    <p className='p-4'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
    <Row>
      <Col md={5}>
      <img style={{width:'600px', height:'600px'}} src='https://icons.veryicon.com/png/o/business/monochrome-financial-and-business-icons/employee-card.png'/>
      </Col>
      <Col md={6}>
      <Form className='border border-4 p-5'>
      <Form.Group className="mb-3">
        <h3 className='text-center'>Add your details</h3>
        <Form.Label>Employee name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
        // value={empname} 
        onChange={(e=>setEmpname(e.target.value))} required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Age" 
        // value={age} 
        onChange={(e=>setAge(e.target.value))} required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" 
        // value={designation} 
        onChange={(e=>setDesignation(e.target.value))} required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" 
        // value={salary} 
        onChange={(e=>setSalary(e.target.value))} required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirm" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleData(e)}>
        Add
      </Button>
    </Form>
      </Col>
    </Row>
    </div>
  )
}

export default Add