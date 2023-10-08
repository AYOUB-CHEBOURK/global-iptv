import './footer.css'
import logo from '../../assets/images/logo.png'
import imagePP from '../../assets/images/imagePP.png'
import { FaSquareFacebook , FaSquareInstagram , FaSquareWhatsapp} from "react-icons/fa6";

const Footer = () =>{
    return(
        <>
          <div className="footer">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="contacts">
                    <h1>Contact Us</h1>
                    <div>ayoubchbourk1234@gmail.com</div>
                    <ul>
                        <li><a href=''><FaSquareFacebook/></a></li>
                        <li><a href=''><FaSquareInstagram/></a></li>
                        <li><a href=''><FaSquareWhatsapp/></a></li>
                    </ul>
                </div>
                <div className="imagePP">
                    <img src={imagePP} alt="PayPal" />
                </div>
            </div>
            <div className='copy'>© Copyright 2023 Iptv Global. All rights reserved.</div>
          </div>
        </>
    )
}

export default Footer


