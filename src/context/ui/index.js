import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
    const [showSearchBox, setShowSearchBox] = useState(false);

    const value = {
        showSearchBox, 
        setShowSearchBox
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}