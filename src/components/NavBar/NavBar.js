import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import Navbar from "./Navbar.css";
function NavBar(){
    return (
        <nav>
                
                <NavLink to="/" ><h1>Cooking Time</h1></NavLink>
                 <ul >
                    <li>
                        <NavLink to='/category/Repostería' className="nav-link">Reposteria</NavLink>
                    </li>
                    <li>
                         <NavLink to='/category/Merienda' className="nav-link">Merienda</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/Postres' className="nav-link">Postres</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/Desayuno' className="nav-link">Desayuno</NavLink>
                    </li>   
                    <li>
                        <CardWidget/>
                    </li>
                        
                </ul>
    </nav>
            );
}
export default NavBar;