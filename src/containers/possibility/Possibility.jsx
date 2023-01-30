import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination</h1>
        <p>Chatbot that has been trained to engage in conversation. The dialogue model, according to OpenAI, enables GPT3 to  respond to all types of writing, mathematical solutions, and stories.
          By offering customers with more than simply links to browse through, it could fundamentally alter how people use search engines by delivering answers to complex problems and problems.
          It is not just a good debugging companion but it can also fix the bug when you are asking a question.
        </p>
        <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
};

export default Possibility
