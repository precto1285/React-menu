import React from 'react';
import { Card, UncontrolledCarousel } from 'reactstrap';
import Dessert1 from './../MenuImg/Dessert1';
import Dessert2 from './../MenuImg/Dessert2';
import Dessert3 from './../MenuImg/Dessert3';

const appItems = [
  {
    src: './../../../Images/chxblk.jpg',
    altText: 'Bibingka',
    caption: 'Bibingka',
    header: 'Desserts'
  },
  {
    src: { Dessert2 },
    altText: 'Turon',
    caption: 'Turon',
    header: 'Desserts'
  },
  {
    src: { Dessert3 },
    altText: 'Puto',
    caption: 'Puto',
    header: 'Desserts'
  }
];

const DessertCarousel = props => {
  return (
    <Card className="my-5">
      <div className="card-header">
        <p>Dessert Images</p>
      </div>
      <div className="card-body bg-dark">
        <Dessert1 />
        <Dessert2 />
        <Dessert3 />
      </div>
      <div className='card-footer'>
        <p>Dessert Items</p>
        <UncontrolledCarousel items={appItems} />
      </div>
    </Card>
  )
}

export default DessertCarousel;