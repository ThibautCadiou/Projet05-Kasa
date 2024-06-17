/* eslint-disable react/prop-types */

export default function Banner(props) {
    let backgroundImageStyle = null;
    let haveMessage = null;

    if (props.msg === "") {
        haveMessage = false;
        backgroundImageStyle = {
            backgroundImage: `url(${props.backgroundImageUrl})`,
        };
    } else {
        backgroundImageStyle = {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.backgroundImageUrl})`,
        };
        haveMessage = true;
    }

    let bannerClass = haveMessage ? "banner__text .banner__text::after text-stroke" : "banner__text";

    return (
        <div className="banner" style={backgroundImageStyle}>
            {haveMessage && <p className={bannerClass}>{props.msg}</p>}{" "}
        </div>
    );
}
