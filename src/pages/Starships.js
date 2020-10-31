import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './style.css';

export default function Starships({ data }) {
  const clickOption = (e) => {
    document.getElementById(e.target.innerHTML).classList.toggle('hide');
  };

  return (
    <>
      <h1>Starships</h1>
      <Grid columns={3}>
        {data.map((starships, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header onClick={(e) => clickOption(e)} as="button">
                    {starships.name}
                  </Card.Header>
                  <Card.Description id={`${starships.name}`}>
                    <strong>Model</strong>
                    <p>{starships.model}</p>
                    <strong>Starship Class</strong>
                    <p>{starships.starship_class}</p>
                    <strong>Manufacturer</strong>
                    <p>{starships.manufacturer}</p>
                    <strong>Cost in credits</strong>
                    <p>{starships.cost_in_credits}</p>
                    <strong>Length</strong>
                    <p>{starships.length}</p>
                    <strong>Crew</strong>
                    <p>{starships.crew}</p>
                    <strong>Passengers</strong>
                    <p>{starships.passengers}</p>
                    <strong>Max Atmosphering Speed</strong>
                    <p>{starships.max_atmosphering_speed}</p>
                    <strong>Hyperdrive Rating</strong>
                    <p>{starships.hyperdrive_rating}</p>
                    <strong>MGLT</strong>
                    <p>{starships.MGLT}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{starships.cargo_capacity}</p>
                    <strong>Consumables</strong>
                    <p>{starships.consumables}</p>
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
