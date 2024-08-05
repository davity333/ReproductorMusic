let cancionSeleccionada = null;
let cancionReproducir = null;

const setCancionSeleccionada = (nombre) => {
  cancionSeleccionada = nombre;
};

const getCancionSeleccionada = () => {
  return cancionSeleccionada;
};

const setCancionReproducir = (nombre) =>{
    cancionReproducir = nombre;
}

const getCancionReproducir = () =>{
    return cancionReproducir;
}

export { setCancionSeleccionada, getCancionSeleccionada, setCancionReproducir, getCancionReproducir };