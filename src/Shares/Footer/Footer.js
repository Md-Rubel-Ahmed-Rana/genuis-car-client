import React from 'react';
import Logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="d-flex justify-content-between p-5 bg-dark">
            <div>
                <img src={Logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since </p>
            </div>
            <div className='d-flex flex-column'>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div className='d-flex flex-column'>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div className='d-flex flex-column'>
                <span>Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;