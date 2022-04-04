import { createContext } from "react";

export interface AppContext {
  token: any;
  productView: any;
  stockQuantity: any;
  stockProduct: any;
  storeName: any;
  viewStock: any;
  salesProduct: any;
  totalSales: any;
  saleQuantity: any;
  saleDate: any;
  saleStoreName: any;
  viewSales: any;
  setViewSales: (viewSales: any) => void;
  setSaleStoreName: (saleStoreName: any) => void;
  setSaleDate: (saleDat: any) => void;
  SetSaleQuantity: (saleQuantity: any) => void;
  setProductView: (productView: any) => void;
  setStockQuantity: (quantity: any) => void;
  setStockProduct: (product: any) => void;
  setStoreName: (storeName: any) => void;
  setViewStock: (viewStock: any) => void;
  setToken: (token: any) => void;
  setTotalSales: (totaSales: any) => void;
  setSalesProduct: (salesProduct: any) => void;
}

export const UserContext = createContext<AppContext>({
  salesProduct: "",
  setSalesProduct: () => {},
  viewSales: "",
  setViewSales: () => {},
  saleStoreName: "",
  setSaleStoreName: () => {},
  saleDate: "",
  setSaleDate: () => {},
  saleQuantity: "",
  SetSaleQuantity: () => {},
  totalSales: "",
  setTotalSales: () => {},
  token: "",
  setToken: () => {},
  productView: "",
  setProductView: () => {},
  stockQuantity: "",
  setStockQuantity: () => {},
  stockProduct: "",
  setStockProduct: () => {},
  storeName: "",
  setStoreName: () => {},
  viewStock: "",
  setViewStock: () => {},
});
