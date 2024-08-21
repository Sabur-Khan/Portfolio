import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './pages/Blog/Blog.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Rootlayouts from './component/Layout/RootLayouts.jsx';
import BlogContent from './pages/BlogContent/BlogContent.jsx';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";

// React Router Path Code
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts/>}>
      
      <Route index element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/BlogContent' element={<BlogContent/>} />

    </Route>
   
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
