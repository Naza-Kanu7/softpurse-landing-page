import React from 'react'
import './Download.css'
import DownloadPhoneImg from './DownloadPhoneImg.png'
import QrCode from './QrCode.png'
import GooglePlay from './GooglePlay.png'

function Download() {
  return (
    <div className='download-section-container' id='download'>
        <div className='download-flex'>
            <div className='download-image'>
                <img src={DownloadPhoneImg} alt='DownloadPhoneImg'/>
            </div>
            <div className='download-texts'>
                <h2>Download now and enjoy all the Amazing Features</h2>
                <div className='qr-code'>
                    <img src={QrCode} alt='QrCode' />
                </div>
                <div className='google-play'>

                </div>
                <img src={GooglePlay} alt='GooglePlay' />
            </div>
        </div>
    </div>
  )
}

export default Download