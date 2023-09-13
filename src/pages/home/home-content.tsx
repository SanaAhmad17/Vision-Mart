import React,{createRef} from 'react'
import './home.css'
import { CarD } from '../../components'
import { Cars, Mobiles, Bikes, Furniture } from '../../dummy-data'
import { Link } from 'react-router-dom';
export default function HomeContent() {
    const Lists = [
        { name: 'Cars', value: Cars },
        { name: 'Mobiles', value: Mobiles },
        { name: 'Bikes & Moyorcycles', value: Bikes },
        // {name: 'Furniture' , value : Furniture}
      ]
    
      const elementRefs: React.RefObject<HTMLUListElement>[] = Lists.map(() =>
        createRef()
      );
    
    
      const handleHorizontalScroll = (index: number, speed: number, distance: number, step: number) => {
        const currentRef: any = elementRefs[index]?.current;
    
        if(!currentRef) {
          return; // Exit early if the ref is null
        }
        let animationFrameId: number | null = null;
        let scrollAmount = 0;
    
        function scroll() {
          currentRef.scrollLeft += step;
          scrollAmount += Math.abs(step);
    
          if(scrollAmount >= distance) {
            // Stop scrolling when reaching the desired distance
            if(animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          } else {
            // Continue scrolling
            animationFrameId = requestAnimationFrame(scroll);
          }
        }
    
        // Start scrolling
        if(!animationFrameId) {
          scroll();
        }
      };
  return (
    <div>
    {Lists.map((item:any,index:any) => (
        <div className='container-fluid px-md-2 px-0' key={index}>
          <h3 className="d-flex justify-content-between align-items-center mt-3 mx-md-5 mx-1">
            <span>{item.name}</span>
            <a className='link fs-6' href="#">View more</a> </h3>
            <div style={{display:'flex',flexDirection:'row'}}>
            <button className='arrow'
            onClick={() => {
              handleHorizontalScroll(index, 10, 200, -2);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <ul className="list-group list-group-horizontal mx-md-4 mx-0 hide-scrollbar  " style={{ overflowX: 'scroll', whiteSpace: 'nowrap', scrollbarWidth: 'none' }} ref={elementRefs[index]} >
            {item.value.map((data:any, index:any) => (
              <li className="list-group-item px-md-4 px-2" key={data.name} style={{}}>
                <Link to={`/card/${data.name}`}>
                <CarD {...data} />
                </Link>
              </li>
            ))}
          </ul>
          <button className='arrow'
            onClick={() => {
              handleHorizontalScroll(index, 10, 200, 2);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          </div>
        </div>))}
        </div>
  )
}
