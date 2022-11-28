import {Gender, NewStudent} from "../model/Student";
import {ChangeEvent, useState} from "react";
import "./AddStudent.css"
import {Button, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";

type AddStudentProps = {
    addStudent: (newStudent: NewStudent) => Promise<any>
}

export default function AddStudent(props: AddStudentProps) {

    const [name, setName] = useState<string>("")
    const [gender, setGender] = useState<Gender>(Gender.DIVERS)

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onGenderChange(event: SelectChangeEvent) {
        console.log(event)
        setGender(event.target.value as Gender)
    }

    function onSaveClick() {
        props.addStudent({name: name})
            .then(() => {
                setName("")
            })
    }

    return (
        <div>
            <TextField placeholder={"Name"} value={name} onChange={onNameChange}/>
            <Select
                value={gender}
                label="Gender"
                onChange={onGenderChange}
            >
                <MenuItem value={Gender.MALE}>Male</MenuItem>
                <MenuItem value={Gender.FEMALE}>Female</MenuItem>
                <MenuItem value={Gender.DIVERS}>Divers</MenuItem>
            </Select>
            <input className={"add-student__name"} placeholder={"Name"} value={name} onChange={onNameChange}/>
            <Button size={"large"} variant={"contained"} color={"success"} onClick={onSaveClick}>Save</Button>
            <button className={"add-student__button"} onClick={onSaveClick}>Save</button>
        </div>
    )

}
