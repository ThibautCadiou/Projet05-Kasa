import Banner from "../components/Banner";
import Cards from "../components/Cards";

function Homepage() {
    return (
        <div className="main">
            <Banner />
            <div className="affichage-cards">
                <Cards />
                <Cards />
            </div>
        </div>
    );
}
export default Homepage;
