import React from 'react'
import Container from '../../component/Container/Container'
import MyBlog from '../../component/MyBlog/MyBlog'
const Blog = () => {
  return (
    <div>
      <Container>
        <div className=" my-[100px]">
          <MyBlog/>
        </div>
      </Container>
    </div>
  )
}

export default Blog