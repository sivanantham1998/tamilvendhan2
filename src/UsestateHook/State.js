import { useState } from "react";

function State()
{
    let [a,b]=useState('tamilvendhan');

    function use()
    {
        let name=a.toUpperCase();
        b(name)
    }
    return(
        <>
            <h1>
                Usestate
            </h1>
            <h3>
                Hello ,Mr. {a}
            </h3>
            <button onClick={use}>CLick</button>
        </>
    )
}
export default State;