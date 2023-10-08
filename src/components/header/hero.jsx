import './hero.css'
import image1 from'../../assets/images/image1.png'
import { FaAngleUp } from "react-icons/fa6";
import { useEffect } from 'react';

const Hero = () =>{

    useEffect(()=>{
        let btn = document.querySelector('.scroll');

        window.onscroll = () => {
            if(window.scrollY >= 300){
                btn.style.display = "block";
            }else{
                btn.style.display = "none";
            }
        }
        btn.onclick =  () =>{
            window.scrollTo({
                left : 0,
                top : 0,
                behavior: "smooth"
            });
        };
    }, [])

    return(
        <>
          <div className="hero">
            <div className="container">
                <div className="text" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <h1>Premium IPTV Subscription</h1>
                    <h2>Start Watching Now</h2>
                    <a href="#pricing"><button>Pricing Table</button></a>
                </div>
                <div className="image" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <img src={image1} alt="" />
                </div>
            </div>
            <button className='scroll' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <FaAngleUp className='icon'/>
            </button>
          </div>
        </>
    )
}

export default Hero