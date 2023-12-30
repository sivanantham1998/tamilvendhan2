import { useState } from "react";
import { Link } from "react-router-dom";

function ReactForm()
{
    let [name,setname]=useState("")
    return(
        <>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
            

            <h1>
                user typed value is : {name}
            </h1>
        <Link to="/">
        <span class="material-symbols-outlined">
                close
            </span>
        </Link>
        </>
    )
}
export default ReactForm;