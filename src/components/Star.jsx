/* eslint-disable react/prop-types */
export default function Star({ starsNumber }) {
  return (
    <>
      <img src={starsNumber >= 1 ? "/star-1.svg" : "/star-0.svg"} alt="star" />
      <img src={starsNumber >= 2 ? "/star-1.svg" : "/star-0.svg"} alt="star" />
      <img src={starsNumber >= 3 ? "/star-1.svg" : "/star-0.svg"} alt="star" />
      <img src={starsNumber >= 4 ? "/star-1.svg" : "/star-0.svg"} alt="star" />
      <img src={starsNumber >= 5 ? "/star-1.svg" : "/star-0.svg"} alt="star" />
    </>
  );
}
