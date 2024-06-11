/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstOpening, setIsFirstOpening] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        if (isFirstOpening) {
            setIsFirstOpening(false);
        }
    };

    const toggleFirstOpening = () => {
        setIsFirstOpening(false);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                <span className="collapse__header__title">{props.obj.title}</span>
                {isFirstOpening ? <i className="fa-solid fa-chevron-up"></i> : <i className={isOpen ? "fa-solid fa-chevron-down collapse__icon--open" : "fa-solid fa-chevron-up collapse__icon--close"}></i>}
            </div>
            {isOpen && <div className="collapse__content">{props.obj.parapgraphe}</div>}
        </div>
    );
}
