import React, { useEffect, useState } from 'react'
import "./Stylesheets/Loading.css";
  
function Loading() {

    const isLoading = true;

    if (isLoading) {
        return (
            <div className='is-loading'>
                <div className='loading-text'>
                Loading results... 
                </div>
            </div>
        )
    }
}

export default Loading;