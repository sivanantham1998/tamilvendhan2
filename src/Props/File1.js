import File2 from "./File2";

function File1()
{
    let a=12;
    let obj= {
        name:'tamil',
        address:'erode',
        qualification:{
            ug:"bsc",
            pg:"MSc"
        }
    }
    return(
        <>
            <File2 count={a} details={obj}/>
        </>
    )
}
export default File1;