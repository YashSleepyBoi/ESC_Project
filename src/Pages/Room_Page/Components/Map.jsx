function Map(props) {

    return (
        <div className="map_holder">
            
            <div className="getting_here">
                <h1> Getting Here</h1>
                <p>
                {props.name}
                </p>
                <p>
                {props.address}
                </p>
                <p>
                {props.city},{props.country}
                </p>
            </div>
            {/* <div className="map">
                
                <div className="flex justify-center ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.9948580094842!2d130.5510162766451!3d31.579188874187103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e619014307c7f%3A0xa2e78ee4b8c55fbc!2sSheraton%20Kagoshima!5e0!3m2!1sen!2ssg!4v1688970575552!5m2!1sen!2ssg" width="80%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                </div>
            </div> */}
        </div>
       
    )
}
export default Map;