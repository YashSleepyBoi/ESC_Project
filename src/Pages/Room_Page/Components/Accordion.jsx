import { Divider } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
          <p>{content}</p>
        </div>
      </div>
      <Divider sx={{ bgcolor:'black'}}/>
    </div>
  );
};

export default Accordion;