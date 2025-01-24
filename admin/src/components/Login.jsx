import React, { useState } from 'react'
import { backendUrl } from '../App';
import axios from "axios"
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  
    const onSubmitHandler = async (e) => {
      try {
        e.preventDefault();
        const response = await axios.post(backendUrl+'/api/user/admin', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
  return (
  
      <div className='flex flex-col items-center py-10'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>   
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      
      </div>
      <input type='email' onChange={(e)=>setEmail(e.target.value)} className='w-full px-3 py-4 border border-gray-800' placeholder='Email' required />
      <input type='password' onChange={(e)=>setPassword(e.target.value)} className='w-full px-3 py-4 border border-gray-800' placeholder='Password' required />
      <button className='bg-black text-white font-light px-8 py-2 mt-4' >Login</button>
    </form> 
      </div>
  
  )
}

export default Login
