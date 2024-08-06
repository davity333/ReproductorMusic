import { Children } from "react";

function Box({children}) {
    return ( 
        <>
        <div className="bg-[#5e5b5b] ">
        {children}
        </div>
        </>

     );
}
export default Box;

