import React from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
const Arrows = ({prevSlide,nextSlide}) => {
  return (
    <div className='arrows'>
        <span className='prev' onClick={prevSlide}><AiOutlineArrowLeft /></span>  
        <span className='next' onClick={nextSlide}><AiOutlineArrowRight /></span>  
    </div>
  )
}

export default Arrows