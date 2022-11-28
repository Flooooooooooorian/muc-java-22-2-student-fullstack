import {NavLink} from "react-router-dom";


export default function NavigationBar() {

    return (
        <div>
            <NavLink to={"/"} >Startseite</NavLink>
            <NavLink to={"/home"} >Home</NavLink>
            <NavLink to={"/students"} >Students</NavLink>
        </div>
    )
}
