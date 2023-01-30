import React from 'react'
import { Feature } from '../../components';
import './features.css'

const featuresData = [
  {
    title: 'Communication in conversational format',
    text: 'Since our research is free from financial obligations, we can better focus on a human conversational impact.',
  },
  {
    title: 'Responds to everything',
    text: 'Chatbot that has been trained to engage in conversation. The dialogue model, according to OpenAI, enables GPT3 to  respond to all types of writing, mathematical solutions, and stories',
  },
  {
    title: 'Human Replacement',
    text: 'GPT3 has demonstrated the ability to build complex Python code and compose college-level essays in response to a prompt, raising concerns that such technology may probably replace human workers like journalists or programmers.',
  },
  {
    title: 'Alternative to Search Engines',
    text: 'By offering customers with more than simply links to browse through, it shifts usage of search engines',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">
            The Future Is Now With GPT3 , Step Into It And Make It Happen
          </h1>
          <p>
            Request Early Access
          </p>
        </div>
        <div className='gpt3__features-container'>
            {
              featuresData.map((item,index)=>(
                <Feature title={item.title} text={item.text} key={item.title + index}/>
              ))
            }
          </div>
    </div>
  )
}

export default Features
