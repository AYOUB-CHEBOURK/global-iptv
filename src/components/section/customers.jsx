import './customers.css'
import { customersData } from '../../data/customersData'
import image2 from "../../assets/images/image2.png"
import CountUp from 'react-countup'

const Customers = () =>{
    return(
        <>
          <div className="customers">
            <div className="container">
                <h1 data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000"><CountUp enableScrollSpy duration={3} end={20000}/>+</h1>
                <div className="image" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <img src={image2} alt="image" />
                </div>
                <h2 data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Happy <span>customers</span></h2>
                <div className="boxes">
                    {customersData.map((item , id) =>(
                        <div className="box" key={id}  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <h3>{item.icon}</h3>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Customers