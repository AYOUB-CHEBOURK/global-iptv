import './installation.css'
import imageTv from '../../assets/images/tv.jpg'
import imageWin from '../../assets/images/windows.jpg'
import { installationData, installationDataWind } from '../../data/installationData'

const Installation = () =>{
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide installation">
                <div className="carousel-indicators button">
                    <button style={{backgroundColor: "#830a48", height: "10px"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={{backgroundColor: "#830a48", height: "10px"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner container">
                    <div className="carousel-item active">
                        <div className="image">
                           <img src={imageTv} className="d-block w-30" alt="..." data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000"/>
                        </div>
                        <div className="box" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <h1>Download VLC</h1>
                            <p>You can download the APK of IPTV smarters pro via direct link by Downloader app in Fire TV, follow these steps:</p>
                            <p>1- Install Downloader on your Amazon Fire TV.</p>
                            <p>2- Select the nav tabs from the home screen by pressing up, and scroll right to reach Settings. From this menu, select Device. Next, pick Developer Options and you should see a sub-menu that includes the entry ‘Apps from Unknown Sources’. Select it, making sure it reads ON underneath.</p>
                            <p>3- go back to the Downloader app. On the app’s initial page you’ll see a white box into which you can type a URL. Select it and type in:</p>
                            {installationData.map((item , id)=>(
                                <div className='etape' key={id}>
                                    <img src={item.image} alt="imgAbout"/>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image">
                          <img src={imageWin} className="d-block w-30" alt="..." data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000"/>                     
                        </div>
                        <div className="box" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <h1>Windows (My IPTV Player)</h1>
                            <p>This is an exceptional media player with EPG to play your IPTV channels on your Windows Phone, Windwos10, and Xbox One. You can simply load your M3U playlist from storage or remote source and you are good to go.</p>
                            <h2>You can download this app via the link  below:</h2>
                            <p>1- Navigate Settings</p>
                            {installationDataWind.map((item , id)=>(
                                <div className='etapes' key={id}>
                                    <p>{item.text}</p>
                                    <img src={item.image} alt="imgAbout"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Installation

