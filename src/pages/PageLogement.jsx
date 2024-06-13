/* eslint-disable react/prop-types */

export default function PageLogement({ logementObj }) {
    console.log(`Le logement s'appelle ${logementObj.title}`);

    return (
        <div className="main main-logement">
            <div className="logement-caroussel">
                <img className="logement-caroussel__image" src={logementObj.pictures[0]} alt="Photo logement" />
            </div>
            <div className="logement-info">
                <div className="logement-info__left">
                    <h2 className="logement__info--left__title">{logementObj.title}</h2>
                    <h3 className="logement__info--left--subtitle">{logementObj.location}</h3>
                    <div className="logement__info--left--tags">A B C</div>
                </div>
                <div className="logement__info-right">
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
