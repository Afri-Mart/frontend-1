import React, { useState } from "react";
import "../App.css";

const initialPlant = {
  image:
    "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_pe686822_s5.jpg",
  nickname: "Nickname",
  species: "Species",
  frequency: "10%",
};

function PlantList() {
  const [user, setUser] = useState(initialPlant);

  return (
    <div>
      <div className="plant-page-title">
        <h1>Created Plants</h1>
      </div>
      <div className="all-plants">
        <div className="plant-wrapper">
          <div className="plant-image-wrapper">
            <img src={user.image} alt="A basic house plant" />
          </div>
          <div className="plant-info-wrapper">
            <h2>{user.nickname}</h2>
            <p>Species: {user.species}</p>
            <p>H2O Frequency: {user.frequency}</p>
            <button>Delete</button>
            <button>Edit Plant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantList;
