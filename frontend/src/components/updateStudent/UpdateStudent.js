import React, {useState, Component, useEffect} from "react";

import './UpdateStudent.css';
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateStudent(){
    
    const [existingStd, setExistingStd] = useState([]); 

    const [fullname, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [parentname, setParentName] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [notes, setNotes] = useState("");

  

    //   const initialState = {
    // fullname: "",
    // address: "",
    // gender: "",
    // dob: "",
    // parentname: "",
    // contact: "",
    // notes: "",
   
	// };
    // const [crud, setCrud] = useState(initialState);
   
	// const { _id } = useParams();
    // useEffect(()=>{
        
    //     const fetchAll= async() =>{
    //         try {
    //             const res = await axios.get(`'http://localhost:8070/student/get/`);
    //             console.log(res.data)

    //             setCrud(res.data);
                
    //         } catch (error) {
                
    //         }
    //     }
    //     //console.log(id);
    //     fetchAll();
    // },[])

    const getdata= async(e)=>{
        e.preventDefault();
        try {
            //await axios.put()
        } catch (error) {
            
        }
    }

    function sendData(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        
        const newStudent = {
            fullname,
            address,
            gender,
            dob,
            parentname,
            contactnumber,
            notes
        }
        
        // axios.put(`http://localhost:8070/student/update/${id}`,newStudent)
        // .then(()=>{
        //     alert("Student added")
        // }).catch((err)=>{
        //     alert(err)
        // })


    }
    



//   const initialState = {
//     fullname: "",
//     address: "",
//     gender: "",
//     dob: "",
//     parentname: "",
//     contact: "",
//     notes: "",
   
// 	};
	
// 	const navigate = useNavigate();

// 	useEffect(
// 		function () {
// 			async function updateCrud() {
// 				try {
// 					const response = await axios.get("http://localhost:8070/student/get/63db9ab7f111d6106ef87db9");
// 					setCrud(response.data);
// 				} catch (error) {
// 					console.log(error);
// 				}
// 			}
// 			updateCrud();
// 		},
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 		[]
// 	);




    return(
        <div className="mainContainer">
            
           

            <div className="homediv">
                
                    <form onSubmit={sendData} className = "formcontainer">
                        <div class="mb-3">
                            <label for="name">Student Name</label>
                            <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Enter Student Name" 
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" name="address" placeholder="Enter Address"
                            onChange={(e)=>{
                                setAddress(e.target.value);
                            }}/>
                        </div>

                        <div class="mb-3">
                            <label for="gender">Student Gender</label>
                            <input type="textarea" class="form-control" id="gender" name="gender" placeholder="Enter Gender"
                            onChange={(e)=>{
                                setGender(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="dob">Date of Birth</label>
                            <input type="text" class="form-control" id="dob" name="dob" placeholder="Enter Date of Birth"
                            onChange={(e)=>{
                                setDob(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="parentname">Parent Name</label>
                            <input type="text" class="form-control" id="parentname" name="parentname" placeholder="Enter Parent Name"
                            onChange={(e)=>{
                                setParentName(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="contact">Contact Number</label>
                            <input type="text" class="form-control" id="contact" name="contact" placeholder="Enter Parent Contact Number"
                            onChange={(e)=>{
                                setContactNumber(e.target.value);
                            }}/>   
                        </div>

                        <div class="mb-3">
                            <label for="notes">Student Gender</label>
                            <textarea rows = "4" class="form-control" id="notes" name="notes" placeholder="Enter diseases / about children"
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