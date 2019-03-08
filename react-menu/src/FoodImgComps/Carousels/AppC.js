import React from 'react';
import { Card, UncontrolledCarousel } from 'reactstrap';
import Img1 from './../../Images/chxblk.jpg';
import Img2 from './../../Images/fshsqd.jpg';
import Img3 from './../../Images/lmpshg.jpg';
import Appetizer1 from './../MenuImg/Appetizer1';
import Appetizer2 from './../MenuImg/Appetizer2';
import Appetizer3 from './../MenuImg/Appetizer3';

const appItems = [
  {
    src: { Img1 },
    altText: 'Chicaron Bulaklak',
    caption: 'Chicharon Bulaklak',
    header: 'Appetizers'
  },
  {
    src: { Img2 },
    altText: 'Fish and Squid Balls',
    caption: 'Fish and Squid Balls',
    header: 'Appetizers'
  },
  {
    src: { Img3 },
    altText: 'Lumpiang Shanghai',
    caption: 'Lumpiang Shanghai',
    header: 'Appetizers'
  }
];

const appCarousel = props => {
  return (
    <div>
      <Card>
        <div className="card-header">
          <p>Appetizer Images</p>
        </div>
        <div className="card-body">
          <UncontrolledCarousel items={appItems} />
        </div>
      </Card>
      <Appetizer1 />
      <Appetizer2 />
      <Appetizer3 />
    </div>
  )
}

export default appCarousel;