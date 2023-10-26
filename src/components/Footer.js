import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={
                        {color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>Dholka, Ahmedabad</p>
                    <p>Gujarat</p>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={20} style={
                        {color:"#fff",marginRight:"2rem"}}/>
                9012345678
                </h4>
                </div>
                <div className="email">
                <h4>
                <FaMailBulk size={20} style={
                        {color:"#fff",marginRight:"2rem"}}/>
                        yashvi.patel@gmail.com
                </h4>
                </div>
                
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p> This is Yashvi patel. Software Engineer .I enjoy discussimg new projects and design challenges.</p>
            <div className="social">
            <FaFacebook size={20} style={
                {color:"#fff",marginRight:"1rem"}}/>         
            <FaTwitter size={20} style={
                {color:"#fff",marginRight:"1rem"}}/>  
            <FaLinkedin size={20} style={
                {color:"#fff",marginRight:"1rem"}}/>  
            
            </div>          
            </div>
        </div>
    </div>
  )
}

export default Footer