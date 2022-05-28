import React from "react";

const TopHeader = (props) => {

  return (
      <div className="header-top">
        <div className="left-top ">
          <ul>
            <li><i className="fas fa-map-marker-alt top-icon" />KK 778ST, Kigali Rwanda</li>
            <li><i className="fas fa-phone-volume top-icon" />+250 788 606 765</li>
            <li><i className="fas fa-envelope top-icon" />hubert@centrika.rw</li>
          </ul>
        </div>
        <div className="right-top ">
          <ul>
            <li><i className="fab fa-facebook-f top-icons" />
            </li>
            <li><i className="fab fa-instagram top-icons" />
            </li>
            <li><i className="fab fa-linkedin-in top-icons" />
            </li>
            <li><i className="fab fa-twitter top-icons" />
            </li>
          </ul>
        </div>
      </div>
  );
};

export default TopHeader;
