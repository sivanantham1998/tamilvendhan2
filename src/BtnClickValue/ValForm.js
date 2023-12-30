import { useState } from "react"

export default function ValForm()
{
    let [name,setname]=useState("")
    let [view,setview]=useState([])
    function display()
    {
        setview( [...view,name] )  // spread operator
        setname( " " )
    }
    return(
        <>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
            <button onClick={display}>Click</button>

            <ul>
                {view.map((s)=>(
                    <li>
                        {s}
                    </li>
                ))}
            </ul>
        </>
    )
}