import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
function NavBar(){
    return (
    //     <nav className="navbar navbar-expand-lg  p-0" aria-label="Offcanvas navbar large">
                
    //             
    //              <ul >
    //                 <li>
    //                     <NavLink to='/category/Repostería' className="nav-link">Reposteria</NavLink>
    //                 </li>
    //                 <li>
    //                      <NavLink to='/category/Merienda' className="nav-link">Merienda</NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink to='/category/Postres' className="nav-link">Postres</NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink to='/category/Desayuno' className="nav-link">Desayuno</NavLink>
    //                 </li>   
    //                 <li>
    //                     <CardWidget/>
    //                 </li>
                        
    //             </ul>
    // </nav>
    <nav className="navbar navbar-expand-lg  p-0" aria-label="Offcanvas navbar large">
    <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
            <h1 className="titulo-pagina">Cooking Time</h1>
        </NavLink>
        <button className=" navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Cooking Time</h5>
                <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <NavLink to='/category/Repostería' className="nav-link">Reposteria</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/Merienda' className="nav-link">Merienda</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/Postres' className="nav-link">Postres</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/Desayuno' className="nav-link">Desayuno</NavLink>
                    </li>
                    <li className="nav-item">
                        <CardWidget/>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</nav>
            );
}
export default NavBar;