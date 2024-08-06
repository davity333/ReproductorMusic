import { useState, useEffect } from "react";
import Box from "../atoms/Box";
import Img from "../atoms/Img";
import music from "/music.png"
import viteLogo from '/vite.svg'
import disco from "/disco.png"
import { getCancionSeleccionada } from "../atoms/NameText";

function Reproductor() {
  const [nombreCancion, setNombreCancion] = useState(getCancionSeleccionada());
  const [audioUrl, setAudioUrl] = useState(localStorage.getItem('cancionURL') || '');

  useEffect(() => {
      const actualizarCancion = () => {
          setNombreCancion(getCancionSeleccionada());
          setAudioUrl(localStorage.getItem('cancionURL'));
      };

      const interval = setInterval(actualizarCancion, 100);
      return () => clearInterval(interval);
  }, []);

  return (
      <>
          <div className="h-auto w-[50vh] sm:h-auto sm:w-[90vh] max-[390px]:w-[40vh]">
              <Box>
                  <div className="flex col-span-1">
                      <img src={music} alt="" className="h-64 p-5 rounded-[40px] max-[390px]:ml-7 max-[640px]:ml-12" />

                      <div className="mt-7">
                          <p className="text-[20px] text-white block max-[370px]:hidden max-[649px]:hidden">Nombre</p>
                          <p className="text-[17px] text-[#ff2b2b] [text-shadow:_0px_1px_8px_rgba(0,0,0,0.47)]
                          sm:text-[20px] block max-[370px]:hidden max-[649px]:hidden">{nombreCancion || 'Nombre de la canción'}</p>

                          <audio src={audioUrl} controls className="custom-audio-player h-8 mt-5 hidden
                          sm:block min-[550px]:hidden"></audio>
                      </div>
                  </div>

                  <p className="text-[20px] text-white hidden max-[649px]:block text-center ">Nombre</p>
                    <p className="text-[17px] text-[#ff2b2b] [text-shadow:_0px_1px_8px_rgba(0,0,0,0.47)]
                    sm:text-[20px] hidden max-[649px]:block text-center">{nombreCancion || 'Nombre de la canción'}</p>
                  
                  <audio src={audioUrl} controls className="w-full p-2 block sm:hidden"></audio>
              </Box>
          </div>
      </>
  );
}

export default Reproductor;