/* eslint-disable react/prop-types */
export default function Star({ starsNumber }) {
  return (
    <>
      <img
        src={
          starsNumber >= 1 ? "./src/assets/star-1.svg" : "src/assets/star-0.svg"
        }
        alt="star"
      />
      <img
        src={
          starsNumber >= 2 ? "./src/assets/star-1.svg" : "src/assets/star-0.svg"
        }
        alt="star"
      />
      <img
        src={
          starsNumber >= 3 ? "./src/assets/star-1.svg" : "src/assets/star-0.svg"
        }
        alt="star"
      />
      <img
        src={
          starsNumber >= 4 ? "./src/assets/star-1.svg" : "src/assets/star-0.svg"
        }
        alt="star"
      />
      <img
        src={
          starsNumber >= 5 ? "./src/assets/star-1.svg" : "src/assets/star-0.svg"
        }
        alt="star"
      />
    </>
  );
}
