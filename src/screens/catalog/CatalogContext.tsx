"use client"
import {Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState} from "react";
import {createContext} from "react";


interface ICatalogProvider {
    mapActive: boolean,
    setMapActive: Dispatch<SetStateAction<boolean>>;
}

let initialValue: ICatalogProvider = {
    mapActive: false,
    setMapActive: (newValue) => {}
};



const Context = createContext(initialValue);
export const useCatalog = () => useContext(Context)

export const CatalogProvider: FC<PropsWithChildren> = ({children}) => {
    const [mapActive, setMapActive] = useState<boolean>(false);

    return <Context.Provider value={{
        mapActive,
        setMapActive
    }}>{children}</Context.Provider>
}