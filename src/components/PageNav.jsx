import { NavLink, useLocation } from "react-router-dom";

import { useState } from "react";

export default function PageNav() {
    const [myPath, setMyPath] = useState("/");

    const sayLocation = (a) => {
        setTimeout(() => {
            setMyPath(a.pathname);
            console.log(myPath);
        }, 50);

        if (myPath === "/") {
            console.log("yes");
        } else {
            console.log("no");
        }
    };

    // const sayHello =()=>{
    //     console.log("Hello");
    // }

    return (
        <nav>
            <ul className="navigation">
                <li className="navigation-link" onClick={sayLocation(useLocation())}>
                    <NavLink to="/" className={myPath === "/" ? "underlined" : ""}>
                        Accueil
                    </NavLink>
                </li>
                <li className="navigation-link" onClick={sayLocation(useLocation())}>
                    <NavLink to="/propos" className={myPath === "/propos" ? "underlined" : ""}>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
