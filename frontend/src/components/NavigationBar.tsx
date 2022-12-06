import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import "./NavBar.css"

type NavigationBarProps = {
    logout: () => Promise<string>
}

export default function NavigationBar(props: NavigationBarProps) {

    return (
        <div className={"nav-bar"}>
            <NavLink to={"/"} >Startseite</NavLink>
            <NavLink to={"/home"} >Home</NavLink>
            <NavLink to={"/students"} >Students</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    )
}
