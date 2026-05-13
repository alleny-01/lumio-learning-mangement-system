import { createContext } from "react";

const LMSContext = createContext<any>(null);

function LMSProvider({ children} : any)  {
    return (
        <LMSContext.Provider value>
                {children}
        </LMSContext.Provider>
    )
}

export default LMSProvider;