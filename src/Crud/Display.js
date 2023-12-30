import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Display()
{
    let [view,setview]=useState( [ ] )
    let api="https://658e814e2871a9866e7949b3.mockapi.io/Tamilvendhan"
    let navi=useNavigate()
    useEffect( ()=>{
            axios.get(api).then ((s)=>{
                setview(s.data)
            })
    } ,[ ])

    function del(a)
    {
        axios.delete(`${api}/${a}`).then(()=>{
            axios.get(api).then((s)=>{
                setview(s.data)
            })
            alert("data deleted!!!!")
        })
    }
    function ed(a,b,c)
    {
        localStorage.setItem("id",a);
        localStorage.setItem("username",b);
        localStorage.setItem("userage",c)
        navi("/edit")
    }
    return(
        <>
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>operations</th>
                </tr>
                { view.map( (data)=>(
                    <tr>
                        <td>{data.username}</td>
                        <td>{data.userage}</td>
                        <td>
                            <button 
                            onClick={
                                ()=>del(data.id)
                            }>remove</button>
                            <button
                                onClick={
                                    ()=>ed(data.id,data.username,data.userage)
                                }
                            >Update</button>
                        </td>
                    </tr>
                ) ) }
            </table>
        </>
    )
}