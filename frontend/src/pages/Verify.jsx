import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom/dist/umd/react-router-dom.development';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext'
import axios from "axios"

const Verify = () => {

  const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    const {navigate,token,setCartItems,backendUrl}=useContext(ShopContext)
   

  const verifyPayment = async () => {
      try {
        if (!token) {
          return null
        }
        const response=await axios.post(backendUrl+"/api/order/verify",{success,orderId},{headers:{token}})
        if (response.data.success) {
          setCartItems({})
          navigate("/orders");
        }else{
            navigate("/cart")
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }

    useEffect(()=>{
        verifyPayment();
    },[token])

  return (
    <div>
      
    </div>
  )
}

export default Verify
