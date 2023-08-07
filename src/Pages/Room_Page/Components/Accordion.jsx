import { Divider } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import '../Stylesheets/Accordion.css'; 

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className={isActive ? 'dropdown-icon open': 'dropdown-icon'}><ExpandMoreIcon/></div>
      </div>
      <div className={isActive ? "accordion-content open" : "accordion-content"}>
        <div className='accordion-text'>
          <Grid container spacing={2}>
                  {content.map((item) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} role="gridcell">
                        <p className="amenities-text">{item}</p>
                      </Grid>
                    );
                  })}
          </Grid>
        </div>
      </div>
      <Divider sx={{ bgcolor:'black'}}/>
    </div>
  );
};

export default Accordion;