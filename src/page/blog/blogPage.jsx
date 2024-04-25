import './blogPage.css'
import image15 from '../../assets/images/image15.png'
import image24 from '../../assets/images/image24.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const BlogPage = () =>{


    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);

    return(
        <>
          <div className="blog-page">
            <div className="container">
                <img src={image15} alt="" />
                <div className="text">
                    <h1>What is IPTV?</h1>
                    <p>IPTV, or Internet Protocol Television, is a service that allows viewers to view video over the Internet. Unlike traditional television, IPTV allows two-way interactivity, allowing users to watch and record content. The video is encoded and encrypted for streaming and is often accompanied by advertisements. It can be accessed by millions of people.</p>
                    <p>IPTV has many advantages. It allows users to control what they watch, and it allows advertisers to target their ads. Because IPTV is interactive, users can click on the ads to go to the website. This type of advertising is effective because it reaches a targeted audience. Many people record their programs to watch later, so they can skip the commercials.</p>
                    <div className="box">
                        <img src={image24} alt="" />
                        <div className="caption">
                            <h2>Get Your IPTV Subscription Now</h2>
                            <h3>The Best Iptv Service In The Market</h3>
                            <Link to='/'><button>Click Here</button></Link>
                        </div>
                    </div>
                    <p>The basic setup for IPTV involves a router and internet connection. The router then connects to a set-top box, which converts IPTV signals into a format that TVs can understand. Many other digital devices can access IPTV directly through the router. IPTV services can also be changed to fit the needs of the people who use them.</p>
                    <p>IPTV is an increasingly popular service for watching television. IPTV providers are popping up at a rapid pace, and new IPTV providers are gaining ground alongside traditional TV providers. In the end, IPTV has many benefits for consumers and can greatly improve the way they watch TV. </p>
                </div>
            </div>
          </div>
        </>
    )
}

export default BlogPage