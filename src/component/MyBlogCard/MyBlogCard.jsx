import { Link } from 'react-router-dom';
import React from 'react'
import BlogContent from '../../pages/BlogContent/BlogContent';

const MyBlogCard = (props) => {
  return (
    <div className='relative h-[600px]'>
      <div key={props.id} className='border border-[#1f498a] h-full hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2'>
        {
         props.images && <img src={props.images} alt="blog-img" />
        }
        <div className='py-2'>
          <div className='px-4 py-4'>
            {
              props.title && <h1 className='relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute capitalize after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px] py-2'>{props.title}</h1>
            }
            {
              props.blogInfo && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.blogInfo}</p>
            }
          </div>

          <div className='px-4 py-1'>
            <ul className='flex justify-between items-center'>
              <Link to='/BlogContent' className='text-white transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2'>Read Details</Link>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyBlogCard
