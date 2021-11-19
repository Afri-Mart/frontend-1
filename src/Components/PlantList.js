import React, { useState, useEffect } from "react";
//import getPlants from "../services/plantServices";

import EditForm from "./editPlants";
import axios from "axios";
import "../App.css";

const initialPlant = {
  image:
    "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_pe686822_s5.jpg",
  nickname: "Nickname",
  species: "Species",
  frequency: "10%",
};

function PlantList() {
  const [plants, setPlants] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();

  const handleEdit = (id) => {
    axios
      .put(`https://ft-water-my-plants-1.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        console.log(res);
        setPlants(res.data.data);
      })
      .catch((err) => console.log(err));

    setEditing(false);
  };

  const handleEditSelect = (id) => {
    setEditing(true);
    setEditId(id);
  };

  const handleEditCancel = () => {
    setEditing(false);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://ft-water-my-plants-1.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        console.log(res);
        setPlants(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`https://ft-water-my-plants-1.herokuapp.com/api/plants`)
      .then((res) => {
        console.log(res);
        setPlants(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="plant-page-title">
        <h1>Created Plants</h1>
      </div>
      <div>
        {plants.map((plant) => {
          return (
            <div className="all-plants">
              <div className="plant-wrapper">
                <div className="plant-image-wrapper">
                  <img src={plant.image} alt="A basic house plant" />
                </div>
                <div className="plant-info-wrapper">
                  <h2>{plant.nickname}</h2>
                  <p>id: {plant.id}</p>
                  <p>Species: {plant.species}</p>
                  <p>H2O Frequency: {plant.frequency}</p>
                  <button
                    data-testid="deleteButton"
                    onClick={() => {
                      handleDelete(plant.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    data-testid="editButton"
                    onClick={() => {
                      handleEdit(plant.id);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlantList;
