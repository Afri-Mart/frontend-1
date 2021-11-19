import React from "react";
import styled from "styled-components";
import moment from "moment";

const Plants = (props) => {
  const { plants } = props;

  return (
    <div data-testid="plants">
      <ArticleStyle>
        <Container>
          <h1 data-testid="headline">{plants.nickname}</h1>
          <p data-testid="author">By {plants.species}</p>
          <h3 data-testid="summary">{plants.h2oFrequency}</h3>
          <p data-testid="body">{plants.image}</p>
        </Container>
      </ArticleStyle>

      {/*<ButtonContainer>
        <button
          data-testid="deleteButton"
          onClick={() => {
            handleDelete(plants.id);
          }}
        >
          Delete
        </button>
        <button
          data-testid="editButton"
          onClick={() => {
            handleEditSelect(plants.id);
          }}
        >
          Edit
        </button>
        </ButtonContainer>*/}
    </div>
  );
};
export default Plants;
const ArticleStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  background: grey;
`;

const Container = styled.div`
  padding: 0.5em;
`;

const ButtonContainer = styled.div`
  padding: 1em;
  text-transform: uppercase;
  text-align: right;

  button {
    width: 100px;
    padding: 0.5em;
  }
`;
