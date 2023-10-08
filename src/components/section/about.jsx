import './about.css'
import image2 from '../../assets/images/image2.png'
import image7 from '../../assets/images/image7.png'
import image8 from '../../assets/images/image8.png'
import image9 from '../../assets/images/image9.png'
import image10 from '../../assets/images/image10.png'
import image11 from '../../assets/images/image11.png'
import image12 from '../../assets/images/image12.png'
import { aboutData } from '../../data/aboutData'

const About = () =>{
    return(
        <>
          <div className="about">
            <div className="container">
                <div className="text">
                    <h1>Best IPTV Service Provider</h1>
                    <div className="image" data-aos="zoom-in-right"data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                      <img src={image2} alt="" />
                    </div>
                    <p data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Get the best IPTV service at a premium price. Our <span>IPTV streaming</span> is compatible with all your devices, Smart TVs, Android Box and Phone, Apple Devices, Amazon Fire Stick, KODI, and MAG Box we literally support all kinds of devices.</p>
                </div>
                <div className="boxes">
                    {aboutData.map((items , id) =>(
                        <div className="box" key={id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <img src={items.image} alt="imgAbout"/>
                            <h2>{items.title}</h2>
                            <p>{items.text}</p>
                        </div>
                    ))}
                </div>
                <h3 data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Bonus <span>packs</span> included</h3>
                <div className="images" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src={image7} alt="" />
                    <img src={image8} alt="" />
                    <img src={image9} alt="" />
                    <img src={image10} alt="" />
                    <img src={image11} alt="" />
                    <img src={image12} alt="" />
                </div>
                <a href="#pricing"><button data-aos="fade-right"data-aos-easing="ease-out-cubic" data-aos-duration="1000">Order now</button></a>
            </div>
          </div>
        </>
    )
}

export default About