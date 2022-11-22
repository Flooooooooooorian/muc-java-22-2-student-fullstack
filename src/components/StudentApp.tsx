import StudentGallery from "./StudentGallery";
import AddStudent from "./AddStudent";
import "./StudentApp.css"
import useStudents from "../hooks/useStudents";

export default function StudentApp() {

    const {students, addStudent, removeStudent} = useStudents()

    return (
        <div className={"student-app"}>
            <h1 className={"student-app__title"}>Students</h1>
            <h2>Die neue Studenten Datenbank</h2>
            <AddStudent addStudent={addStudent}/>
            <StudentGallery students={students} removeStudent={removeStudent}/>
        </div>
    )
}
