import { useState } from "react";

function Toggle()
{
    let [a,b]=useState(false);

    function myfun()
    {
        b(!a)
    }
    return(
        <>
            <h1>Toggle</h1>

            <button onClick={myfun}>Toggle</button>

            {a && <img src="https://images.pexels.com/photos/3777200/pexels-photo-3777200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
        </>
    )
}
export default Toggle;