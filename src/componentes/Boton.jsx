import React from "react";
import '../styles/Boton.css';

function Boton({ texto, esBotonDeClick, funcionClick }) {
    return (
        <button
            className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
            onClick={funcionClick}>
            {texto}
        </button>
    );
}

export default Boton;