import React, { useState } from 'react';
import { Card } from 'reactstrap';
const Dessert = props => {
  const [dzrt, setDzrt] = useState({
    showList: false
  })

  const showClickHandler = (e) => {
    const doesShow = dzrt.showList;
    setDzrt({
      dessert: ['Bibingka', 'Turon', 'Puto'],
      showList: !doesShow
    })
  }

  return (
    <Card>
      <div className="card-header">
        <h1>{props.title}</h1>
      </div>
      <div className="card-body">
        {
          dzrt.showList ?
            <ul>
              <li>{dzrt.dessert[0]}</li>
              <li>{dzrt.dessert[1]}</li>
              <li>{dzrt.dessert[2]}</li>
            </ul>
            : null
        }
      </div>
      <div className="card-footer">
        <button onClick={showClickHandler} className="btn btn-warning">Show</button>
      </div>
    </Card >

  )
}

export default Dessert;