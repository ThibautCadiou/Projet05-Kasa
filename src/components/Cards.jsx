/* eslint-disable react/prop-types */
function Cards(props) {
    // console.log(props);
    return (
        <a href="#">
            <article className="cards" style={{ backgroundImage: `url(${props.imageURL})` }}>
                <p className="cards__name">{props.name}</p>
            </article>
        </a>
    );
}
export default Cards;
