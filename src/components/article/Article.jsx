import React from 'react'
import './article.css'

const Article = ({imgURL , date , title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt__blog-container_article-image">
        <img src={imgURL} alt="blog" style={{width:"100%" , height:"100%"}}/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
} 

export default Article
