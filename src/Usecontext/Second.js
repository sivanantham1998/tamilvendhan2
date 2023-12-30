import react, { useContext } from "react"

import {a} from "./Maincontext"
function Second()
{
    let name=useContext(a)
    return(
        <>
            <h2>Second File</h2>
            
            <code>
                <h4>
                    {name}
                </h4>
            </code>
        </>
    )
}
export default Second;