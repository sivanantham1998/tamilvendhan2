import { useEffect, useState } from "react";

function Effect()
{
    let [num,setnum]=useState(0)

    function example()
    {
        // console.log("hello");
        setnum(num+1)
    }

    useEffect(function()
    {
        document.title="btn clicked:"+num;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    },[num])
    return(
        <>
            <h1>UseEffect Hook</h1>

            <button onClick={example}> Click</button>
        </>
    )
}

export default Effect;