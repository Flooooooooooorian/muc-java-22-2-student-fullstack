import {useEffect, useState} from "react";
import {Student} from "../model/Student";
import axios from "axios";

function useStudent(id: string | undefined) {
    const [student, setStudent] = useState<Student>()

    useEffect(() => {
        if (id) {
            getStudentById(id)
        }
        //eslint-disable-next-line
    }, [])

    function getStudentById(id: string) {
        axios.get("/api/students/" + id)
            .then(response => response.data)
            .then(data => {
                setStudent(data)
            })
            .catch(console.error)
    }

    return {student}
}

export default useStudent;
