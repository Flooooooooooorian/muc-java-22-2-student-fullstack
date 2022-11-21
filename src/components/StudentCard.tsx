import {Student} from "../model/Student";
import "./StudentCard.css"

type StudentCardProps = {
    student: Student
    removeStudent: (id: string) => void
}

export default function StudentCard(props: StudentCardProps) {

    function onDeleteClick() {
        props.removeStudent(props.student.id)
    }

    return (
        <div className={"student-card"}>
            <p className="student-card__name">{props.student.name}</p>
            <p className="student-card__id">{props.student.id}</p>
            <button className={"student-card__button"} onClick={onDeleteClick}>Delete</button>
        </div>
    )
}
