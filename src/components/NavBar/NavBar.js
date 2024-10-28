
import CardWidget from "../CardWidget/CardWidget";
import './Navbar.css';
import HamburgerMenu from "../HamburguerMenu/HamburgerMenu";
function NavBar() {
    return(
        <header>
            <h1>Cooking Time</h1>
            <CardWidget></CardWidget>
            <HamburgerMenu></HamburgerMenu>
        </header>
    );
}
export default NavBar;