

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ActionAreaCard from "./Card_";

function Card_Slider(props) {
    var arr = []
    
    return (
        <>
        <h1 className='text-left  pt-10 font-bold text-2xl '>Rooms and Suites</h1>
        <div style={{ width: "80%"}} className="slider">
            
            {props.data.map(i => {
            return <ActionAreaCard name={i.room} image={i.image}></ActionAreaCard>
        })}
      </div></>
        
        
    )
    

    
}

export default Card_Slider;