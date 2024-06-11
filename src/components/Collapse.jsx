/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    console.log(props.obj);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    console.log(props.obj.parapgraphe);

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                <span>{props.obj.title}</span>
                <i className={"fa-solid fa-chevron-up"}></i>
            </div>
            {isOpen && <div className="collapse__content">{props.obj.parapgraphe}</div>}
        </div>
    );
}
