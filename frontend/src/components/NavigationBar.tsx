import {NavLink} from "react-router-dom";
import "./NavBar.css"

export default function NavigationBar() {

    return (
        <div className={"nav-bar"}>
            <NavLink to={"/"} >Startseite</NavLink>
            <NavLink to={"/home"} >Home</NavLink>
            <NavLink to={"/students"} >Students</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
        </div>
    )
}
