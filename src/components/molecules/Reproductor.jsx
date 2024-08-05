import { useState, useEffect } from "react";
import Box from "../atoms/Box";
import Img from "../atoms/Img";
import music from "/music.png"
import viteLogo from '/vite.svg'
import { getCancionSeleccionada } from "../atoms/NameText";

function Reproductor() {
  const [nombreCancion, setNombreCancion] = useState(getCancionSeleccionada());


  useEffect(() => {
    const actualizarCancion = () => {
      setNombreCancion(getCancionSeleccionada());
    };

    const interval = setInterval(actualizarCancion, 100);
    return () => clearInterval(interval);
  }, []);

    return ( 
        <>
          <div className="h-auto w-[90vh]">
            <Box>
              <div className="flex col-span-1">
              <img src={music} alt="" className="h-64 p-5 rounded-[40px]"/>

              <div className="mt-7">
              <p className="text-[20px] text-white">Nombre</p>{/*AQUI QUIERO IMPRIMIR EL NOMBRE DE LA CANCION CUANDO LE DE CLICK AL BOTON DEL MAPEO*/}
              <p className="text-[20px] text-white">{nombreCancion || 'Nombre de la canción'}</p>

              <audio src="" controls className="custom-audio-player h-8 mt-5"></audio>
              </div>

              </div>

            </Box>
            </div>  
        </>
     );
}

export default Reproductor;