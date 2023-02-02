import React, { useState, useEffect} from "react";
import axios from "axios";
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


export default function AllStudent(){

    const [student, setStudents] = useState([]);

    useEffect(()=> {
        
        getStudents();

        
    }, [])
    function getStudents(){
        axios.get("http://localhost:8070/student/")
            .then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{alert(err)})
    }

    const onDelete = (id) =>{
        
        axios.delete(`http://localhost:8070/student/delete/${id}`).then((res) =>{
            alert("Delete Successfull")
            getStudents()
        })
        
    }
    

    return (
        <div className="container">
            <h6>Student Data</h6>
            

            <Table className="mt-4" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Student Full Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Parent Name</th>
                        <th>Contact Number</th>
                        <th>Special Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map(item=>
                    <tr>
                        <td>{item.fullname}</td>
                        <td>{item.address}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                        <td>{item.parentname}</td>
                        <td>{item.contactnumber}</td>
                        <td>{item.notes}</td>
                        <td>
                            
                            <Button href="">Edit</Button>   <Button onClick={()=>onDelete(item._id)}>Delete</Button></td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}