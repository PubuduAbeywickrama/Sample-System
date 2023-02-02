import React, {useState} from "react";
import axios from "axios";
import './AddStudent.css';
import { useNavigate } from "react-router-dom";


export default function AddStudent(){


    const [fullname, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [parentname, setParentName] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
    function sendData(e){
        e.preventDefault();
        
        const newStudent = {
            fullname,
            address,
            gender,
            dob,
            parentname,
            contactnumber,
            notes
        }
        
        axios.post("http://localhost:8070/student/add",newStudent)
        .then(()=>{
            navigate("/");
        }).catch((err)=>{
            alert(err)
        })


    }


    

    


    return(
        <div className="mainContainer">
            <div>
            <h5>Add New Student here...</h5>
            </div>
           

            <div className="homediv">
                
                    <form onSubmit={sendData} className = "formcontainer">
                        <div class="mb-3">
                            <label for="name">Student Name</label>
                            <input type="text" class="form-control" id="fullname" placeholder="Enter Student Name" 
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="Enter Address"
                            onChange={(e)=>{
                                setAddress(e.target.value);
                            }}/>
                        </div>

                        <div class="mb-3">
                            <label for="gender">Student Gender</label>
                            <input type="textarea" class="form-control" id="gender" placeholder="Enter Gender"
                            onChange={(e)=>{
                                setGender(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="dob">Date of Birth</label>
                            <input type="text" class="form-control" id="dob" placeholder="Enter Date of Birth"
                            onChange={(e)=>{
                                setDob(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="parentname">Parent Name</label>
                            <input type="text" class="form-control" id="parentname" placeholder="Enter Parent Name"
                            onChange={(e)=>{
                                setParentName(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="contact">Contact Number</label>
                            <input type="text" class="form-control" id="contact" placeholder="Enter Parent Contact Number"
                            onChange={(e)=>{
                                setContactNumber(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="notes">Student Gender</label>
                            <textarea rows = "4" class="form-control" id="notes" placeholder="Enter diseases / about children"
                            onChange={(e)=>{
                                setNotes(e.target.value);
                            }}/>   
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                

            </div>
            
        </div>
    )
}