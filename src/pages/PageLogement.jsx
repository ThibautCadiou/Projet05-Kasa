/* eslint-disable react/prop-types */

import Tags from "../components/Tags";

export default function PageLogement({ logementObj }) {
    return (
        <div className="main main-logement">
            <div className="logement-caroussel">
                <img className="logement-caroussel__image" src={logementObj.pictures[0]} alt="Photo logement" />
                <img className="logement-caroussel__left-arrow" src="src/assets/arrow-left.svg" alt="fleche gauche" />
                <img className="logement-caroussel__right-arrow" src="src/assets/arrow-right.svg" alt="fleche droite" />
            </div>

            <div className="logement-info">
                <div className="logement-info-left">
                    <h2 className="logement-info-left__title">{logementObj.title}</h2>
                    <h3 className="logement-info-left__subtitle">{logementObj.location}</h3>
                    <div className="logement-info-left__tags">
                        {logementObj.tags.map((localTag, index) => {
                            return <Tags tag={localTag} key={index} />;
                        })}
                    </div>
                </div>
                <div className="logement-info-right">
                    <div className="owner-infos">A</div>
                    <div className="owner-image">B</div>
                    <div className="owner-ratings">C</div>
                </div>
            </div>
            <div className="logement-collapses">
                <p>elt 1</p>
                <p>elt 2</p>
            </div>
        </div>
    );
}
