import {Navigate, Outlet} from "react-router-dom";

type ProtectedRoutesProps = {
    username: string | undefined
}

// Ziel: Eine Komponente die prüft, ob wir eingelogt sind, und Kindrouten sehen dürfen
export default function ProtectedRoutes(props: ProtectedRoutesProps) {

    // username sollte authorisiert sein!
    // username sollte nicht ..
    const isAuthenticated: boolean = props.username !== "anonymousUser" && props.username !== undefined && props.username !== null

    return (
        // Wir bräuchten "Conditional Rendering"
        //    D.h. es wird etwas angezeigt, WENN eine Bedingung erfüllt ist
        //   {isAuthenticated ? <bedingung erfüllt> : <bedingung nicht erfüllt> }

        // <Outlet>
        /*
        * Ein <Outlet> sollte in übergeordneten Routenelementen verwendet werden,
        * um deren untergeordnete Routenelemente darzustellen.
        * Dadurch kann die verschachtelte Benutzeroberfläche angezeigt werden, wenn die untergeordneten Routen gerendert werden.
        * Wenn die übergeordnete Route genau übereinstimmt, wird eine untergeordnete Index-Route gerendert oder nichts, wenn es keine Index-Route gibt.
        * */
        isAuthenticated ? <Outlet/> : <Navigate to={"/login"}/>
    )
}