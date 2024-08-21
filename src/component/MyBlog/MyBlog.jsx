import React from 'react'
import MyBlogCard from '../MyBlogCard/MyBlogCard'
import blogData from '../../blogData/blogData'
const MyBlog = () => {
  console.log(blogData);
  return (
    <div className='lg:px-2 md:px-4 sm:px-5 px-5'>
      <div className=' text-center mb-16'>
        <h2 className='relative before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[10%] font-Montserrat text-white pb-6 font-medium text-3xl'>
          My <span className=' text-[#e9af1d]'>Blogs</span> 
        </h2>
      </div>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {blogData.map(blogData=>(
            <MyBlogCard
              key={blogData.id}
              images={blogData.images}
              title={blogData.title}
              blogInfo={blogData.blogInfo}
            />
          ))}
      </div>
    </div>
  )
}

export default MyBlog