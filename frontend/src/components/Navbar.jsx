import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const { setShowSearch ,getCartCount,navigate,token,setToken,setCartItems} = useContext(ShopContext);

    const logout = () => {
        
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        navigate('/login')
    }
    
    return (
      
      <div className="flex items-center justify-between py-5 font-median">
         <Link to="./"><h1 className='text-2xl pb-5'><span className='text-4xl'>W</span>ardrobe<span className='text-5xl'>.</span></h1></Link>
          <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
              <NavLink to="/" className="flex flex-col items-center gap-1">
                  <p>HOME</p>
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
              </NavLink>
              <NavLink onClick={()=>setShowSearch(false)} to="/collections" className="flex flex-col items-center gap-1">
                  <p>COLLECTION</p>
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
              </NavLink>
              <NavLink to="/about" className="flex flex-col items-center gap-1">
                  <p>ABOUT</p>
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
              </NavLink>
              <NavLink to="/contact" className="flex flex-col items-center gap-1">
                  <p>CONTACT</p>
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
              </NavLink>
          </ul>
          <div className='flex items-center gap-6'>
              <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
              <div className='group relative'>
                  <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                  {/*dropdown menu*/}
                  {token &&
                      <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                              <p className='cursor-pointer hover:text-black'>My Profile</p>
                              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                          </div>
                      </div>}
              </div>
              <Link to='/cart' className='relative' alt="">
                  <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                  <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
              </Link>
              <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=""/>
          </div> 

          {/* sidebar menu small screens*/}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-60' : 'w-0'}`}>
              <div className='flex flex-col text-gray-600'>
                  <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                      <img className='h-4 ' src={assets.cross_icon} />
                      <p>Back</p>
                  </div>
                  <NavLink to='./' onClick={()=>setVisible(false)} className="py-2 pl-6 border">Home</NavLink>
                  <NavLink to='./collections' onClick={()=>setVisible(false)} className="py-2 pl-6 border">Collections</NavLink>
                  <NavLink to='./about' onClick={()=>setVisible(false)} className="py-2 pl-6 border">About</NavLink>
                  <NavLink to='./contact' onClick={()=>setVisible(false)} className="py-2 pl-6 border">Contact</NavLink>
              </div>
              
          </div>
    </div>
  )
}

export default Navbar