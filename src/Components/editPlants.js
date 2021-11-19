import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const initialArticle = {
  id: "",
  nickname: "",
  Species: "",
  frequency: "",
};

const EditForm = (props) => {
  const [plants, setPlants] = useState(initialArticle);
  const { handleEdit, handleEditCancel, editId } = props;

  const handleChange = (e) => {
    setPlants({
      ...plants,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(plants);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleEditCancel();
  };

  useEffect(() => {
    axios
      .get(`https://ft-water-my-plants-1.herokuapp.com/api/plants/`)
      .then((res) => {
        console.log(res);
        setPlants(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Edit Plants</h3>
      <div>
        <label>Headline</label>
        <input
          value={plants.nickname}
          id="nickname"
          name="nickname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          value={plants.Species}
          id="Species"
          name="Species"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Summary</label>
        <input
          value={plants.frequency}
          id="frequency"
          name="frequency"
          onChange={handleChange}
        />
      </div>

      <Button id="editButton">Edit Article</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </FormContainer>
  );
};

export default EditForm;

const FormContainer = styled.form`
  padding: 1em;
  width: 400px;
  background: white;

  label {
    margin-top: 0.5em;
  }

  input {
    padding: 0.5em;
  }

  div {
    margin: 0.5em 0;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1em;
  margin-top: 1em;
`;
