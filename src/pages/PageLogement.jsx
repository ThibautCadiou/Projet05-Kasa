/* eslint-disable react/prop-types */
import { useState } from "react";

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
        title: "Équipements",
        parapgraphe: logementObj.equipments,
    };

    // Partie caroussel
    const nbImages = logementObj.pictures.length;
    const hasOnePicture = nbImages > 1 ? true : false;
    const [currentImageIndex, setCurrentImageIndex] = useState(1); // le numéro de 1 à 5 ...
    const [currentImage, setImage] = useState(logementObj.pictures[0]); // l'image de [0] à [4]

    const increaseImageIndex = () => {
        if (currentImageIndex >= nbImages) {
            setCurrentImageIndex(1);
            setImage(logementObj.pictures[0]);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
            setImage(logementObj.pictures[currentImageIndex]);
        }
    };

    const decreaseImageIndex = () => {
        if (currentImageIndex === 1) {
            setCurrentImageIndex(nbImages);
            setImage(logementObj.pictures[nbImages - 1]);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
            setImage(logementObj.pictures[currentImageIndex - 2]); // le changement ne se fait pas...
        }
    };

    return (
        <div className="main main-logement">
            <div className="logement-caroussel">
                <img className="logement-caroussel__image" src={currentImage} alt="Photo logement" />
                {hasOnePicture && <img className="logement-caroussel__left-arrow" src="src/assets/arrow-left.svg" alt="fleche gauche" onClick={decreaseImageIndex} />}
                {hasOnePicture && <img className="logement-caroussel__right-arrow" src="src/assets/arrow-right.svg" alt="fleche droite" onClick={increaseImageIndex} />}
                {hasOnePicture && <p className="logement-caroussel__nbImage"> {`${currentImageIndex}/${nbImages}`}</p>}
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
                <Collapse obj={messageDescription} />
                <Collapse obj={messageEquipement} />
            </div>
        </div>
    );
}
