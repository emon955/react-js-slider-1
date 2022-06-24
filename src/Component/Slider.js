import React, { useState } from 'react'
import SliderContent from './SliderContent'
import imageSlider from './ImageSlider'
import Arrows from './Arrows'
import Dots from './Dots'
import './Slider.css'
const Slider = () => {
   const len = imageSlider.length-1
    const [activeIndex,setActiveIndex] = useState(0);
  return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
        <Arrows prevSlide={()=> setActiveIndex(activeIndex < 1 ? len : activeIndex -1 )}
        nextSlide={()=>setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
        />
        <Dots 
        activeIndex={activeIndex}
         imageSlider={imageSlider}
         onClick={(activeIndex)=>setActiveIndex(activeIndex)}
         />
    </div>
  )
}

export default Slider