import React, { useState, useEffect} from "react";
import axios from "axios";
import {Table} from 'react-bootstrap';


export default function AllStudent(){

    const [student, setStudents] = useState([]);

    useEffect(()=> {
        function getStudents(){
            axios.get("http://localhost:8070/student/")
                .then((res)=>{
                    setStudents(res.data);
                }).catch((err)=>{alert(err)})
        }
        getStudents();
    }, [])


    return (
        <div className="container">
            <h1>AllStudent</h1>
            

            <Table className="mt-4" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {student.map(item=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                </tr>
            )}
                </tbody>
            </Table>
        </div>
    )
}