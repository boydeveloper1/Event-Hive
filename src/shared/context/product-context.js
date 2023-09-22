// import { createContext, useState, useEffect } from "react";

// import { useHttpClient } from "../../shared/hooks/http-hook";

// export const ProductsContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const { sendRequest } = useHttpClient();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const responseData = await sendRequest(
//           process.env.REACT_APP_BACKEND_URL + "/events"
//         );

//         setProducts(responseData.events);
//       } catch (error) {}
//     };
//     fetchEvents();
//   }, [sendRequest]);

//   return (
//     <ProductsContext.Provider value={products}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };
