import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Carousel.css'

function Carousel() {

    // https://www.npmjs.com/package/react-animated-slider

    const slides = [
        { image: "https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?b=1&s=170667a&w=0&k=20&c=nb9fxR6z4ztjH_Ov-3NCHPd0O5SpBwxWXmKeEd4W9pc="},
        { image: "https://hvfarmhub.org/wp-content/uploads/2014/12/crops-03.jpg"},
        { image: "https://www.realsimple.com/thmb/FZ8KbLWqpk01a4bRbjB4S3QE8pk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plant-vegetables-2-25a60490e3544639bbeb0cc1c9387cf5.png"}
      ];

    return (
        <Slider 
        infinite='true'
        autoplay='4000'
        previousButton=''
        nextButton=''
        touchDisabled='true'
        className='slide-container' 
        >
        {slides.map((slide, index) => <div key={index}>
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
          <img className='carousel-img' src={slide.image} />
        </div>)}
      </Slider>
        )
}

export default Carousel;