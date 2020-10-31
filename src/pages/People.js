import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './style.css';

export default function People({ data }) {
  const clickOption = (e) => {
    document.getElementById(e.target.innerHTML).classList.toggle('hide');
  };

  return (
    <>
      <h1>People</h1>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header onClick={(e) => clickOption(e)} as="button">
                    {people.name}
                  </Card.Header>
                  <Card.Description id={`${people.name}`}>
                    <strong>Birth Year</strong>
                    <p>{people.birth_year}</p>
                    <strong>Eye Color</strong>
                    <p>{people.eye_color}</p>
                    <strong>Gender</strong>
                    <p>{people.gender}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Skin Color</strong>
                    <p>{people.skin_color}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
