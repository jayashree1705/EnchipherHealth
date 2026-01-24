import { useState } from "react";
function Toogle(){
    const [show,setShow]=useState(true);
    return(
        <>
        <button onClick={()=>setShow(!show)}>
            show or hide
        </button>
        {show && <h3>Hello</h3>}
        </>
    )};
export default Toogle;