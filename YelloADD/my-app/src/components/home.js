import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/LogoAlone3d.svg'
import Image2 from '../images/Vector.png'
import Image2_1 from '../images/Vecto.svg'
import Image3 from '../images/micon.png'
import Image4 from '../images/mico.png'
import Image5 from '../images/Vect.png'
import Image6 from '../images/image.png'
import Image7 from '../images/1.png'
import Image3_1 from '../images/Vecto3.png'
import Image4_4 from '../images/Vector4.png'
import Frame from '../images/Frame.png'
import Ques from '../images/Question.png'

import Imagetwo from '../images/ShoppingCart.svg'

const Home = () => {
    return (


        <div id="header">

            <div id="navbar">

                <div className="navbar">
                    <img src={Image} style={{ width: '107px', height: '70px', paddingLeft: '30px' }} />

                    <ul>
                        <Link to='/' ><li><a href="#" className="active" style={{marginLeft:'30px'}}>Swap</a></li></Link>
                        <Link to='/rewards'><li><a href="#" className="active"  style={{marginLeft:'20px'}} >Rewards</a></li> </Link>
                        <Link to='/products' ><li><a href="#"className="active" >Products</a></li></Link>
                        <Link to='/launchpad' ><li><a href="#" className="active">Launchpad</a></li></Link>
                        <Link to='/leaderboard'><li><a href="#" className="active">Leaderboard</a></li></Link>

                    </ul>
                </div>

                <div className="navbar_iki navbar">
                    <ul>

                    <li><a href="#" className="active">About Us</a></li>
                    <Link to='/Support ' className="active"><li><a href="#">Support</a></li></Link> 
                        <li><button>Connect Wallet</button></li>
                        <li><a href="#">En</a></li>
                        <div style={{ borderLeft: '1px solid #E3A455', height: '40px' }}></div>
                        <img src={Imagetwo} style={{ width: '50px', height: '35px', paddingLeft: '10px', color: "#ECAF5A" }} />

                    </ul>
                </div>


            </div>

            <hr style={{ border: '0.58px solid #B59770', maxwidth: '2150px', marginTop: '15px' }} />

            <div id="content">
                <div className="content mg-content">

                    <h1>HPAY Exchange</h1>

                    <div className="content_a">
                        <div className="contentbir">
                            <img src={Image2} style={{ width: '38px', height: '20px', paddingRight: '15px' }} />
                            <a href="#" style={{marginRight:'50px'}}>Buy HedgePay</a>
                            <img src={Image2_1} style={{  width: '7px', height: '12px', position: 'absolute', right: '19px' }} />
                        </div>

                        <div className="contentiki">
                            <img src={Image3} style={{ width: '31px', height: '31px' ,marginright:'10px'}} />
                            <a href="#" style={{marginRight:'30px'}}>Transfer Gateway</a>
                            <img src={Image2_1} style={{  width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="contentiki">
                            <img src={Image4} style={{ width: '44px', height: '31px', paddingRight: '15px' }} />
                            <a href="#" style={{ marginRight: '84px' }}>View Chart</a>
                            <img src={Image2_1} style={{  width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="contentiki">
                            <img src={Image5} style={{ width: '27px', height: '16px', marginRight:'15px'}} />
                            <a href="#" style={{marginRight:'41px'}}>Buy with Transak</a>
                            <img src={Image2_1} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px'}} />
                        </div>

                    </div>



                </div>

                <div className="aggre">
                    <h1>Aggregator DEX</h1>
                    <p>
                        HedgePay’s Aggregator DEX has the ability to track the best prices
                        for the token you want on established Decentralized Exchanges. The HedgePay DEX will also provides you with the option to set limit orders,
                        giving you the freedom hunt for the token you want at the price you want it
                    </p>
                    <button className="buy">Buy HedgePay</button>
                    <button className="hedgebuy">View Chart</button>

                </div>

                <div className="content" id="id-content">

                    <h4>Your Balance: $0.92</h4>
                    <h2>0.20115234 NEAR</h2>

                    <div className="content_a">

                        <div className="youpay">
                            <h6>You Pay</h6>
                            <h4>3409.2419 THPAY/NEAR</h4>
                        </div>

                        <div className="contentuc">
                            <div className="image">
                                <img src={Image6} style={{ width: '23px', height: '23px',position: 'absolute', right: '220px',top:'12px' }} />
                                <h1 style={{marginBottom:'-5px',marginLeft:'-130px'}} >0</h1>
                            </div>
                            <div className="near">
                                <img src={Image4_4} style={{ width: '18px', height: '21px', position: 'absolute', right: '110px',top:'12px'}} />
                                <h2 className="nearh2">NEAR</h2>
                                <img src={Image3_1} style={{ width: '13px', position: 'absolute', right: '16px' }} />
                            </div>
                        </div>

                        <div className="icone">
                            <img src={Frame} style={{ width: '33px', height: '33px'}} />

                            <div className="ques-icon">
                                <h1 id="better">Better by +76.7750%</h1>
                                <img src={Ques} style={{ width: '20px', height: '20px', }} />
                            </div>
                        </div>

                        <div className="contentuc">
                            <div className="logo-icon">
                                <img src={Image7} style={{ width: '44px', height: '34px', paddingRight: '15px' }} />
                                <h1>0</h1>
                            </div>

                            <div className="near">
                                <img src={Image4_4} style={{ width: '16px', height: '18px', paddingLeft: '80px', marginRight: '10px' }} />
                                <h2 id="thpay">THPAY</h2>
                                <img src={Image3_1} style={{ width: '16px', height: '9px' ,marginRight: '10px' }} />
                            </div>
                        </div>

                        <div className="check">
                            <input type="checkbox" />
                            <p>I have read and agree with HedgePay Terms of Service. I have done my research to make sure I am legally able to purchase the token in my country of residence.</p>
                            <button type="button">Swap</button>
                        </div>



                    </div>



                </div>

            </div>

          

        



        </div>



    )
}

export default Home;