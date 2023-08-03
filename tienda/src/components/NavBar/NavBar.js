import CardWidget from "../CardWidget/CardWidget";

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg  p-0 m-0" aria-label="Offcanvas navbar large" >
        <div className=" container-fluid">
        <a className="navbar-brand" >
            <h1 className="titulo-pagina">Cooking Time</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
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
                        <a className="nav-link" aria-current="page" >Budines</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" >Alfajores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" >Brownies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" ><CardWidget/></a>
                    </li>
                    
                </ul>

            </div>
        </div>
        </div>
    </nav>
            );
}
export default NavBar;