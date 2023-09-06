import React,{useRef,useState} from 'react'
import './../App.css'
import { CarD } from '../components'
import { Cars ,Mobiles ,Bikes , Furniture} from '../dummy-data'
export default function HomePage() {
  const Lists = [
    {name: 'Cars' , value : Cars},
    {name: 'Mobiles' , value : Mobiles},
     {name: 'Bikes & Moyorcycles' , value : Bikes},
    // {name: 'Furniture' , value : Furniture}
  ]
  const elementRefs: React.RefObject<HTMLUListElement>[] = Lists.map(() =>
    useRef<HTMLUListElement>(null)
  );

  const [arrowDisables, setArrowDisables] = useState<boolean[]>(Lists.map(() => true));

  const handleHorizontalScroll = (index: number, speed: number, distance: number, step: number) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      const currentRef = elementRefs[index]?.current;
      if (currentRef) {
        currentRef.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
        if (currentRef.scrollLeft === 0) {
          setArrowDisables((prev) => {
            const updatedDisables = [...prev];
            updatedDisables[index] = true;
            return updatedDisables;
          });
        } else {
          setArrowDisables((prev) => {
            const updatedDisables = [...prev];
            updatedDisables[index] = false;
            return updatedDisables;
          });
        }
      } else {
        clearInterval(slideTimer); // Clear the interval if the ref is null.
      }
    }, speed);
  };
  return (
    <div>
      <div className='container-fluid' >
    <img  src="/assets/background.png" className="img-fluid mt-3 " alt="..."></img>
    </div>
    <h3 className="h3 m-3">All categories</h3>
    <div className='container-fluid ' style={{borderBottom:'1px solid black'}}>
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
    {Lists.map((item , index)=>(
      
    <div className='container-fluid ' key={index}>
     
    <h3 className="d-flex justify-content-between align-items-center mt-3">
      <span>{item.name}</span>
      <a className='link fs-6' href="#">View more</a> </h3>
    <ul className="list-group list-group-horizontal mx-5 list-group-flush hide-scrollbar  " style={{ overflowX:'scroll',whiteSpace:'nowrap',scrollbarWidth:'none'}} ref={elementRefs[index]} >
      { item.value.map((data , index)=>(
  <li className="list-group-item " key={index} style={{}}>
    <CarD {...data} />
  </li>
      ))}
</ul> 
<button
      onClick={() => {
        handleHorizontalScroll(index, 25, 100, -10);
      }}
      disabled={arrowDisables[index]}
    >
      Left
    </button>
    <button
      onClick={() => {
        handleHorizontalScroll(index, 25, 100, 10);
      }}
    >
      Right
    </button>
</div>))}

  </div>
  )
}
