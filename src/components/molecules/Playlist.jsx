import Box from "../atoms/Box";
import subir from "/subir.webp.png"
import logo from "/logoMusica.png"
import disco from "/disco.png"
import { useRef, useState, useEffect } from "react";
import { setCancionSeleccionada } from '../atoms/NameText';
function Playlist() {
    const fileInput = useRef(null);
    const [canciones, setCanciones] = useState([]);
    
    const subirMusica = () =>{
        document.getElementById("file").click();
    }

    const fileAudios = (event) =>{
        const getaudios = event.target.files;
        const newCanciones = Array.from(getaudios).filter(file => file.type.startsWith('audio/'));
        setCanciones(prevCanciones => [...prevCanciones, ...newCanciones]);
        console.log(canciones)
    }

    const reproducir = (nombreCancion) =>{
        setCancionSeleccionada(nombreCancion); 
        const url = URL.createObjectURL(nombreCancion); // Crear la URL del archivo de audio
        localStorage.setItem('cancionURL', url);   
    }
    

    return ( 
        <>
        <div className="h-auto w-[90vh] ">
        <Box>
            <div className="flex items-center justify-center">
            <hr className=" border w-[80vh] opacity-35"/>
            </div>

            <div className="flex justify-between p-8">
                <img src={logo} alt="logo" className="w-14 h-14"/>
                <p className="flex justify-center text-[20px] text-red-100 mt-3">Nombre de la lista</p>
                <img src={subir} onClick={subirMusica} alt="logo" title="Subir cancion"
                className="w-14 h-14 cursor-pointer hover:bg-[#506e8679]"/>
                
                
                <input 
                type="file"
                 id="file" className="hidden"
                 accept="audio/*"
                 onChange={fileAudios}
                 ref={fileInput} multiple/>
            </div>

            {canciones.length === 0 ? (
                    <div className="p-6">
                        <p className="text-yellow-50 text-[18px] pl-5 text-center">Lista vacia</p>
                    </div>
                ) : (
                    canciones.map((cancion, key) => (    
                        <div key={key}
                        onClick={() => reproducir(cancion.name)}
                        className="pl-5 w-full flex col-span-1 hover:bg-[#514e4e] cursor-pointer pb-4 pt-4" 
                        title="Reproducir canción">
                            <img src={disco} alt="disco" className="w-12 h-12"/>
                            <div className=" col-span-2">
                            <p className="text-yellow-50 text-[18px] pl-5">{cancion.name}</p>
                            <p className="text-cyan-300 pl-6 flex justify-start">Play</p>
                            </div>
                        </div>
                        
                    ))
                )}
        </Box>
        </div>
        </>
     );
}

export default Playlist;