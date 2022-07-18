import React from 'react';
import '../styles/Contador.css';

function Contador({ noClicks }) {
    return (
        <div className='contador'>
            {noClicks}
        </div>
    );
}

export default Contador;