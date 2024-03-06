"use client";
import { FC, ReactNode } from "react";
import QueryProvider from './QueryProvider.tsx'
import { Provider } from "react-redux";
import store from "../store/store.ts";
// import ToastProvider from "./ToastProvider.tsx";
import { ThemeProvider } from "@material-tailwind/react";
interface IMain {
  children: ReactNode;
}
const MainProvider: FC<IMain> = ({ children }) => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <QueryProvider>
        {children}
        </QueryProvider>
      </Provider>
    </ThemeProvider>
  );
};
export default MainProvider;
