import React from 'react';
import { Card, UncontrolledCarousel } from 'reactstrap';
import Entree1 from './../MenuImg/Entree1';
import Entree2 from './../MenuImg/Entree2';
import Entree3 from './../MenuImg/Entree3';

const appItems = [
  {
    src: './../../../Images/chxblk.jpg',
    altText: 'Chicken Adobo',
    caption: 'Chicken Adobo',
    header: 'Entrees'
  },
  {
    src: { Entree2 },
    altText: 'Crispy Pata',
    caption: 'Crispy Pata',
    header: 'Entrees'
  },
  {
    src: { Entree3 },
    altText: 'Sago\'t Gulaman',
    caption: 'Beef Kaldereta',
    header: 'Entrees'
  }
];

const EntreeCarousel = props => {
  return (
    <Card className="my-5">
      <div className="card-header">
        <p>Entree Images</p>
      </div>
      <div className="card-body bg-dark">
        <Entree1 />
        <Entree2 />
        <Entree3 />
      </div>
      <div className="card-footer">
        <p>Entree Items</p>
        <UncontrolledCarousel items={appItems} />
      </div>
    </Card>
  )
}

export default EntreeCarousel;