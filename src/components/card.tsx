import React from 'react'
import Rating from '@mui/material/Rating';
import './../App.css'
import Colors from '../res/colors';
interface data {
  name: string;
  model: string;
  price: number;
  location: string;
  time: string;
  image: string;
  sellerRating : number;
}
function timeAgo(timestamp: string): string {
  const now = new Date();
  const targetDate = new Date(timestamp);
  const timeDifference = now.getTime() - targetDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo === 0) {
    return "Today";
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else {
    return `${daysAgo} days ago`;
  }
}
function StarRating( rating : number ) {
  return (
    
    <Rating className="read-only"  value={rating} readOnly size="small"  /> 
    
  );
}
      const CarD = (props : data) => {
  return (
    <div className="card "  >
      <img src='/assets/furniture.jpg' className="card-img-top " alt="..." />
      <div className="card-body py-1  d-flex flex-column justify-content-between">
        <h6 className="card-title mb-0  d-flex justify-content-between" style={{display:'inline'}}>Rs{props.price} {StarRating(props.sellerRating) }</h6>
        <h6 className="card-text mb-0 fw-bold-md" style={{ whiteSpace: 'normal',color:Colors.color1 }}>{props.name} {props.model} 
        </h6>
        <p  style={{color:Colors.color2,fontSize:'13px'}} >
        <i className="fa-solid fa-magnifying-glass-location"></i> {props.location} <br/> {timeAgo(props.time)} 
        </p>
      </div>
    </div>
  )
}
export default CarD
