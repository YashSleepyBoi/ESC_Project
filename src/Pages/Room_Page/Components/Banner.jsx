import "../Stylesheets/Banner.css"


function Banner() {
    

    return (
        <div className="banner">
            {/* first grid  */}
            <div >
                <img src='https://images.ctfassets.net/2chiqpnroeav/1FWLz3iObwAI8yiGRhjadG/8f4f11040dc5c055e06ad9e84b88348a/company921-ascenda.png' style={{width:150, height:100, margin:0, marginBottom:10}}></img>
            </div>
            {/* second grid */}
            <div>
                <h1>JW MARRIOTT HOTEL SINGAPORE SOUTH BEACH</h1>
                
                <h5>30 Beach Road, Access via Nicoll Highway, Singapore  189763 Singapore</h5>
            </div>

        </div>
    )
}

export default Banner;