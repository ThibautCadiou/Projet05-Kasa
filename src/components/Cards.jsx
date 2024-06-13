/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Cards(props) {
    return (
        <NavLink to={"/" + props.id} className="">
            <article className="cards" style={{ backgroundImage: `url(${props.imageURL})` }}>
                <p className="cards__name">{props.name}</p>
            </article>
        </NavLink>
    );
}
export default Cards;
