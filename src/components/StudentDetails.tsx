import {useParams} from "react-router-dom";
import useStudent from "../hooks/useStudent";

export default function StudentDetails() {

    const params = useParams()

    const id: string | undefined = params.id

    const {student} = useStudent(id)

    if (!student) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
            <p>Hallo Student</p>
            {!student && <p>Loading...</p>}
            {<div>
                <p>{student.name}</p>
                <p>{student.id}</p>
            </div>
            }
        </div>

    )
}
