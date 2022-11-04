import React from 'react';
import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"
import "./About.css"

const About = () => {
    return (
        <div className='about my-3'>
            <div className='image-card about-card'>
                <img  src={person} alt="" />
                <img className=' w-50 zed-index'  src={parts} alt="" />
            </div>
            <div className='about-card ms-5'>
                <h1>About Us</h1>
                <h3>We are qualified & of experience on this field.</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni magnam aspernatur quas architecto accusamus laudantium cum vel quasi consequatur minima ut, tempora praesentium ex in ullam omnis et minus numquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat placeat dolore repellendus, ut totam ipsa dignissimos aut dolor doloremque?</p>
                <button className="btn btn-primary">GET MORE INFO</button>
            </div>
        </div>
    );
};

export default About;