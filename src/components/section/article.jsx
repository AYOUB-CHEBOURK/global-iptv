import './article.css'
import image2 from '../../assets/images/image2.png'
import CountUp from 'react-countup'

const Article = () =>{
    return(
        <>
          <div className="article">
            <div className='ayoub'></div>
            <div className="container">
                <div className="text" data-aos="zoom-in-right">
                    <h1><span>Why Choose </span>the best IPTV Services in 2023</h1>
                    <div className="image">
                      <img src={image2} alt="" />
                    </div>
                    <p>With Nodish TV, you can stream thousands of premium channels in excellent quality at very low prices. You can stream your favorite channels at any time on any device.</p>
                    <p>NodishTV wants its customers to experience a revolutionary streaming service. We offer thousands of premium channels from all across the globe at very affordable prices because we want to push the limits of entertainment.</p>
                </div>
                <div className="boxes">
                    <div className="box">
                        <h2><CountUp enableScrollSpy duration={2} end={99}/>%</h2>
                        <h3>High grade dedicated servers</h3>
                        <div><span className='colorB'></span></div>
                    </div>
                    <div className="box">
                        <h2><CountUp enableScrollSpy duration={2} end={100}/>%</h2>
                        <h3>Anti-freez technology</h3>
                        <div><span className='colorY'></span></div>
                    </div>
                    <div className="box">
                        <h2>+<CountUp enableScrollSpy duration={2} end={9500}/></h2>
                        <h3>Live TV channels</h3>
                        <div><span className='colorP'></span></div>
                    </div>
                    <div className="box">
                        <h2>+<CountUp enableScrollSpy duration={2} end={9200}/></h2>
                        <h3>Movies and series</h3>
                        <div><span className='colorV'></span></div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Article