import React from 'react'
import './MovieProduct.css'
// import { useStateValue } from './StateProvider';

function MovieProduct({id,title,image,rating,link}) {
  // const [, dispatch] = useStateValue();

  return (
    <div className='container_mov_prod_1'>
      <img src={image} alt="" />
      <p className='mov_1_title'>{title}</p>
      <p className='mov_1_rate'>{rating}/10</p>
      <button className='wtch_now'><a href={link} className='watch_to'>WATCH NOW</a></button>
    </div>
  )
}

export default MovieProduct
