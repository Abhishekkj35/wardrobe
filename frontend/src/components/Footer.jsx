import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200 px-8'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
      <h1 className='text-2xl my-8'><span className='text-4xl'>W</span>ardrobe<span className='text-5xl'>.</span></h1>
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum velit modi voluptates optio, qui ipsum error quasi excepturi accusantium facilis officia doloremque quae officiis quas repudiandae dicta ab ut voluptatum.</p>
      </div> 

      <div>
        <p className='text-xl font-medium my-12'>Company</p>
        <ul>
          <li className='flex flex-col gap- text-gray-600'>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className='text-xl font-medium my-12'>GET IN TOUCH</p>
        <ul className='flex flex-col gap- text-gray-600'>
           <li>+1-212-456-7890</li>
           <li>contact@wardrobe.com</li>
        </ul>
      </div>
      </div>
      
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright-2024 Wardrobe.com - All Rights Reserved</p>
      </div>
  </div>
  )
}

export default Footer
