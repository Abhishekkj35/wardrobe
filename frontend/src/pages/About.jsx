import React from 'react'
import Title from "../components/Title"
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto ducimus, iure asperiores tempore laboriosam quibusdam. Soluta sint hic temporibus quod vitae officia odit nemo veniam. Voluptatum perferendis quo quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit totam id quo voluptatem ullam, maxime itaque vel earum maiores, sequi sunt atque saepe dolore voluptatibus eum praesentium ex fugiat.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum necessitatibus illum perferendis, accusamus natus alias, harum eveniet iusto culpa accusantium facere mollitia ipsum ducimus. Excepturi rerum non nostrum esse aliquam.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque quae porro, rem earum tenetur id, quo fugiat ducimus eligendi laborum ipsum. Quae, numquam. Exercitationem animi architecto saepe quas impedit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque quae porro, rem earum tenetur id, quo fugiat ducimus eligendi laborum ipsum. Quae, numquam. Exercitationem animi architecto saepe quas impedit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque quae porro, rem earum tenetur id, quo fugiat ducimus eligendi laborum ipsum. Quae, numquam. Exercitationem animi architecto saepe quas impedit.</p>
         </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
