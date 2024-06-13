/* eslint-disable react/prop-types */

export default function PageLogement({ logement }) {
    console.log("hello world!");

    return (
        <div className="main-logement">
            <div className="caroussel">
                <img src={logement.pictures[0]} alt="Photo logement" />
            </div>
            <div className="logement-info">
                <h2 className="logement-title">Hello Logements</h2>
            </div>
            <div className="collapses">
                <p>elt 1</p>
                <p>elt 2</p>
            </div>
        </div>
    );
}
