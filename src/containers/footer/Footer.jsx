import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Step Into The Future Before Others Now!
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p> Request Early Access </p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Chat GPT3 AI, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Policy</p>
          <p>Rules</p>
          <p>Description</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Chat GPT3 Team</p>
          <p>Customer Support</p>
          <p>097-8889033</p>
          <p>info@gptworld.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>
          © 2023 GPT-3. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
