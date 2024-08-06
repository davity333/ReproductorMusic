import PlayListMusic from "../components/organism/PlayListMusic";
import ReproductoMusic from "../components/organism/ReproductorMusic";
import style from './../text.module.css'
function ReproductorMusicaPage() {
    return ( 
        <>
        <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center ">
          <p className="text-[38px] mb-2 text-center sm:text-center text-[#e9e8e8]
          [text-shadow:_0px_3px_1px_rgba(0,0,0,0.25)] leading-[53px] pb-3 sm:text-[40px]" id={style.text}>Reproductor de musica online</p>
          <ReproductoMusic />
          <PlayListMusic></PlayListMusic>
        </div>
      </div>
        </>
     );
}

export default ReproductorMusicaPage;