import React from 'react';
import { UserContext } from '../contex/Context' 

export const UsersData: React.FC = (props): React.ReactElement => {
  const [productView, setProductView] = React.useState([]);


//   const [token, setToken] = React.useState<string | null>('');
//   const [isCalling, setIsCalling] = React.useState<boolean>(true);
//   React.useEffect(() => {
//     const getToken = sessionStorage.getItem('token');
//     setToken(getToken);
//   }, []);
  const userDetails = {
  productView,
  setProductView,
  };
  return <UserContext.Provider value={userDetails}>{props.children}</UserContext.Provider>;
};
