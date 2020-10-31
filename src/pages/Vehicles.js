import React, { useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './style.css';

export default function Vehicles({ data }) {
  const clickOption = (e) => {
    document.getElementById(e.target.innerHTML).classList.toggle('hide');
  };

  return (
    <>
      <h1>Vehicles</h1>
      <Grid columns={3}>
        {data.map((vehicles, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header onClick={(e) => clickOption(e)} as="button">
                    {vehicles.name}
                  </Card.Header>
                  <Card.Description id={`${vehicles.name}`}>
                    <strong>Model</strong>
                    <p>{vehicles.model}</p>
                    <strong>Vehicle Class</strong>
                    <p>{vehicles.vehicle_class}</p>
                    <strong>Manufacturer</strong>
                    <p>{vehicles.manufacturer}</p>
                    <strong>Cost in credits</strong>
                    <p>{vehicles.cost_in_credits}</p>
                    <strong>Length</strong>
                    <p>{vehicles.length}</p>
                    <strong>Crew</strong>
                    <p>{vehicles.crew}</p>
                    <strong>Passengers</strong>
                    <p>{vehicles.passengers}</p>
                    <strong>Max Atmosphering Speed</strong>
                    <p>{vehicles.max_atmosphering_speed}</p>
                    <strong>Hyperdrive Rating</strong>
                    <p>{vehicles.hyperdrive_rating}</p>
                    <strong>MGLT</strong>
                    <p>{vehicles.MGLT}</p>
                    <strong>Cargo Capacity</strong>
                    <p>{vehicles.cargo_capacity}</p>
                    <strong>Consumables</strong>
                    <p>{vehicles.consumables}</p>
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
