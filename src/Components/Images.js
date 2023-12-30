import logo512 from "../logo512.png";
import flower from "../flowers-276014_640.jpg"
function Images()
{
    return(
        <>
        <h1>Thsi is sample heading tag</h1>
            <h2>Images</h2>
            <img src={logo512} height="100px"/>
            <img src={flower} width="50px" />
        </>
    )
}
export default Images;