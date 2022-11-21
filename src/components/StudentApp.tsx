import {useEffect, useState} from "react";
import {NewStudent, Student} from "../model/Student";
import axios from "axios";
import StudentGallery from "./StudentGallery";
import AddStudent from "./AddStudent";
import "./StudentApp.css"

export default function StudentApp() {


    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        getStudents()
    }, [])

    function getStudents() {
        axios.get("/student")
            .then(response => {
                setStudents(response.data)
            })
            .catch(console.error)
    }

    function addStudent(newStudent: NewStudent) {
        return axios.post("/student", newStudent)
            .then(response => response.data)
            .then((savedStudent) => setStudents(prevState => [...prevState, savedStudent]))
            .catch(console.error)
    }

    function removeStudent(id: string) {
        axios.delete(`/student/${id}`)
            .then(() => {
                setStudents(prevState => {
                    return prevState.filter((student) => student.id !== id
                    )
                })
            })
    }

    return (
        <div className={"student-app"}>
            <h1 className={"student-app__title"}>Students</h1>
            <AddStudent addStudent={addStudent}/>
            <StudentGallery students={students} removeStudent={removeStudent}/>
        </div>
    )
}
