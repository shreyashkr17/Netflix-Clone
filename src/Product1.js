import React from 'react'
import Faqaccordion from './Components/faqaccordion';
import Footer from './Footer';
import './Product1.css';

function Product1() {
  return (
    <>
    <div className='Product1'>
      <div className="black_bg">
        <div className="black_bg1_cont">
            <h1 className='enjoy_tv'>Enjoy on your TV.</h1>
            <h2 className='para_enjoy'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
        </div>
        <div className="black_bg2_cont">
            
            <div className="vdo_tv_nfl">
                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" className='vdo_nfl_1' muted loop autoPlay></video>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="sorry" className='tv_nfl'/>
        </div>
      </div>
    </div>

    <div className="Product1">
        <div className="black_bg1">
            <div className="black_bg1_cont">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className='download_nfl_banner'/>
            </div>
            <div className="black_bg2_cont">
                <h1 className='download_ttl'>Download your shows to watch offline.</h1>
                <h3 className='download_para_ttl'>Save your favourites easily and always have something to watch.</h3>
            </div>
        </div>
    </div>

    <div className="Product1">
        <div className="black_bg2">
            <div className="black_bg1_cont">
                <h1 className='wtc_evry'>Watch everywhere.</h1>
                <h2 className='para_wtch_evr'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </div>
            <div className="black_bg2_cont">
                <div className="vdo_nfl_img_1">
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" className='vdo_2' muted autoPlay loop></video>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" className='pc_vdo_img' />
            </div>
        </div>
    </div>

    <div className="Product1">
        <div className="black_bg3">
            <div className="black_bg1_cont">
                <img src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABXu-RsaE-ryVF-fkXgy_MwinpHRIhq94I3EtMOrODpTwl8PcKeiD8Nz1rQOBJbsA6HSGMgplKloZsDWq8jw7pTswJ4wT3ti9g_ca.png?r=5cf" alt="#" className='children_title_home'/>
            </div>
            <div className="black_bg2_cont">
                <h1 className='children_ttl'>Create profiles for children.</h1>
                <h2 className='para_children_ttl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
            </div>
        </div>
    </div>

    <div className="Product2">
        
        <Faqaccordion/>
    </div>
    <div className="footer">
        <Footer/>
    </div>
    </>
  )
}

export default Product1
