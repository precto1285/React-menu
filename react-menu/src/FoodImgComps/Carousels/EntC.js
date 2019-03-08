import React from 'react';
import { Card } from 'reactstrap';
import Entree1 from './../MenuImg/Entree1';
import Entree2 from './../MenuImg/Entree2';
import Entree3 from './../MenuImg/Entree3';

const EntreeCarousel = props => {
  return (
    <Card className="my-5">
      <div className="card-header">
        <p>Entree Images</p>
      </div>
      <div className="card-body">
        <Entree1 />
        <Entree2 />
        <Entree3 />
      </div>
      <div className="card-footer">
        <p>Entree Items</p>
      </div>
    </Card>
  )
}

export default EntreeCarousel;