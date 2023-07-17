import { Divider } from '@mui/material';
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div style={{float:'left'}}>{title}</div>
        <div style={{float:'right'}}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <Divider sx={{ bgcolor:'black'}}/>
    </div>
  );
};

export default Accordion;