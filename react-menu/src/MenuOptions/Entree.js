import React, { useState } from 'react';
import { Card } from 'reactstrap';

const Entrees = props => {
  const [entreez, setEntreez] = useState({
    showList: false
  })
  const clickHandler = () => {
    const show = entreez.showList;
    setEntreez({
      entrees: ['Chicken Adobo', 'Crispy Pata', 'Beef Kaldereta'],
      showList: !show
    })
  }
  return (

    <Card className="my-5">
      <div className="card-header">
        <h1>{props.title}</h1>
      </div>
      <div className="card-body text-left text-dark">
        {
          entreez.showList ?
            <ul>
              <li>{entreez.entrees[0]}</li>
              <li>{entreez.entrees[1]}</li>
              <li>{entreez.entrees[2]}</li>
            </ul>
            : null
        }
      </div>
      <div className="card-footer">
        <button onClick={clickHandler} className="btn btn-warning">Show</button>
      </div>
    </Card>
  )
}

export default Entrees;