import React from "react";

const Header = ({ busStop }) => {
  return (
    <div className="vasttrafik-header widget-header">
      <h5 className="bus-stop">{busStop}</h5>
      <li>
        <div className="line">Linje</div>
        <div className="destination">Riktning</div>
        <div className="track">Läge</div>
        <div className="departs">Avgår om</div>
        <div className="next-departure">Nästa tur</div>
      </li>
    </div>
  );
};

export default Header;
