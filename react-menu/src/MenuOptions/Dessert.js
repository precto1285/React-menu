import React, { useState } from 'react';
import { Card, Row, Col } from 'reactstrap';
import Dessert1 from './../FoodImgComps/Dessert1';

const Dessert = props => {
  const [dzrt, setDzrt] = useState({
    showList: false
  })

  const showClickHandler = (e) => {
    const doesShow = dzrt.showList;
    setDzrt({
      dessert: ['Bibingka', 'Turon', 'Puto'],
      showList: !doesShow
    })
  }

  return (
    <Row><Col>
      <Card className="my-5">
        <div className="card-header">
          <h1>{props.title}</h1>
        </div>
        <div className="card-body text-left text-dark">
          {
            dzrt.showList ?
              <ul>
                <li>{dzrt.dessert[0]}</li>
                <li>{dzrt.dessert[1]}</li>
                <li>{dzrt.dessert[2]}</li>
              </ul>
              : null
          }
        </div>
        <div className="card-footer">
          <button onClick={showClickHandler} className="btn btn-warning">Show</button>
        </div>
      </Card>
    </Col>
      <Col><Dessert1 /></Col>
    </Row>

  )
}

export default Dessert;