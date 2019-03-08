import React from 'react';
import { Card, UncontrolledCarousel } from 'reactstrap';
import Drinks1 from './../MenuImg/Drinks1';
import Drinks2 from './../MenuImg/Drinks2';
import Drinks3 from './../MenuImg/Drinks3';

const appItems = [
  {
    src: './../../../Images/chxblk.jpg',
    altText: 'Calamansi Juice',
    caption: 'Calamansi Juice',
    header: 'Drinks'
  },
  {
    src: { Drinks2 },
    altText: 'Buko Juice',
    caption: 'Buko Juice',
    header: 'Drinks'
  },
  {
    src: { Drinks3 },
    altText: 'Sago\'t Gulaman',
    caption: 'Sago\'t Gulaman',
    header: 'Drinks'
  }
];

const DrinkCarousel = props => {
  return (
    <Card className="my-5">
      <div className="card-header">
        <p>Drinks Images</p>
      </div>
      <div className="card-body bg-dark">
        <Drinks1 />
        <Drinks2 />
        <Drinks3 />
      </div>
      <div className="card-footer">
        <p>Drink Items</p>
        <UncontrolledCarousel items={appItems} />
      </div>
    </Card>
  )
}

export default DrinkCarousel;