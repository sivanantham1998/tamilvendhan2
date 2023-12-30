import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Update()
{
    let[id,setid]=useState(0)
    let [name,setname]=useState("");
    let [age,setage]=useState(0)
    let api="https://658e814e2871a9866e7949b3.mockapi.io/Tamilvendhan"
    let navi=useNavigate()
    function save(e)
    {
        e.preventDefault();
        axios.put(`${api}/${id}`,{username:name,userage:age});
        alert("data updated!!!")
        navi("/create")
    }

    useEffect(()=>{
        setid(localStorage.getItem("id"));
        setname(localStorage.getItem("username"));
        setage(localStorage.getItem("userage"))
    },[])
    return(
        <>
        <h1>
            Update your data
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
        </>
    )
}