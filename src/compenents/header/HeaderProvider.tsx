"use client"
import {Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState} from "react";
import {createContext} from "react";


interface IHeaderProvider {
    modalActive: boolean,
    setModalActive: Dispatch<SetStateAction<boolean>>;
}

let initialValue: IHeaderProvider = {
    modalActive: false,
    setModalActive: (newValue) => {}
};



const Context = createContext<IHeaderProvider>(initialValue);
export const useHeader = () => useContext<IHeaderProvider>(Context)

export const HeaderProvider: FC<PropsWithChildren> = ({children}) => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    return <Context.Provider value={{
        modalActive,
        setModalActive
    }}>{children}</Context.Provider>
}