import React from 'react'
import Rating from '@mui/material/Rating';
import './../App.css'
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
    <div className="card  " style={{width:'240px',height:'310px'}}>
      <img src='/assets/furniture.jpg' className="card-img-top" alt="..." style={{height:'180px'}}/>
      <div className="card-body py-1">
        <h6 className="card-title mb-0 d-flex justify-content-between" style={{display:'inline'}}>Rs{props.price} {StarRating(props.sellerRating) }</h6>
        <h6 className="card-text mb-0 fw-bold" style={{ whiteSpace: 'normal',color:'#292421' }}>{props.name} {props.model} 
        </h6>
        <p className='fs-6' style={{color:'#525C65'}} >
        <i className="fa-solid fa-magnifying-glass-location"></i> {props.location} <br/> {timeAgo(props.time)} 
        </p>
      </div>
    </div>
  )
}
export default CarD
