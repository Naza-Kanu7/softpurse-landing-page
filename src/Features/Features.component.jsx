import React from 'react'
import './Features.css'
import FirstFeatureImg from './FirstFeatureImg.png'
import SecondFeatureImg from './SecondFeatureImg.png'
import ThirdFeatureImg from './ThirdFeatureImg.png'


function Features() {
  return (
    <section className='features-container' id='features'>
        <div className='features-heading-container'>
            <h2>Amazing Features</h2>
            <p>Packed with amazing features just for you</p>
        </div>
        <div className='first-feature-container'>
            <div className='first-feature-img-container'>
                <img src={FirstFeatureImg} alt='FirstFeatureImg' />
            </div>
            <div className='first-feature-text-container'>
                {/* <h1>Less Stress, Get Your Needs Sorted Out At Your Comfort</h1> */}
                {/* <p>Get connected to Skilled Artisans around you instantly with a tap of a button at your comfort.</p> */}
                <h1>...Fix the Problem with Ease!</h1>
                <p>Connect with a Skilled Artisan around you instantly with a tap of a button at your comfort.</p>
            </div>
        </div>
        <div className='first-feature-container second-feature'>
            <div className='first-feature-img-container second-feature-img'>
                <img src={SecondFeatureImg} alt='FirstFeatureImg' />
            </div>
            <div className='first-feature-text-container second-feature-text'>
                <h1>Showcase Your Skills:</h1>
                {/* <p>Showcase your skills and expertise to attract new clients and build a successful business on our platform.</p> */}
                <p>You have the Skill, we have the Platform!</p>
                {/* <br/> */}
                <p>Let's tell the world about your amazing skill.</p>
                <p>Sign up now.</p>
            </div>
        </div>
        <div className='first-feature-container'>
            <div className='first-feature-img-container'>
                <img src={ThirdFeatureImg} alt='FirstFeatureImg' />
            </div>
            <div className='first-feature-text-container'>
                {/* <p>Connect with a service provider who can fix your problem and meet your need from our intensive list of services.</p> */}
                <h1>Multiple Services at Your Fingertips:</h1>
                <p>Choose from our multiple services and get connected to a professional to meet your specific demand.</p>
            </div>
        </div>
    </section>
  )
}

export default Features