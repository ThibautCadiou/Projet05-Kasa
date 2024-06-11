import Banner from "../components/Banner";
import Cards from "../components/Cards";

function Homepage() {
    return (
        <div className="main">
            <Banner msg="Chez vous, partout et ailleurs" backgroundImageUrl="src/assets/image-source-1.jpg" />
            <div className="affichage-cards">
                <Cards name="Appartement  cosys" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
                <Cards name="Appartement  cosys" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
                <Cards name="Appartement  cosys" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
                <Cards name="Appartement  cosys" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
                <Cards name="Appartement  cosys" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
                <Cards name="Appartement  cosys" imageURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
            </div>
        </div>
    );
}
export default Homepage;
