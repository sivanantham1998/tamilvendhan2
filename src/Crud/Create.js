import axios from "axios";
import { useState } from "react";
import Display from "./Display";

export default function Create()
{
    let [name,setname]=useState("");
    let [age,setage]=useState(0)
    let api="https://658e814e2871a9866e7949b3.mockapi.io/Tamilvendhan"
    
    function save(e)
   {
        e.preventDefault();
        axios.post(api,{  username:name , userage:age  })
        alert("Data saved successfully")
        window.location.reload()
   }
    return(
        <>
            <h1>
                Crud Application
            </h1>

            <form onSubmit={save}>
                <input type="text" placeholder="Enter ur name" value={name} onChange={
                    (e)=>setname(e.target.value)
                }/>
                <input type="number" placeholder="Enter ur age" value={age} onChange={
                    (e)=>setage(e.target.value)
                }/>
                <input type="submit" value="save" />
            </form>


            <Display />
        </>
    )
}