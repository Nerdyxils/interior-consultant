import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import './Hero.css'

function Hero() {

    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="container hero_content">
                    <div className="row">
                        <div className="col text_main">
                            <h1 className="main_t">
                                Modern interior
                            </h1>
                            <p className="main_p">
                            A full-Service residential
                            & commercial interior design 
                            and staging company offering 
                            professional organizing & eco-services.
                            </p>
                            <div className="read_m">
                                <Link to='/' className="read_more">
                                    Read more <span className="icon"><FaArrowRight /></span> 
                                </Link>
                            </div>
                        </div>

                        <div className="col">
                            <div className="main_img">
                                <img src="images/photo1.png" alt="interior view"/>
                            </div>
                            <div className="tweet_card">
                                <div className="profile_sec">
                                    <div className="profile_name">
                                        <div className="col profile_img">
                                            <img src="images/photo2.png" alt="profile image"/>
                                        </div>
                                        <div className="name_sec">
                                            <p className="main_name">
                                                Aliza Webber
                                            </p>
                                            <small className="prof">
                                                Interior designer
                                            </small>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3 className="desc_txt">
                                            Designed in 2020 by <br/> Aliza Webber
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>

            <div className="cc">
                <p>created by Nerdyxils - devChallenges.io</p>
            </div>
        </div>
    )
}

export default Hero
