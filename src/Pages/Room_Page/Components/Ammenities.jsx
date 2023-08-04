import Ammenity_Object from "./Ammenity_Object";
import { IconButton, Button, Divider, Grid } from "@mui/material";

function Ammenities(props) {
    return (<>
        
        <div className="ammenities" style={{display:"flex",justifyContent:"center",width:"100%",alignItems:"center",marginLeft:"23%"}}>
            <Grid container spacing={10}>
                    {props.h_name.map((item) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} role="gridcell">
                                <Ammenity_Object name={item}></Ammenity_Object>
                            
                        </Grid>
                        );
                    })}
                    </Grid>
            
            {/* <ul>

                <li className="flex justify-center p-2">
                    <Ammenity_Object ></Ammenity_Object>
                </li>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
            </ul>
            <ul>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
            </ul>
            <ul>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
                <li className="flex justify-center p-2">
                    <Ammenity_Object></Ammenity_Object>
                </li>
            </ul> */}
        </div>
    </>
        
    )
}
export default Ammenities;