function ClickFun()
{
    function btn()
    {
    console.log("Btn clicked");
    alert("you clicked btn")
    }
    return(
        <>
            <button onClick={btn}>
                click
            </button>
        </>
    )
}
export default ClickFun;