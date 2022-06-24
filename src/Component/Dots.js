import React from 'react'

const Dots = ({activeIndex,onClick,imageSlider}) => {
  return (
    <div className='all-dots'>
        {
            imageSlider.map((slide,index)=>(
                <span onClick={()=>onClick(index)} className={`${activeIndex === index ? "dot active-dot":"dot"}`} key={index}></span>
            ))
        }
    </div>
  )
}

export default Dots