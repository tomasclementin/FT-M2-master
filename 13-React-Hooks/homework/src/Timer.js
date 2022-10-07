import React from 'react';
import './Timer.css';


const Timer = () => {

  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState('Contador');

  React.useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  const myRef = React.useRef(null);

  function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
  }

  function toggle() {
    setActivo(!activo);
  }
  
  function reset() {
    setSegundos(0);
    setActivo(false);
  }
  
  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" 
      placeholder="Ingresa Segundos" ref={myRef} onChange={agregaSegundos} autoComplete="off"/>}
    </div>
  );
};

export default Timer;