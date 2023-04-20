import React from 'react'
import PhoneImage from './phoneimage.png'
import GooglePlay from './googleplay.png'
import BannerImg from './BannerImg.png'
import './Banner.css'

function BannerComponent() {
  return (
    <div className='firstsection-container'>
      <div className='firstsection-texts'>
        {/* <h2>Providing solutions and enriching you</h2> */}
        <h2>...Solutions to your Doorstep and More Money to Your Purse</h2>
        <p>The best app to increase your productivity, giving your craft online presence</p>
        <div className='firstsection-buttons'>
          <a href="#features"><button>LEARN MORE</button></a>
          <img src={GooglePlay} alt='Download from google play' />
        </div>

      </div>
      <div className='firstsection-image'>
        <img src={BannerImg} alt='appscreen' />
      </div>
    </div>
  )
}

export default BannerComponent