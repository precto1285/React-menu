import React, { Component } from 'react';
import { Row, Column } from 'reactstrap';
import './App.css';
import Appetizer from './MenuOptions/Appetizer';
import Dessert from './MenuOptions/Dessert';
import Drinks from './MenuOptions/Drinks';
import Entree from './MenuOptions/Entree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Row>
            <Column>
              <h1 className="text-center text-danger">
                The Menu
          </h1>
            </Column>
          </Row>
          <Row>
            <Column>
              <p>Drinks</p>
              <Drinks />
            </Column>
            <Column>
              <p>Appetizers</p>
              <Appetizer />
            </Column>
          </Row>
          <Row>
            <Column>
              <p>Entree</p>
              <Entree />
            </Column>
            <Column>
              <p>Dessert</p>
              <Dessert />
            </Column>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
