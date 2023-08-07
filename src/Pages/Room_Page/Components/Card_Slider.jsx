

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ActionAreaCard from "./Card_";

function Card_Slider(props) {
    var arr = []
    
    return (
        <>
        <h1 className='text-left  pt-10 font-bold text-2xl '>Rooms and Suites</h1>
        <div style={{ width: "80%"}} className="slider">
            
                {props.data.map((i, index) => {
                
            return <ActionAreaCard name={props.data5[index]} image={props.data3[index]} cost={props.data2[index]} h_id={props.id} s_d={props.s_d} e_d={props.e_d} type={i} r_id={props.data4[index]} guests={props.guests}></ActionAreaCard>
        })}
      </div></>
        
        
    )
    

    
}

export default Card_Slider;