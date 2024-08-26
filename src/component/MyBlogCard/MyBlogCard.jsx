import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

const MyBlogCard = (props) => {
  
  return (
    <div className='relative'>
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
              props.shortBlogOne && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.shortBlogOne}</p>
            }

            {
              props.shortBlogTwo && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.shortBlogTwo}</p>
            }

            {
              props.shortBlogThree && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.shortBlogThree}</p>
            }

            {
              props.shortBlogFour && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.shortBlogFour}</p>
            }

            {
              props.shortBlogFive && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.shortBlogFive}</p>
            }

            {
              props.shortBlogSix && <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.shortBlogSix}</p>
            }
          </div>


          <div className='px-4 py-1 mt-5'>
            <ul className='flex justify-between items-center'>

              {
                props.blogInfoOne && 
                <>
                  <button className="text-white cursor-pointer transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Redmore</button>
                  <dialog id="my_modal_3" className="modal bg-blue-950 rounded-lg p-6 lg:w-[45%]  md:w-[30%] w-full shadow-indigo-500/40 shadow-[5px_5px_10px_8px_rgba(109,40,217)]">

                    <div className="modal-box border-white border-2 p-3 rounded-md">

                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> <IoMdCloseCircleOutline /></button>
                      </form>

                      <h3 className="font-bold text-2xl text-white text-center py-5 ">{props.title}</h3>
                      <p className='text-white first-letter:uppercase first-letter:text-xl'>
                        {props.blogInfoOne}
                      </p>
                    </div>

                  </dialog>
                </>
              }

              {
                props.blogInfoTwo && 
                
                <>
                  <button className="text-white cursor-pointer transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2" onClick={()=>document.getElementById('my_modal_4').showModal()}>Redmore</button>
                  <dialog id="my_modal_4" className="modal bg-blue-950 rounded-lg p-6 lg:w-[40%]  md:w-[30%] w-full shadow-indigo-500/40 shadow-[5px_5px_10px_8px_rgba(109,40,217)]">

                    <div className="modal-box border-white border-2 p-3 rounded-md">

                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 white"> <IoMdCloseCircleOutline/></button>
                      </form>

                      <h3 className="font-bold text-2xl text-white text-center py-5 ">{props.title}</h3>
                      <p className="py-4 text-justify text-white font-Montserrat ">{props.blogInfoTwo}</p>
                    </div>

                  </dialog>
                </>
              }

              {
                props.blogInfoThree && 
                
                <>
                  <button className="text-white cursor-pointer transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2" onClick={()=>document.getElementById('my_modal_5').showModal()}>Redmore</button>
                  <dialog id="my_modal_5" className="modal bg-blue-950 rounded-lg text-white p-5 lg:w-[40%] md:w-[30%] w-full">

                    <div className="modal-box border-white border-2 p-3 rounded-md">

                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> <IoMdCloseCircleOutline /></button>
                      </form>

                      <h3 className="font-bold text-2xl text-white text-center py-5 ">{props.title}</h3>
                      <p className="py-4 text-justify text-white font-Montserrat">{props.blogInfoThree}</p>

                    </div>

                  </dialog>
                </>
              }

              {
                props.blogInfoFour && 
                
                <>
                  <button className="text-white cursor-pointer transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2" onClick={()=>document.getElementById('my_modal_6').showModal()}>Redmore</button>
                  <dialog id="my_modal_6" className="modal bg-blue-950 rounded-lg text-white p-5 lg:w-[40%] md:w-[30%] w-full">

                    <div className="modal-box border-white border-2 p-3 rounded-md">

                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> <IoMdCloseCircleOutline /></button>
                      </form>

                      <h3 className="font-bold text-2xl text-white text-center py-5 ">{props.title}</h3>
                      <p className="py-4 text-justify text-white font-Montserrat">{props.blogInfoFour}</p>

                    </div>

                  </dialog>
                </>
              }

              {
                props.blogInfoFive && 
               
                <>
                  <button className="text-white cursor-pointer transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2" onClick={()=>document.getElementById('my_modal_7').showModal()}>Redmore</button>
                  <dialog id="my_modal_7" className="modal bg-blue-950 rounded-lg text-white p-5 lg:w-[40%] md:w-[30%] w-full">

                    <div  className="modal-box border-white border-2 p-3 rounded-md">

                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> <IoMdCloseCircleOutline /></button>
                      </form>

                      <h3 className="font-bold text-2xl text-white text-center py-5 ">{props.title}</h3>
                      <p className="py-4 text-justify text-white font-Montserrat">{props.blogInfoFive}</p>

                    </div>

                  </dialog>
                </>
                
              }

              {
                props.blogInfoSix && 

                <>
                  <button className="text-white cursor-pointer transition-all uppercase border-[#f3c623] border-[1px] rounded-md font-Montserrat bg-transparent duration-500 hover:text-black hover:bg-[#f3c623] px-3 py-2 text-base font-bold absolute bottom-2 left-2" onClick={()=>document.getElementById('my_modal_8').showModal()}>Redmore</button>
                  <dialog id="my_modal_8" className="modal bg-blue-950 rounded-lg p-5 lg:w-[40%] md:w-[30%] w-full">

                    <div className="modal-box border-white border-2 p-3 rounded-md">

                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost bg-white fixed p-1 text-center text-red-500 rounded text-2xl"> <IoMdCloseCircleOutline/></button>
                      </form>

                      <h3 className="font-bold text-2xl text-white text-center py-5 ">{props.title}</h3>
                      <p className="py-4 text-justify text-white font-Montserrat">{props.blogInfoSix}</p>

                    </div>

                  </dialog>
                </>

              }
              
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyBlogCard
