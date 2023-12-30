import { useEffect, useRef, useState } from "react"

export default function Ref()
{
    let [name,setname]=useState("");

    let count =useRef(0);
    let input=useRef("")

    useEffect(()=>{
        count.current=count.current+1;
        input.current=name;
    },[name])
    return(
        <>
            <input type="text" value={name} onChange={
                (e)=>
                {
                    setname(e.target.value)
                }
            }/>

            <h2>
                Current state: {name} <br />
                previous state : {input.current} <br />
                Rendered count : {count.current}
            </h2>

        </>
    )
}