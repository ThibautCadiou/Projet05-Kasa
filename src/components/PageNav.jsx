import { NavLink } from "react-router-dom";

function PageNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"> Homepage </NavLink>
                </li>
                <li>
                    <NavLink to="/propos"> A propos </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
