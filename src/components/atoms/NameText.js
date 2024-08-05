let cancionSeleccionada = null;

const setCancionSeleccionada = (nombre) => {
  cancionSeleccionada = nombre;
};

const getCancionSeleccionada = () => {
  return cancionSeleccionada;
};

export { setCancionSeleccionada, getCancionSeleccionada };