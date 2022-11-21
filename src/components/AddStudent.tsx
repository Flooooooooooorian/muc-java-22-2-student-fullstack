import {NewStudent} from "../model/Student";
import {ChangeEvent, useState} from "react";
import "./AddStudent.css"

type AddStudentProps = {
    addStudent: (newStudent: NewStudent) => Promise<any>
}

export default function AddStudent(props: AddStudentProps) {

    const [name, setName] = useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onSaveClick() {
        props.addStudent({name: name})
            .then(() => {
                setName("")
            })
    }

    return (
        <div>
            <input className={"add-student__name"} placeholder={"Name"} value={name} onChange={onNameChange}/>
            <button className={"add-student__button"} onClick={onSaveClick}>Save</button>
        </div>
    )

}
