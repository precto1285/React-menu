import React from 'react';
import { Card } from 'reactstrap';
import Dessert1 from './../MenuImg/Dessert1';
import Dessert2 from './../MenuImg/Dessert2';
import Dessert3 from './../MenuImg/Dessert3';

const DessertCarousel = props => {
  return (
    <Card className="my-5">
      <div className="card-header">
        <p>Dessert Images</p>
      </div>
      <div className="card-body">
        <Dessert1 />
        <Dessert2 />
        <Dessert3 />
      </div>
      <div className='card-footer'>
        <p>Dessert Items</p>
      </div>
    </Card>
  )
}

export default DessertCarousel;