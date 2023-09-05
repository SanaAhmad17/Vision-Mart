import React from 'react'
interface data {
  name: string;
  model: string;
  price: number;
  location: string;
  time: string;
  image: string;
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
      const CarD = (props : data) => {
        

  return (
    <div className="card h-100 border-success" style={{width:'240px'}}>
      <img src='/assets/car.png' className="card-img-top" alt="..."/>
      <div className="card-body ">
        <h5 className="card-title">Rs{props.price}</h5>
        <p className="card-text">{props.name} {props.model}
        <br/>
        {props.location}  {timeAgo(props.time)}
        </p>
      </div>
      {/* <div className="card-footer">
        <small className="text-body-secondary">{props.time}</small>
      </div> */}
    </div>
  )
}
export default CarD
