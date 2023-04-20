import React from 'react'
import './Steps.css'
import FirstStepImg from './FirstStepImg.png'
import SecondStepImg from './SecondStepImg.png'
import ThirdStepImg from './ThirdStepImg.png'

function Steps() {
  return (
    <div className='steps-container'>
      <div className='steps-heading'>
        <h2>How it works</h2>
        <p>To get started using the SoftPurse app, follow the steps Below</p>
      </div>
      <div className='steps-flex-container'>
        <div className='first-step-container'>
          <div className='first-step-number'><p>1</p></div>
          <div className='first-step-flex'>
            <div className='first-step-img-container'>
              <img src={FirstStepImg} alt='FirstStepImg'/>
            </div>
            <div className='first-step-text-container'>
              <h2>Download and Sign Up</h2>
              <p>Download SoftPurse from Google Playstore and Sign up using your phone number</p>
            </div>
          </div>
        </div>

        {/* SECOND STEP CONTAINER */}
        <div className='first-step-container'>
          <div className='first-step-number'><p>2</p></div>
          <div className='first-step-flex'>
            <div className='first-step-img-container'>
              <img src={SecondStepImg} alt='SecondStepImg'/>
            </div>
            <div className='first-step-text-container'>
              <h2>Upgrade to enjoy our extensive services</h2>
              <p>Fill out our KYC form to verify your details and gain access to book for services.</p>
            </div>
          </div>
        </div>

        {/* THIRD STEP CONTAINER */}
        <div className='first-step-container'>
          <div className='first-step-number'><p>3</p></div>
          <div className='first-step-flex'>
            <div className='first-step-img-container'>
              <img src={ThirdStepImg} alt='ThirdStepImg'/>
            </div>
            <div className='first-step-text-container'>
              <h2>Become a Service Provider</h2>
              <p>Choose the services you offer and get matched with customers in need of your services.</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Steps