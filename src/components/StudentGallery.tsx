import {Student} from "../model/Student";
import StudentCard from "./StudentCard";
import "./StudentGallery.css"

type StudentGalleryProps = {
    students: Student[]
    removeStudent: (id: string) => void
}

export default function StudentGallery(props: StudentGalleryProps) {
   return (
       <div className="student-gallery">
           {props.students.map(student => <StudentCard student={student} key={student.id} removeStudent={props.removeStudent}/>)}
       </div>
   )
}
