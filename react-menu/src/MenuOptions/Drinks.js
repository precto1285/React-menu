import React, { useState } from 'react';
import { Card, Row, Col } from 'reactstrap';
import DriImg from '../FoodImgComps/Carousels/DriC';

const Drinks = props => {

  const [drnkz, setDrnkz] = useState({
    showDrinks: false
  }),

    clickHandler = () => {
      const doesShow = drnkz.showDrinks;
      setDrnkz({
        drinks: ['Calamansi Juice', 'Buko Juice', 'Sago\'t Gulaman'],
        showDrinks: !doesShow
      })
    }

  return (
    <Row>
      <Col>
        <Card className="my-5">
          <div className="card-header"><h1>{props.title}</h1></div>
          <div className="card-body text-left text-dark">
            {
              drnkz.showDrinks ?
                <ul>
                  <li>{drnkz.drinks[0]}</li>
                  <li>{drnkz.drinks[1]}</li>
                  <li>{drnkz.drinks[2]}</li>
                </ul>
                : null
            }
          </div>
          <div className="card-footer">
            <button onClick={clickHandler} className="btn btn-primary">Show</button>
          </div>
        </Card>
      </Col>
      <Col><DriImg /></Col>
    </Row>
  )
}

export default Drinks;