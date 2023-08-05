import H_Object from "./H_Object";
import { IconButton, Button, Divider, Grid } from "@mui/material";
import { useState } from "react";

function H_Information(props) {

    return (
        <div className="information" style={{display:"flex" , justifyContent:"center"}}>
            
            
            <Grid container spacing={2}>
                {props.h_name.map((item) => {
                  
                    return (
                      <Grid item xs={12} sm={6} md={4} role="gridcell">
                        <H_Object item={item}></H_Object>
                        
                      </Grid>
                    );
                  })}
                </Grid>
            
            
        </div>
    )
}

export default H_Information;