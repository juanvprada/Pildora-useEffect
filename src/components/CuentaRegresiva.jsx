import React, { useState, useEffect } from 'react';
import './CuentaRegresiva.css'; // Importa el archivo CSS

function CuentaRegresiva() {
  const [vidas, setVidas] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [mensajeVidas, setMensajeVidas] = useState('');

  useEffect(() => {
    if (vidas === 0) {
      setGameOver(true);
    } else {
      setMensajeVidas(`Te quedan ${vidas} vidas`);
    }
  }, [vidas]);

  const handleDecremento = () => {
    if (vidas > 0) {
      setVidas(vidas - 1);
    }
  };

  return (
    <div className="cuenta-regresiva-container">
      <h1>Cuenta Regresiva</h1>
      {!gameOver ? (
        <div>
          <p>{vidas}</p>
          <img
            src="https://media1.tenor.com/m/9eXjRJxrgxkAAAAd/super-mario-world-mario.gif"
            alt="GIF de Restar 1"
            onClick={handleDecremento}
            className="cuenta-regresiva-image"
          />
          <p className="cuenta-regresiva-message">{mensajeVidas}</p>
        </div>
      ) : (
        <h2 className="cuenta-regresiva-game-over">Game Over</h2>
      )}
    </div>
  );
}

export default CuentaRegresiva;


