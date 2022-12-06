import {Button, TextField} from "@mui/material";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";


export default function LoginPage() {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function onUsernameChange(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function onLoginSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        axios.post("/api/users/login", undefined, {
            auth: {
                username,
                password
            },
        })
            .then(console.log)
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={onLoginSubmit}>
                <TextField placeholder={"Username"} value={username} onChange={onUsernameChange}/>
                <TextField type={"password"} placeholder={"Password"} value={password} onChange={onPasswordChange}/>
                <Button type={"submit"}>Login</Button>
            </form>
        </div>
    )
}

