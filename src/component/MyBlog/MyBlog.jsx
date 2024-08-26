import React from "react";
import MyBlogCard from "../MyBlogCard/MyBlogCard";
import blogData from "../../blogData/blogData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyBlog = () => {
  console.log(blogData);
  return (
    <div className="lg:px-2 md:px-4 sm:px-5 px-5">
      <div className=" text-center mb-16">
        <h2 className="relative before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[10%] font-Montserrat text-white pb-6 font-medium text-3xl">
          My <span className=" text-[#e9af1d]">Blogs</span>
        </h2>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {blogData.map((blogData) => (
          <MyBlogCard
            key={blogData.id}
            images={blogData.images}
            title={blogData.title}
            shortBlogOne={blogData.shortBlogOne}
            shortBlogTwo={blogData.shortBlogTwo}
            shortBlogThree={blogData.shortBlogThree}
            shortBlogFour={blogData.shortBlogFour}
            shortBlogFive={blogData.shortBlogFive}
            shortBlogSix={blogData.shortBlogSix}
            blogInfoOne={blogData.blogInfoOne}
            blogInfoTwo={blogData.blogInfoTwo}
            blogInfoThree={blogData.blogInfoThree}
            blogInfoFour={blogData.blogInfoFour}
            blogInfoFive={blogData.blogInfoFive}
            blogInfoSix={blogData.blogInfoSix}
          />
        ))}
      </div>

      <div className="my-16 ">
        <h1 className="text-white font-Montserrat text-2xl font-bold mb-10">
          Recent Blog
        </h1>

        <Carousel 
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className=" border mx-2 ">
            <img
              className="w-full"
              src="https://i.postimg.cc/P5Z0wx4r/blog6.jpg"
              alt=""
            />
            <h2 className="text-white text-left my-5 font-sans font-bold text-xl px-2 ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-left font-sans font-normal text-base px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non, praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, expedita?
            </p>
            <button className="bg-white m-2 py-2 rounded px-3">Redmore</button>
          </div>
          <div className=" border mx-2 ">
            <img
              className="w-full"
              src="https://i.postimg.cc/P5Z0wx4r/blog6.jpg"
              alt=""
            />
            <h2 className="text-white text-left my-5 font-sans font-bold text-xl px-2 ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-left font-sans font-normal text-base px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non, praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, expedita?
            </p>
            <button className="bg-white m-2 py-2 rounded px-3">Redmore</button>
          </div>
          <div className=" border mx-2 ">
            <img
              className="w-full"
              src="https://i.postimg.cc/P5Z0wx4r/blog6.jpg"
              alt=""
            />
            <h2 className="text-white text-left my-5 font-sans font-bold text-xl px-2 ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-left font-sans font-normal text-base px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non, praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, expedita?
            </p>
            <button className="bg-white m-2 py-2 rounded px-3">Redmore</button>
          </div>
          <div className=" border mx-2 ">
            <img
              className="w-full"
              src="https://i.postimg.cc/P5Z0wx4r/blog6.jpg"
              alt=""
            />
            <h2 className="text-white text-left my-5 font-sans font-bold text-xl px-2 ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-left font-sans font-normal text-base px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non, praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, expedita?
            </p>
            <button className="bg-white m-2 py-2 rounded px-3">Redmore</button>
          </div>
          <div className=" border mx-2 ">
            <img
              className="w-full"
              src="https://i.postimg.cc/P5Z0wx4r/blog6.jpg"
              alt=""
            />
            <h2 className="text-white text-left my-5 font-sans font-bold text-xl px-2 ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-left font-sans font-normal text-base px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non, praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, expedita?
            </p>
            <button className="bg-white m-2 py-2 rounded px-3">Redmore</button>
          </div>
          <div className=" border mx-2 mb-10">
            <img
              className="w-full"
              src="https://i.postimg.cc/P5Z0wx4r/blog6.jpg"
              alt=""
            />
            <h2 className="text-white text-left my-5 font-sans font-bold text-xl px-2 ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-left font-sans font-normal text-base px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sit? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non, praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, expedita?
            </p>
            <button className="bg-white m-2 py-2 rounded px-3">Redmore</button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MyBlog;
