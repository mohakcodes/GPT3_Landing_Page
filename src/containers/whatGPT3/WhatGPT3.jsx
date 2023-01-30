import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT3 is a non-profit artificial intelligence research company. Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Your AI friend capable of having conversations and suggesting anything you need." />
      <Feature title="Knowledge Base" text="It is important to have a leading research institution which can prioritize a good outcome for all over its own self-interest which is look over by GPT3" />
      <Feature title="Consumers" text="Many accounts are already using GPT3 to extend their creativity and speed up their workflows, generating over 10,000 images a day. Get started with this same technology in a matter of minutes." />
    </div>
  </div>
);

export default WhatGPT3
