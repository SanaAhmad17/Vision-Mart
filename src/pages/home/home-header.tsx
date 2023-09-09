import React from 'react'
import './home.css'
 const HomeHeader=()=> {
  return (
 <div  className='mx-5'>   
<div className='container-fluid' >
<img src="/assets/background.png" className="img-fluid mt-3 " alt="..."></img>
</div>
<h3 className="h3 m-3">All categories</h3>
<div className='container-fluid ' style={{ }}>
<figure>
  <img src="/assets/mobile.png" className="rounded-circle" alt="mobiles" width="85" height="85" />
  <figcaption >Mobiles</figcaption>
</figure>
<figure>
  <img src="/assets/car.png" className="rounded-circle" alt="car" width="85" height="85" />
  <figcaption >Vehicles</figcaption>
</figure>
<figure>
  <img src="/assets/property.jpg" className="rounded-circle" alt="property" width="85" height="85" />
  <figcaption >Property</figcaption>
</figure>
<figure>
  <img src="/assets/appliances.jpg" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Electronics</figcaption>
</figure>
<figure>
  <img src="/assets/bike.jpg" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Bikes</figcaption>
</figure>
<figure>
  <img src="/assets/furniture.jpg" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Furniture</figcaption>
</figure>
<figure>
  <img src="/assets/services.png" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Services</figcaption>
</figure>
<figure>
  <img src="/assets/jobs.png" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Jobs</figcaption>
</figure>
<figure>
  <img src="/assets/books.jpg" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Books</figcaption>
</figure>
<figure>
  <img src="/assets/cat.png" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Animals</figcaption>
</figure>
<figure>
  <img src="/assets/tractor.jpg" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Industrial</figcaption>
</figure>
<figure>
  <img src="/assets/fashion.png" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Fashion</figcaption>
</figure>
<figure>
  <img src="/assets/toys.jpg" className="rounded-circle" alt="" width="85" height="85" />
  <figcaption >Kids</figcaption>
</figure>
</div>
</div>
  )}
  export default HomeHeader;