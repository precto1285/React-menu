import React from 'react';
import { Card, UncontrolledCarousel } from 'reactstrap';
import './../../Images/chxblk.jpg';
import './../../Images/fshsqd.jpg';
import './../../Images/lmpshg.jpg';


const appItems = [
  {
    src: './../../Images/chxblk.jpg',
    altText: 'Chicaron Bulaklak',
    caption: 'Chicharon Bulaklak',
    header: 'Appetizers'
  },
  {
    src: './../../Images/fshsqd.jpg',
    altText: 'Fish and Squid Balls',
    caption: 'Fish and Squid Balls',
    header: 'Appetizers'
  },
  {
    src: './../../Images/lmpshg.jpg',
    altText: 'Lumpiang Shanghai',
    caption: 'Lumpiang Shanghai',
    header: 'Appetizers'
  }
];

const appCarousel = props => {
  return (
    <Card>
      <div className="card-header">
        <p>Appetizer Images</p>
      </div>
      <div className="card-body">
        <UncontrolledCarousel items={appItems} />
      </div>
    </Card>
  )
}

export default appCarousel;