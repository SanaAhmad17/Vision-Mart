import React from 'react'
import { useParams } from 'react-router-dom'
import { Cars,Mobiles,Bikes } from '../dummy-data'
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
  return (
    <div>
         <h2>{name}</h2>
      <p>Model: {model}</p>
      <p>Price: {price} PKR</p>
      <img src={image} alt={name} />
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <p>Seller Rating: {sellerRating}</p>
    </div>
  )
}
