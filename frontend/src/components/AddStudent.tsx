import {Gender, NewStudent} from "../model/Student";
import {ChangeEvent, useCallback, useState} from "react";
import "./AddStudent.css"
import {Button, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";

type AddStudentProps = {
    addStudent: (newStudent: NewStudent) => Promise<any>
}

export default function AddStudent(props: AddStudentProps) {

    const [name, setName] = useState<string>("")
    const [gender, setGender] = useState<Gender>(Gender.DIVERS)

    const onNameChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value)
        }, [])

    function onGenderChange(event: SelectChangeEvent) {
        console.log(event)
        setGender(event.target.value as Gender)
    }

    const onGenderChangeCallback = useCallback(onGenderChange, []);

    function onSaveClick() {
        props.addStudent({name: name})
            .then(() => {
                setName("")
            })
    }

    return (
        <div className={"add-student"}>
            <TextField placeholder={"Name"} value={name} onChange={onNameChange}/>
            <Select
                value={gender}
                label="Gender"
                onChange={onGenderChangeCallback}
            >
                <MenuItem value={Gender.MALE}>Male</MenuItem>
                <MenuItem value={Gender.FEMALE}>Female</MenuItem>
                <MenuItem value={Gender.DIVERS}>Divers</MenuItem>
            </Select>
            <Button size={"large"} variant={"contained"} color={"success"} onClick={onSaveClick}>Save</Button>
        </div>
    )

}
