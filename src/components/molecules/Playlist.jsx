import Box from "../atoms/Box";
import subir from "/subir.webp.png"
import logo from "/logoMusica.png"
import disco from "/disco.png"
import lapiz from "/lapiz.png"
import { useRef, useState, useEffect } from "react";
import { setCancionSeleccionada } from '../atoms/NameText';
function Playlist({onClick}) {
    const fileInput = useRef(null);
    const [canciones, setCanciones] = useState([]);

    const subirMusica = () => {
        document.getElementById("file").click();
    }

    const fileAudios = (event) => {
        const getaudios = event.target.files;
        const newCanciones = Array.from(getaudios).filter(file => file.type.startsWith('audio/'));
        setCanciones(prevCanciones => [...prevCanciones, ...newCanciones]);
        console.log('Archivos seleccionados:', newCanciones);
    }

    const reproducir = (cancion) =>{
        setCancionSeleccionada(cancion.name); 
        const url = URL.createObjectURL(cancion); 
        localStorage.setItem('cancionURL', url);   
    }

    const eliminar = (cancion) => {
        const nuevasCanciones = canciones.filter(item => item !== cancion);
        setCanciones(nuevasCanciones);
    }

    return (
        <div className="h-auto w-[50vh] sm:h-auto sm:w-[90vh] max-[390px]:w-[40vh]">
            <Box>
                <div className="flex items-center justify-center">
                    <hr className="border w-[80vh] opacity-35" />
                </div>

                <div className="flex justify-around p-8">
                    <img src={logo} alt="logo" className="w-14 h-14" />

                    <div className="flex col-span-1 cursor-pointer" onClick={onClick}>
                    <p className="flex justify-center text-[20px] text-red-100 mt-3 font-bold">Nombre de la lista</p>
                    <img src={lapiz} alt="logo"  className="h-5 pl-3 mt-4"/>
                    </div>
                    <img 
                        src={subir} 
                        onClick={subirMusica} 
                        alt="Subir canción" 
                        title="Subir canción"
                        className="w-14 h-14 cursor-pointer hover:bg-[#506e8679]" 
                    />    
                    <input 
                        type="file"
                        id="file" 
                        className="hidden"
                        accept="audio/*"
                        onChange={fileAudios}
                        ref={fileInput} 
                        multiple
                    />
                </div>

<div className="overflow-y-auto max-h-52 bg-[#4d474740] shadow-[inset_0px_20px_48px_-25px_rgba(0,0,0,0.11)]">
                {canciones.length === 0 ? (
                    <div className="p-6">
                        <p className="text-yellow-50 text-[18px] pl-5 text-center">Lista vacía</p>
                    </div>
                ) : (
                    
                    canciones.map((cancion, key) => (
                        <div 
                            key={key}
                            onClick={() => reproducir(cancion)}
                            className="pl-5 w-full flex col-span-1 hover:bg-[#514e4e] cursor-pointer pb-4 pt-4 "
                            title="Reproducir canción"
                        >
                            <img src={disco} alt="disco" className="w-12 h-12" />
                            <div className="col-span-2">
                                <p className="text-yellow-50 text-[18px] pl-5">{cancion.name}</p>
                                <p className="text-cyan-300 pl-6 flex justify-start">Play</p>
                            </div>
                            <button onClick={() =>eliminar(cancion)} className="cursor-pointer hover:bg-[#d5caca39] h-7 rounded-xl px-2 m-4" title="Eliminar cancion">Eliminar</button>
                        </div>
                    ))
                )}
                </div>
                        
            </Box>
        </div>
    );
}


export default Playlist;