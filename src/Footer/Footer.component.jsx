import React from 'react'
import FooterLogo from './footerlogo.png'
import GooglePlay from './footergoogleplay.png'
import Facebook from './Facebook.png'
import Whatsapp from './Whatsapp.png'
import Instagram from './Instagram.png'
import Twitter from './Twitter.png'
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logo-container'>
                <img className='logo' src={FooterLogo}/>
                <img className='googleplay' src={GooglePlay} />
            </div>
            <div className='footer-icon-container'>
                <div>
                    <a href='https://www.facebook.com/profile.php?id=100077394650393&mibextid=ZbWKwL' target='_blank' rel="noreferrer"><img src={Facebook} alt='facebook' /></a>
                </div>
                <div>
                    <a href='https://wa.link/a78qdh' target='_blank' rel="noreferrer"><img src={Whatsapp} alt='whatsapp' /></a>
                </div>
                <div>
                    <a href='https://twitter.com/techservafrica?t=-IaMPK5wihoW6SzUJkKPqA&s=09' target='_blank' rel="noreferrer"><img src={Twitter} alt='twitter' /></a>
                </div>
                <div>
                    <a href='https://instagram.com/techservafrica?igshid=ZDdkNTZiNTM=' target='_blank' rel="noreferrer"><img src={Instagram}  alt='instagram'/></a>
                </div>
                
                
            </div>
            <div className='footer-texts'>
                <h3>Service support</h3>
                <p>softpurse123@gmail.com</p>
            </div>
            <p>Copyright &#64; SoftPurse 2023</p>
        </div>
    )
}

export default Footer