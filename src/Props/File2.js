function File2(val)
{
    let {count}=val,{details}=val;

    return(
        <>  
            <h2>File 2 </h2>

            <p>The value is , {count}</p>

            <li>
                Your name is : {details.name} 
            </li>
            <li>
                Qualification is 
                <ol>
                    <li>Ug: {details.qualification.ug}</li>
                    <li>Pg : {details.qualification.pg}</li>
                </ol>
            </li>
        </>
    )
}
export default File2;