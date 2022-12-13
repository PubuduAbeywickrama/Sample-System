const router = require("express").Router();
let Student = require("../models/student");


//data add to database
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save()
        .then(()=>{
            res.json("Student added");
        })
        .catch((err) => {
            console.log(err);
        })

})


//get data or display data from database
router.route("/").get((req,res)=>{
    Student.find()
        .then((students)=>{
            res.json(students);
        })
        .catch((err)=>{
            console.log(err);
        })
})

//update data
//we can use post method also
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
        .then(()=>{
            res.status(200).send({status : "User Updated"});
        })
        .catch((err)=>{
            res.status(500).send({status: "Error on update data"});
        })
})


//delete data
router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status : "User deleted"});
        })
        .catch((err)=>{
            console.log(err);
        })
})


//get one data set
router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status : "User fetched", student});
    })
    .catch(()=>{
        res.status(500).send({status : "error with get user"});
    })
})



module.exports = router;