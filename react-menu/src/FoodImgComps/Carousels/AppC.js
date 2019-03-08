import React from 'react';
import { Card, UncontrolledCarousel } from 'reactstrap';
import Appetizer1 from './../MenuImg/Appetizer1';
import Appetizer2 from './../MenuImg/Appetizer2';
import Appetizer3 from './../MenuImg/Appetizer3';
import ImgThree from './../../Images/lmpshg.jpg';

const appItems = [
  {
    src: './../../../Images/chxblk.jpg',
    altText: 'Chicaron Bulaklak',
    caption: 'Chicharon Bulaklak',
    header: 'Appetizers'
  },
  {
    src: { Appetizer2 },
    altText: 'Fish and Squid Balls',
    caption: 'Fish and Squid Balls',
    header: 'Appetizers'
  },
  {
    src: { ImgThree },
    altText: 'Lumpiang Shanghai',
    caption: 'Lumpiang Shanghai',
    header: 'Appetizers'
  }
];

const appCarousel = props => {
  return (
    <div>
      <Card className="my-5">
        <div className="card-header">
          <p>Appetizer Images</p>
        </div>
        <div className="card-body">
          <Appetizer1 />
          <Appetizer2 />
          <Appetizer3 />
        </div>
        <div className="card-footer">
          <UncontrolledCarousel items={appItems} />
        </div>
      </Card>

    </div>

  )
}

export default appCarousel;