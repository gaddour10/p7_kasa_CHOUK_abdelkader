import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  // Location storage to differentiate components className depending on the page location
  const path = useLocation().pathname;
  console.log(path);
  const location = path.length;
  console.log(location);

  return (
    // Differentiate components className depending on the page location
    <div className={"banner_container" + location}>
      <p>
        Chez vous, <span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Banner;
