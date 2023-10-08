import './contact.css'
import { FaEnvelope, FaPhone } from "react-icons/fa";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () =>{
    // const form = useRef();
    
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_70zbqwz', 'template_7fzjexl', form.current, 'jXjEIFp2QgXaQac3D')
    //     .then((result) => {
    //         console.log(result.text);
    //         Alert("your message send");
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
    return(
        <>
            <div className="contact" id="con">
                <h1 data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">contact us</h1>
                <div className="container content">
                    <form>
                        <input className='main-input' type='text' name='name' placeholder='Your Name' required data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000"></input>
                        <input className='main-input' type='email' name='email' placeholder='Your Email' required data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000"></input>
                        <textarea className='main-input' name="message" placeholder='Your Message' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000"></textarea>
                        <input type='submit' value='Send Message'></input>
                    </form>
                    <div className="info">
                        <h3 data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">get in touch</h3>
                        <span data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000"> <FaPhone style={{color: 'var(--main-color)'}}/> +212 641578208</span>
                        <span data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000"> <FaEnvelope style={{color: 'var(--main-color)'}}/> ayoubchbourk1234@gmail.com</span>
                        <h3 data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">where we are</h3>
                        <address data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Awesome Address<br></br>tighmi, tiznit <br></br>morocco</address>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact