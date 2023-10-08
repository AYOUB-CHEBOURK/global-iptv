import './pricing.css'
import image2 from '../../assets/images/image2.png'
import { FaCheck } from "react-icons/fa6";

const Pricing = () =>{
    return(
        <>
          <div className="pricing">
            <div className="container">
                <div className="image" data-aos="fade-left"data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <img src={image2} alt="image" />
                </div>
                <h1 data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Pricing<span>Table</span></h1>
                <div className="image" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <img src={image2} alt="image" />
                </div>
                <h2 data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Subscribe to the Best <span>IPTV Providers</span> Now</h2>
                <div className="boxes" id='pricing'>
                    <div className="box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <h3>6 Months</h3>
                        <h4>39$</h4>
                        <ul>
                            <li><FaCheck className='icon'/>9,200+ Live TV Channels</li>
                            <li><FaCheck className='icon'/>9,500+ Movies & Series</li>
                            <li><FaCheck className='icon'/>AntiFreeze Technology</li>
                            <li><FaCheck className='icon'/>FHD,HD & SD TV Channels</li>
                            <li><FaCheck className='icon'/>Works on any device</li>
                            <li><FaCheck className='icon'/>Free Updates</li>
                            <li><FaCheck className='icon'/>24/7 support</li>
                        </ul>
                        <button>Order now</button>
                    </div>
                    <div className="box bestCart" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <h3>12 Months</h3>
                        <h4>59$</h4>
                        <ul>
                            <li><FaCheck className='icon'/>9,200+ Live TV Channels</li>
                            <li><FaCheck className='icon'/>9,500+ Movies & Series</li>
                            <li><FaCheck className='icon'/>AntiFreeze Technology</li>
                            <li><FaCheck className='icon'/>FHD,HD & SD TV Channels</li>
                            <li><FaCheck className='icon'/>Works on any device</li>
                            <li><FaCheck className='icon'/>Free Updates</li>
                            <li><FaCheck className='icon'/>24/7 support</li>
                        </ul>
                        <button>Order now</button>
                    </div>
                    <div className="box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <h3>24 Months</h3>
                        <h4>89$</h4>
                        <ul>
                            <li><FaCheck className='icon'/>9,200+ Live TV Channels</li>
                            <li><FaCheck className='icon'/>9,500+ Movies & Series</li>
                            <li><FaCheck className='icon'/>AntiFreeze Technology</li>
                            <li><FaCheck className='icon'/>FHD,HD & SD TV Channels</li>
                            <li><FaCheck className='icon'/>Works on any device</li>
                            <li><FaCheck className='icon'/>Free Updates</li>
                            <li><FaCheck className='icon'/>24/7 support</li>
                        </ul>
                        <button>Order now</button>
                    </div>
                </div>
                <div className="text">
                  <p>Nodish TV is not just about streaming channels on your devices. We want everyone to experience premium-quality streaming services. It does not matter where you are; you can easily stream premium channels on any device at any time of the day. We want to make high-quality entertainment accessible to everyone, and that’s why we have servers in every country. We have a strong presence in the market because we offer unbeatable IPTV streaming services. We take pride in becoming one of the best IPTV providers.</p>
                  <p>We offer very affordable prices because we do not want anyone to worry about expensive streaming services. Our customers can enjoy high-quality entertainment at very low prices. Our subscription packages will not burn a hole in your pocket and will keep you entertained. You can stream channels from countries like the United States, the UK, and many more. By providing the fastest IPTV services, we are eliminating the problem of buffering from the lives of customers. They no longer have to wait and deal with buffering any longer. So don’t wait any longerand subscribe to the best IPTV service to enjoy unlimited entertainment.</p>
                </div>
            </div>
          </div>
        </>
    )
}

export default Pricing