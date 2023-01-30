import React from 'react'
import People from "../../assets/people.png"
import Ai from "../../assets/ai.png"
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Build something out of the world with GPT-3 OpenAI
        </h1>
        <p>GPT-3 is a non-profit artificial intelligence research company. Our goal is to advance digital intelligence
          in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return.
          Since our research is free from financial obligations, we can better focus on a positive human impact.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={People} alt="people" />
          <p>1600 people requested access within last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={Ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
