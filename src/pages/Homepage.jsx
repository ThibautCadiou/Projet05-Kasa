import Banner from "../components/Banner";
import Cards from "../components/Cards";
import logementsData from "../datas/logements.json";

function Homepage() {
  return (
    <div className="main">
      <Banner
        msg="Chez vous, partout et ailleurs"
        backgroundImageUrl="/image-source-1.jpg"
      />
      <div className="affichage-cards">
        {logementsData.map((logement) => (
          <Cards
            name={logement.title}
            imageURL={logement.pictures[0]}
            id={logement.id}
            key={logement.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Homepage;
