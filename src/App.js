import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import First from "./Components/First"
import ReactForm from "./Form/ReactForm"
import Map from "./map function/Map"
import ValForm from "./BtnClickValue/ValForm"
import Reduce from "./Usereducer/Reduce"
import Memo from "./usememo/Memo"
import Ref from "./USeref/Ref"
import Create from "./Crud/Create"
import Update from "./Crud/Update"
export default function App()
{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}/>
          <Route path="/reactForms" element={<ReactForm></ReactForm>}/>
          <Route path="/mapfunction" element={<Map/>}/>
          <Route path="/clickVal" element={<ValForm/>}/>
          <Route path="/usereduce" element={<Reduce/>}/>
          <Route path="/memohook" element={<Memo/>}/>
          <Route path="/refHook" element={<Ref/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}