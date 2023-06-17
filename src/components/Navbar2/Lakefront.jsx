import React from 'react'
import '../../App.css'
const Lakefront = ({image,place,meter,date,price}) => {
  return (
    <div className="omg-box">
      <div className="img-box">
        <img src={image} />
      </div>
      <div className="heart">
        <img src="public/images/asset 99.svg" alt="" />
      </div>
      <div className="text-box">
        <h3>{place}</h3>
        <h3>{meter}</h3>
        <h3>{date}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Lakefront;
