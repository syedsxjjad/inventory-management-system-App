import { createContext } from "react";

export interface AppContext{
    productView:any;
    setProductView:(productView:any)=>void;
} 


export const UserContext=createContext<AppContext>({
    productView:"",
    setProductView : () => {},
});