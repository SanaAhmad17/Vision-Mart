import React from 'react'
import './../App.css'
import { CarD } from '../components'
import { carDataset ,mobileDataset ,bikeDataset , furnitureDataset} from '../dummy-data'
export default function HomePage() {
  return (
    <div>
      <div className='container-fluid' >
    <img  src="/assets/background.png" className="img-fluid mt-3 " alt="..."></img>
    </div>
    <h3 className="h3 m-3">All categories</h3>
    <div className='container-fluid' style={{borderBottom:'1px solid black'}}>
    <figure>  
    <img src="/assets/mobile.png" className="rounded-circle" alt="mobiles" width="85" height="85"/> 
    <figcaption >Mobiles</figcaption>
    </figure>
    <figure>  
    <img src="/assets/car.png" className="rounded-circle" alt="car" width="85" height="85"/> 
    <figcaption >Vehicles</figcaption>
    </figure>
    <figure>  
    <img src="/assets/property.jpg" className="rounded-circle" alt="property" width="85" height="85"/> 
    <figcaption >Property</figcaption>
    </figure>
    <figure>  
    <img src="/assets/appliances.jpg" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Electronics</figcaption>
    </figure>
    <figure>  
    <img src="/assets/bike.jpg" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Bikes</figcaption>
    </figure>
    <figure>  
    <img src="/assets/furniture.jpg" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Furniture</figcaption>
    </figure>
    <figure>  
    <img src="/assets/services.png" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Services</figcaption>
    </figure>
    <figure>  
    <img src="/assets/jobs.png" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Jobs</figcaption>
    </figure>
    <figure>  
    <img src="/assets/books.jpg" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Books</figcaption>
    </figure>
    <figure>  
    <img src="/assets/cat.png" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Animals</figcaption>
    </figure>
    <figure>  
    <img src="/assets/tractor.jpg" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Industrial</figcaption>
    </figure>
    <figure>  
    <img src="/assets/fashion.png" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Fashion</figcaption>
    </figure>
    <figure>  
    <img src="/assets/toys.jpg" className="rounded-circle" alt="" width="85" height="85"/> 
    <figcaption >Kids</figcaption>
    </figure>
    
    </div>
    <div className='container-fluid '>
    <h3 className="d-flex justify-content-between align-items-center mt-3">
      <span>Cars</span>
      <a className='link fs-6' href="#">View more</a> </h3>
    <ul className="list-group list-group-horizontal mx-5 list-group-flush">
      { carDataset.map((data , index)=>(
  <li className="list-group-item" key={index}>
    <CarD {...data} />
  </li>
      ))}
</ul>
</div>
<div className='container-fluid '>
<h3 className="d-flex justify-content-between align-items-center mt-3">
      <span>Mobiles</span>
      <a className='link fs-6' href="#">View more</a> </h3>
    <ul className="list-group list-group-horizontal mx-4 list-group-flush">
      { mobileDataset.map((data , index)=>(
  <li className="list-group-item" key={index}>
    <CarD {...data} />
  </li>
      ))}
</ul>
</div>
<div className='container-fluid '>
<h3 className="d-flex justify-content-between align-items-center mt-3">
      <span>Bikes & Motorcycles</span>
      <a className='link fs-6' href="#">View more</a> </h3>
    <ul className="list-group list-group-horizontal mx-5 list-group-flush">
      { bikeDataset.map((data , index)=>(
  <li className="list-group-item" key={index}>
    <CarD {...data} />
  </li>
      ))}
</ul>
</div>
<div className='container-fluid '>
<h3 className="d-flex justify-content-between align-items-center mt-3">
      <span>Furniture</span>
      <a className='link fs-6' href="#">View more</a> </h3>
    <ul className="list-group list-group-horizontal mx-5 list-group-flush">
      { furnitureDataset.map((data , index)=>(
  <li className="list-group-item" key={index}>
    <CarD {...data} />
  </li>
      ))}
</ul>
</div>
  </div>
  )
}
