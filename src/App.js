import './App.css';
import logo from './logo.svg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const funcionClick = () => {
    setNumClicks(numClicks + 1);
  };

  const funcionReiniciar = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo' 
          src={logo}
          alt='Logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador noClicks={numClicks} />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          funcionClick={funcionClick}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          funcionClick={funcionReiniciar}/>
      </div> 
    </div>
  );
}

export default App;
