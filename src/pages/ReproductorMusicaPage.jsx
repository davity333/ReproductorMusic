import PlayListMusic from "../components/organism/PlayListMusic";
import ReproductoMusic from "../components/organism/ReproductorMusic";

function ReproductorMusicaPage() {
    return ( 
        <>
        <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <ReproductoMusic />
          <PlayListMusic></PlayListMusic>
        </div>
      </div>
        </>
     );
}

export default ReproductorMusicaPage;