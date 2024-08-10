import Box from "../atoms/Box";
import Playlist from "../molecules/Playlist";

function PlayListMusic({onClick}) {
    return ( 
        <>
            <div className="flex justify-center ">
            <Playlist onClick={onClick}></Playlist>
            </div>
        </>
     );
}

export default PlayListMusic;