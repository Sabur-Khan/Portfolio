import React from 'react'
import Banner from '../../component/Banner/Banner'
import Container from '../../component/Container/Container'
import Projects from '../../component/MyProjects/Projects'
import MyBlog from '../../component/MyBlog/MyBlog'
import Contacts from '../../component/Contacts/Contacts'


const Home = () => {
  return (
    <div>

      <Container>
        <Banner/>
        <Projects/>
        <MyBlog/>
        <Contacts/>
      </Container>
    </div>
  )
}

export default Home