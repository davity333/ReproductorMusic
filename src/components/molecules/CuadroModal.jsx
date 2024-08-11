function CuadroModal({onClick}) {
    return ( 
        <>
        
        <div className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-[#b1bac5] h-[50%] w-[40%] rounded">  
            <p className="text-2xl text-center pt-11">Nombre de la PlayList</p>

            <div className="flex justify-center items-center">
                <input type="text" className="bg-[#dbd1d1] border-black"/>
            <button className="pt-28" onClick={onClick}>Salir</button>
            </div>
            </div>
        </div>
        
        </>
     );
}

export default CuadroModal;