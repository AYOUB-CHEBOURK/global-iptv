import './blog.css'
import image14 from '../../assets/images/image14.png'
import image15 from '../../assets/images/image15.png'
import { FaHeart} from "react-icons/fa6";
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Blog = () =>{

    const  [number , setNumber] = useState(0)
    
    const update = () => setNumber( number + 1)

    useEffect(()=>{
        let btn = document.querySelector('.heart')

        btn.onclick = () =>{
            btn.style.color = 'red'
        }
    },[])

    return(
        <>
          <div className="blog">
            <div className="container">
                <div className="images">
                    <div className="img1" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <img src={image14} alt="img" />
                    </div>
                    <div className="img2" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <img src={image15} alt="img" />
                        <div className="icon">
                            <FaHeart className='heart' onClick={update}/>
                            <h1 className='number'>{number}</h1>
                        </div>
                    </div>
                </div>
                <div className="text">
                  <h1>What is IPTV?</h1>                 
                  <p>IPTV, or Internet Protocol Television, is a service that allows viewers to view video over the Internet. Unlike traditional television, IPTV allows two-way interactivity, allowing users […]</p>
                  <Link to="/blogPage"><button>more</button></Link>
                </div>
            </div>
          </div>
        </>
    )
}

export default Blog