/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstOpening, setIsFirstOpening] = useState(true);
    const [isAnimationFinished, setisAnimationFinished] = useState(false);

    // console.log(screen.width); // il suffisait d'utiliser ca pour les mise en forme conditionnel surlguerran ...
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setisAnimationFinished(false);
        } else {
            setTimeout(() => {
                setisAnimationFinished(true);
            }, 190);
        }

        if (isFirstOpening) {
            setIsFirstOpening(false);
        }
    };

    if (isAnimationFinished) {
        return (
            <div className="collapse">
                <div className="collapse__header">
                    {props.obj.title.indexOf("quipements") !== -1 || props.obj.title === "Description" ? (
                        <span className="collapse__header__title setFontsizeForPageLogement">{props.obj.title}</span>
                    ) : (
                        <span className="collapse__header__title">{props.obj.title}</span>
                    )}{" "}
                    {isFirstOpening ? (
                        <i className="fa-solid fa-chevron-up" onClick={toggleCollapse}></i>
                    ) : (
                        <i onClick={toggleCollapse} className={isOpen ? "fa-solid fa-chevron-down collapse__icon--open" : "fa-solid fa-chevron-up collapse__icon--close"}></i>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="collapse">
                <div className="collapse__header">
                    {/* <span className="collapse__header__title">{props.obj.title}</span> */}
                    {props.obj.title.indexOf("quipements") !== -1 || props.obj.title === "Description" ? (
                        <span className="collapse__header__title setFontsizeForPageLogement">{props.obj.title}</span>
                    ) : (
                        <span className="collapse__header__title">{props.obj.title}</span>
                    )}
                    {isFirstOpening ? (
                        <i className="fa-solid fa-chevron-up" onClick={toggleCollapse}></i>
                    ) : (
                        <i onClick={toggleCollapse} className={isOpen ? "fa-solid fa-chevron-down collapse__icon--open" : "fa-solid fa-chevron-up collapse__icon--close"}></i>
                    )}
                </div>

                {isOpen ? (
                    <div className={props.obj.title.indexOf("quipements") !== -1 ? "collapse__content collapse--show isList" : "collapse__content collapse--show"}>
                        {props.obj.title.indexOf("quipements") !== -1 ? (
                            <ul>
                                {props.obj.parapgraphe.map((elt, index) => (
                                    <li key={index}>{elt}</li>
                                ))}
                            </ul>
                        ) : (
                            props.obj.parapgraphe
                        )}
                    </div>
                ) : (
                    <div className={isFirstOpening ? "hide" : "collapse__content collapse--hide"}>{props.obj.parapgraphe}</div>
                )}
            </div>
        );
    }
}
