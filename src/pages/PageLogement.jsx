/* eslint-disable react/prop-types */

import Tags from "../components/Tags";
import Star from "../components/Star";
import Collapse from "../components/Collapse";

export default function PageLogement({ logementObj }) {
    const firstName = logementObj.host.name.split(" ")[0];
    const lastName = logementObj.host.name.split(" ")[1];

    const messageDescription = {
        title: "Description",
        parapgraphe: logementObj.description,
    };

    const messageEquipement = {
        title: "Equipement",
        parapgraphe: logementObj.equipments,
    };

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
                    <div className="logement-info-right__owner-image">
                        <img src={logementObj.host.picture} alt="Owner picture" />
                    </div>
                    <div className="logement-info-right__owner-infos">
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <div className="logement-info-right__owner-ratings">
                        <Star starsNumber={3}></Star>
                    </div>
                </div>
            </div>
            <div className="logement-collapses">
                {/* <p className="logement-collapses__left"> */}
                <Collapse obj={messageDescription} />
                <Collapse obj={messageEquipement} />

                {/* <p className="logement-collapses__right">B</p> */}
            </div>
        </div>
    );
}
