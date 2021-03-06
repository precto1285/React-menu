import React, { useState } from 'react';
import { Card, Row, Col } from 'reactstrap';
import AppImg from '../FoodImgComps/Carousels/AppC';

const Appetizer = props => {
  const [appz, appzSet] = useState({
    showList: false
  })

  const clickHandler = (e) => {
    const doesShow = appz.showList;
    appzSet({
      appetizers: ['Chicharon Bulaklak', 'Fish & Squid Balls', 'Lumpiang Shanghai'], showList: !doesShow
    })
  }

  return (
    <Row>
      <Col>
        <Card className='my-5'>
          <div className='card-header'>
            <h1>{props.title}</h1>
          </div>
          <div className="card-body text-left text-dark">
            {
              appz.showList ?
                <ul>
                  <li>{appz.appetizers[0]}</li>
                  <li>{appz.appetizers[1]}</li>
                  <li>{appz.appetizers[2]}</li>
                </ul> : null
            }

          </div>
          <div className="card-footer">
            <button onClick={clickHandler} className="btn btn-primary">Show</button>
          </div>
        </Card>
      </Col>
      <Col><AppImg /></Col>
    </Row>
  )
}

export default Appetizer;