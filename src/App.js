import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './pages/Home';
import Login from './pages/Login';
import People from './pages/People';
import Vehicles from './pages/Vehicles';
import Starships from './pages/Starships';
import NotFound from './components/NotFound';

import PrivateRoute from './components/PrivateRoute';

import { history } from '././history';

function App() {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHome() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setHome(data.results);
      setLoading(false);
    }

    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchVehicles() {
      let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
      setLoading(false);
    }

    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    fetchHome();
    fetchPeople();
    fetchVehicles();
    fetchStarships();
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted> Loading</Loader>
            </Dimmer>
          ) : (
            <Router history={history}>
              <Switch>
                <Route exact path="/">
                  <Home data={home} />
                </Route>
                <Route component={Login} exact path="/login"></Route>
                <Route exact path="/people">
                  <People data={people} />
                </Route>
                <Route exact path="/vehicles">
                  <Vehicles data={vehicles} />
                </Route>
                <Route exact path="/starships">
                  <Starships data={starships} />
                </Route>
                <Route component={NotFound} />
              </Switch>
            </Router>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
