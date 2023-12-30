import { useState } from "react";

function Counter()
{
    let [num,setnum]=useState(0);
    function add()
    {
        setnum(num+1)
    }
    function minus()
    {
        setnum(num-1)
    }
    function reset()
    {
        setnum(0)
    }
    return(
        <>
            <h1>
                Usestate counting app
            </h1>
            <h3>
                value is : {num}
            </h3>
            <button onClick={add}>
                ADD
            </button>
            <button onClick={minus}>
                MINUS
            </button>
            <button onClick={reset}>Reset</button>
        </>
    )
}
export default Counter;