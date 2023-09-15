import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { Cars,Mobiles,Bikes } from '../dummy-data'
import Rating from '@mui/material/Rating';
import { MDBIcon, MDBBtn  } from 'mdb-react-ui-kit';
import SimpleImageSlider from "react-simple-image-slider";

interface CardProps {
    name: string;
    model: string;
    price: number;
    location: string;
    time: string;
    image: string;
    sellerRating : number;
  }
  
export default function CardDetail() {
 
    const { cardId } = useParams<{ cardId: string }>();
    const Lists = [
        { name: 'Cars', value: Cars },
        { name: 'Mobiles', value: Mobiles },
        { name: 'Bikes & Moyorcycles', value: Bikes },
        // {name: 'Furniture' , value : Furniture}
      ]
      let card: CardProps | undefined;
      for (const item of Lists) {
        card = item.value.find((data: CardProps) => data.name === cardId);
        if (card) {
          break; // Exit the loop when the card is found
        }
      }
    
      if (!card) {
        return <div>Card not found</div>;
      }
    const {
        name,
        model,
        price,
        image,
        time,
        location,
        sellerRating,
      } = card;
      const images = [
        { url: '/assets/bike.jpg' },
        { url: '/assets/books.jpg' },
        { url: '/assets/cat.png' }
      ];
  return (
    <>
    <div className=' container fluid mt-md-4 p-3' style={{backgroundColor:'#FFFAFA	'}}>
      <div className=' container  d-flex justify-content-center'>
      <span className="mt-4"  >
    <SimpleImageSlider
        width={450}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        navMargin={10}
        navSize={30}
      />
      </span>
      {/* <img src={image} className="mt-4"/> */}
      <span className='m-md-4 product d-flex flex-column justify-content-between'> 
      <div>
      <h2 >Price: {price} PKR</h2> 
      <h4>{name}  ({model})</h4>
      <Rating className="read-only"  value={sellerRating} readOnly size="medium" />
      <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #DAD7D7'}} ><p className='fs-6'>Brand : brandName</p><span><MDBIcon className='mx-2' icon='share-nodes' size='lg' /><MDBIcon className='mx-2' icon='heart' size='lg' /></span></div>
      {/* <p className='fs-6'>Instalment Offers : <i className="fa-regular fa-calendar-days"></i> Available</p> */}
      <p>Color Family : Blue</p>
      </div>
      <div>
      <MDBBtn rounded color='success'>
        Buy Now
      </MDBBtn>
      <MDBBtn rounded color='warning'>
        Add to Cart
      </MDBBtn>
      </div>
      </span>
      <span className='my-md-4 d-flex flex-column justify-content-between' style={{backgroundColor:'#F5FFFA'}}>
        <div>
      <p className='m-md-3' style={{borderBottom:'1px solid #DAD7D7'}}>Location <br/>
      <i className="fa-solid fa-location-dot"></i> {location}
      </p>
      <p className='m-md-3'style={{borderBottom:'1px solid #DAD7D7'}}>
      <i className="fa-solid fa-money-bills" ></i> Cash on Delivery Available
      </p>
      <p className='m-md-3' style={{borderBottom:'1px solid #DAD7D7'}}>Service <br/>
      <i className="fa-solid fa-xmark"></i> Warranty Not Available
      </p>
      </div>
      <div>
      <p className='m-md-3 'style={{borderTop:'5px solid white'}}>
      <i className="fa-regular fa-user"></i> Seller Name <br/>
      <a className='link fs-6' href="#">See Profile  <i className="fa-solid fa-chevron-right"></i></a> <br/>
      <MDBBtn outline rounded color='success' style={{width:'200px'}}>
      <i className="fa-solid fa-phone"></i> Show Phone Number
      </MDBBtn><br/>
      <MDBBtn outline rounded className='mx-2 mt-2' color='secondary' style={{width:'200px'}}>
      <i className="fa-regular fa-message"></i> Chat
      </MDBBtn>
      </p>
      </div>
      </span>
    </div>
    <div className=' mt-3 ' style={{marginLeft:'140px'}}>
    <h2 >Details</h2>
    <p className=' p-3' style={{border:'1px solid #DAD7D7', borderRadius:'5px' ,width:'1000px'}}>
      Product : Product Name <br/>
      Model : xxxx <br/>
      Condition : used/unused <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    </p>
    </div>
    </div>
    </>
  )
}
