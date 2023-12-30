import { Link, useNavigate } from "react-router-dom";
import "./First.css"
function First()
{
    let a=10,b=12,c=a+b;
    let navi=useNavigate()
    return(
        <>
            <h1>
                Welcome to First page
            </h1>

            <li>
                The a value is : {a}  <br />
                The B value is : {b} <br />
                The Answer is : {c} 
            </li>

            <br />

            <span class="material-symbols-outlined" 
            onClick={function()
            {
                navi('/reactForms')
            }}>
                forms_add_on
            </span>

            <Link to="/mapfunction">
                <p>
                    Goto Map
                </p>
            </Link>

            <Link to="/clickVal">
                    BtnVal
            </Link>
            <br />
            <Link to="/usereduce">
                Usereducer hook
            </Link>

            <br />

            <Link to="/memohook" >
                <h3>
                    Usememo
                </h3>
            </Link>

            <Link to="/refHook">
                refHook
            </Link>

            <button onClick={
                ()=>{
                        navi('/create')
                }
            }>
                Create
            </button>
        </>
    )
}
export default First;