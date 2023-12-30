import react from "react";
import First from "./First";

export const a=react.createContext("")
function Maincontext()
{
    return(
        <>
            {/* 1.create a context 
            2.provider =>values
            3.context use */}

            <a.Provider value="Tamilvendhan Msc">
                <First/>
            </a.Provider>
        </>
    )
}
export default Maincontext;