import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import './App.css';
import Appetizer from './MenuOptions/Appetizer';
import Dessert from './MenuOptions/Dessert';
import Drinks from './MenuOptions/Drinks';
import Entree from './MenuOptions/Entree';
import App1Img from './FoodImgComps/MenuImg/Appetizer1';
import App2Img from './FoodImgComps/MenuImg/Appetizer2';
import App3Img from './FoodImgComps/MenuImg/Appetizer3';
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ['Appetizer Menu', 'Dessert Menu', 'Drinks Menu', 'Entrees Menu']
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Row>
            <Col>
              <Jumbotron className="bg-danger mt-3">
                <h1 className="text-center text-white">
                  The Menu
                </h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 text-center text-primary">
              <Drinks title={this.state.title[2]} />
            </Col>
            <Col className="col-md-6 text-center text-primary">
              <Appetizer title={this.state.title[0]} />
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 text-center text-warning">
              <Entree title={this.state.title[3]} />
            </Col>
            <Col className="col-md-6 text-center text-warning">
              <Dessert title={this.state.title[1]} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
