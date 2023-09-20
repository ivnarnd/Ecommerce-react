import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";

function NavBar(){
    return (
        <nav className="bg-melon flex justify-between items-center" >
        
                <NavLink to="/" className="link"><h1 className="p-2 text-redCMYK">Cooking Time</h1></NavLink>
                 <ul className="flex justify-between items-center text-white">
                    <li className="p-2">
                        <NavLink to='/category/Repostería' className="nav-link">Reposteria</NavLink>
                    </li>
                    <li className="p-2">
                         <NavLink to='/category/Merienda' className="nav-link">Merienda</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to='/category/Postres' className="nav-link">Postres</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to='/category/Desayuno' className="nav-link">Desayuno</NavLink>
                    </li>   
                    <li className="p-2">
                        <CardWidget/>
                    </li>
                        
                </ul>
    </nav>
            );
}
export default NavBar;