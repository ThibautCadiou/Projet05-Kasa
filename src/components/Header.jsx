import PageNav from "./PageNav";
import logo from "../assets/logo-desktop.svg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" />
            <PageNav />
        </header>
    );
}
export default Header;
