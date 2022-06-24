import React from 'react'

const SliderContent = ({activeIndex,imageSlider}) => {
  return (
    <section>
        <div>
            {
                imageSlider.map((slide,index)=>(
                    <div className={index === activeIndex ? "slides active" : "inactive"} key={index}>
                        <img className='slide-image' src={slide.url} />
                        <h2 className='slide-title'>{slide.title}</h2>
                        <h3 className='slide-text'>{slide.description}</h3>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default SliderContent