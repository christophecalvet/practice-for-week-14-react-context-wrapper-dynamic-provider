import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const horoscopesObj = useContext(HoroscopeContext);
  const {
    sign: { backgroundImg, name, element, traits },
  } = useContext(HoroscopeContext);

  return (
    <div className="details">
      <img src={backgroundImg} alt={`picture of ${name}`} />
      <h2>Current Sign Name {name}</h2>
      <h4>Element: {element} </h4>
      <h4>Traits: {traits}</h4>
    </div>
  );
};

export default Detail;
