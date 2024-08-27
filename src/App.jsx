import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Cart from './components/Cart/Cart'
import Categories from './components/categories/categories'
import Notfound from './components/Notfound/Notfound'
import Products from './components/Products/products'
import Login from './components/Login/Login'
import Register from './components/Register/Rgister'
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import UserContextProvider from "./components/Context/UserContext"
import Protect from './components/ptoctect/protect'
import Productdetails from './components/productdetails/Productdetails'
import UserContextprovider from './components/Context/Usercart'
import  { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout/Checkout'
  

let query=new QueryClient() ;

let x =createBrowserRouter([
  {path:"",element:<Layout />,children:[
    {index:true,element:<Protect><Home/></Protect>},
    {path:"brands",element:<Protect><Brands/></Protect>},
    {path:"categories",element:<Protect><Categories/></Protect>},
    {path:"Cart",element:<Protect><Cart/></Protect>},
    {path:"Products",element:<Protect><Products/></Protect>},
    {path:"login",element:<Login/>},
    {path:"Register",element:<Register/>},
    {path:"forgetpassword",element:<Protect><ForgetPassword/></Protect>},
    {path:"checkout",element:<Protect><Checkout /></Protect>},
    {path:"Productdetails/:id/:category",element:<Protect><Productdetails /></Protect>},
    {path:"/products/Productdetails/:id/:category",element:<Protect><Productdetails /></Protect>},
    {path:"*",element:<Notfound/>},
  ]}
])
function App() {
  return (
    <>
    <UserContextProvider>
    <QueryClientProvider client={query}>
      <UserContextprovider>
        <RouterProvider router={x}></RouterProvider>
        <Toaster/>
      </UserContextprovider>
    </QueryClientProvider>
    </UserContextProvider>
    
    </>
  )
}

export default App
