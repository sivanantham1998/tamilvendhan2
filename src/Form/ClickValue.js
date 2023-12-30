import { useState } from "react";

function ClickValue()
{
    let [number,setnumber]=useState(0)
    function eventHandle(e)
    {
        let num=e.target.name;
        setnumber(num)
    }
    return(
        <>
            <input type="number" value={number}/>

            <button name="1" onClick={eventHandle}>1</button>
        </>
    )
}
export default ClickValue;