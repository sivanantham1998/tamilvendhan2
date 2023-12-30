import { useReducer } from "react"
function redu(a,action)
{
    switch(action.type)
    {
        case "+":
            return {count:a.count+1};
        case "-":
            return {count : a.count -1 };
        case "reset":
            return { count: 0 };
        default:
            return "error"
    }
}
export default function Reduce()
{
    let [a,b]=useReducer(redu,{ count : 0 })
    return(
        <>
                <h1>
                    Value is : {a.count}
                </h1>

                <button onClick={
                    ()=>{
                        b({type: "+"})
                    }
                }>Add</button>


                <button onClick={
                    ()=>{
                        b({type:"-"})
                    }
                }>
                    Less
                </button>

                <button onClick={
                    ()=>{
                        b({type:"reset"})
                    }
                }>
                    reset
                </button>
        </>
    )
}