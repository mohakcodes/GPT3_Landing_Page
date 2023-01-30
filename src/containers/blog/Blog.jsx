import React from 'react'
import Article from '../../components/article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          We Are Blogging All The Variations Of This Site
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL = {blog01} date = "Feb 04 , 2023" title = "GPT3 and OpenAI is Future! Let Us Find How " />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgURL = {blog02} date = "Feb 02 , 2023" title = "How GPT3 and OpenAI will affect millions of users" />
          <Article imgURL = {blog03} date = "Jan 18 , 2023" title = "GPT3 usage in daily activities and core languages " />
          <Article imgURL = {blog04} date = "Jan 01 , 2023" title = "School and College Projects by using GPT3 " />
          <Article imgURL = {blog05} date = "Dec 28 , 2022" title = "Can GPT3 take over human works?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
