import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Student} from "../model/Student";
import axios from "axios";

export default function StudentDetails() {

    const params = useParams()
    const [student, setStudent] = useState<Student>()

    const id: string | undefined = params.id

    useEffect(() => {
        if (id) {
            getStudentById(id)
        }
    }, [])

    function getStudentById(id: string) {
        axios.get("/student/" + id)
            .then(response => response.data)
            .then(data => {
                setStudent(data)
            })
            .catch(console.error)
    }

    return (
        <div>
            <p>Hallo Student</p>
            {!student && <p>Loading...</p>}
            {student && <div>
                            <p>{student.name}</p>
                            <p>{student.id}</p>
                        </div>
            }
        </div>

    )
}
