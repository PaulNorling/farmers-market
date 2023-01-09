import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Carousel.css'

function Carousel() {

    // https://www.npmjs.com/package/react-animated-slider

    const slides = [
        { image: "https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?b=1&s=170667a&w=0&k=20&c=nb9fxR6z4ztjH_Ov-3NCHPd0O5SpBwxWXmKeEd4W9pc="},
        { image: "https://hvfarmhub.org/wp-content/uploads/2014/12/crops-03.jpg"},
        { image: "https://www.arc2020.eu/wp-content/uploads/2019/02/poland-nature-3377523_960_720.jpg"},
      //   { image: "https://i2-prod.cambridge-news.co.uk/incoming/article13547695.ece/ALTERNATES/s1200d/0_Rainbow-Bridge-Field.jpg"}
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