import { useMemo, useState } from "react"

export default function Memo()
{
    let [num,setnum]=useState(0)

    function calVal()
    {
        return num * 1236547896354557;
    }

    console.log(calVal());

    let memoVal=useMemo( ()=>calVal(), [num])
    return(
        <>
            <h1>
                The Initial value is : {num}  <br />
                The memo value : {memoVal}
            </h1>
            <button onClick={
                ()=>{
                    setnum(num+1)
                }
            }>Click</button>
        </>
    )
}