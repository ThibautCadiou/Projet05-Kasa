import { NavLink } from "react-router-dom";

function PageNav() {
    return (
        <nav>
            <ul className="navigation">
                <li className="navigation-link">
                    <NavLink to="/"> Accueil </NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/propos">A Propos</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
