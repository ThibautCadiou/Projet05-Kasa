import { NavLink } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="error-page">
            <img className="error-page_logo" src="src/assets/404.png" alt="Logo error 404" />
            <p className="error-page__second-message">Oups! La page que vous demandez n&apos;existe pas.</p>
            <NavLink to="/" className="error-page__back-link">
                Retourner sur la page d&apos;accueil
            </NavLink>
        </div>
    );
}
