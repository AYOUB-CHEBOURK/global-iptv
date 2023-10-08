import './NavBar.css'
import logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () =>{
    
    const[responsive , setResponsive] = useState(false)

    useEffect(() =>{
        let toggle = document.querySelector('.toggle')
        let hideMenu = document.querySelector('.hideMenu')

        toggle.onclick = () =>{
            hideMenu.classList.add('active')
        }
    }, [])
    return(
        <>
          <div className="navBar">
            <div className="container">
                <div className="text">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000"/></Link>
                    </div>
                    <div className={responsive ? "hideMenu" : "nav"}>
                        <nav>
                            <ul>
                                <li><Link to='/' className='active' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Home</Link></li>
                                <li><Link to='/installation' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1500">Installation</Link></li>
                                <li><Link to='/blog' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Blog</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button className='toggle' onClick={() =>{ setResponsive(!responsive)}}>
                   <FaBars className='icon'  data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000"/>
                </button>
                <div className="btn" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <Link to="/contact"><button>Contact</button></Link>
                </div>
            </div>
          </div>
        </>
    )
}

export default NavBar