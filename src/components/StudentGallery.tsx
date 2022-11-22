import {Student} from "../model/Student";
import StudentCard from "./StudentCard";
import "./StudentGallery.css"
import {ChangeEvent, useState} from "react";

type StudentGalleryProps = {
    students: Student[]
    removeStudent: (id: string) => void
}

export default function StudentGallery(props: StudentGalleryProps) {

    const [searchText, setSearchText] = useState<string>("")

    const filteredStudents: Student[] = props.students.filter(student => student.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <input className={"student-gallery__search"} placeholder={"Search"} value={searchText} onChange={onSearchChange}/>

            <div className="student-gallery">
                {filteredStudents.map(student => <StudentCard student={student} key={student.id}
                                                              removeStudent={props.removeStudent}/>)}
            </div>
        </div>
    )
}
