import { useEffect, useState } from "react";
import "./coords.css";

const UseCoordinates = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((coords) => {
      setLat(coords.coords.latitude);
      setLong(coords.coords.longitude);
    });
  });

  return (
    <>
      <section className="coords">
        <div className="position">
          <div>
            <h1>Lat: {lat}</h1>
            <h1>Long: {long}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCoordinates;
