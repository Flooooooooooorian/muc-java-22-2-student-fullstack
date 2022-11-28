import {useEffect, useState} from "react";
import {NewStudent, Student} from "../model/Student";
import axios from "axios";

export default function useStudents() {

    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        getStudents()
    }, [])

    function getStudents() {
        axios.get("/students")
            .then(response => {
                setStudents(response.data)
            })
            .catch(console.error)
    }

    function addStudent(newStudent: NewStudent) {
        return axios.post("/students", newStudent)
            .then(response => response.data)
            .then((savedStudent) => setStudents(prevState => [...prevState, savedStudent]))
            .catch(console.error)
    }

    function removeStudent(id: string) {
        axios.delete(`/students/${id}`)
            .then(() => {
                setStudents(prevState => {
                    return prevState.filter((student) => student.id !== id
                    )
                })
            })
    }

    return {students, addStudent, removeStudent}
}
