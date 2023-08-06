import React from 'react';


export default function ButtonIncrement({onClickFunc, op}) {
    return(
        <div className='button'>
            <button
            type='button'
            class='btn-primary buttonStyle'
            onClick={onClickFunc}>
                {op}
            </button>
        </div>
    )
}