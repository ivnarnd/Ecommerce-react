import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
function NavBar() {
    return (
        <nav >
            <NavLink to="/">
                <h1>Cooking Time</h1>
            </NavLink>
            <ul>
                <li >
                    <NavLink to='/category/Repostería'>Reposteria</NavLink>
                </li>
                <li >
                    <NavLink to='/category/Merienda'>Merienda</NavLink>
                </li>
                <li >
                    <NavLink to='/category/Postres'>Postres</NavLink>
                </li>
                <li >
                    <NavLink to='/category/Desayuno'>Desayuno</NavLink>
                </li>
                <li >
                    <CardWidget />
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;