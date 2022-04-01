import { createContext } from "react";

export interface AppContext{
    token:any;
    productView:any;
    quantity:any;
    product:any;
    storeName:any;
    viewStock:any;
    setProductView:(productView:any)=>void;
    setQuantity:(quantity:any)=>void;
    setProduct:(product:any)=>void;
    setStoreName:(storeName:any)=>void;
    setViewStock:(viewStock:any)=>void;
    setToken:(yoken:any)=>void;
} 

export const UserContext=createContext<AppContext>({
    token:"",
    setToken : () => {},
    productView:"",
    setProductView : () => {},
    quantity:"0",
    setQuantity : () => {},
    product:"",
    setProduct : () => {},
    storeName:"",
    setStoreName:()=>{},
    viewStock:"",
    setViewStock: ()=>{},
});