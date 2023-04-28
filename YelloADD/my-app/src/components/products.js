import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/LogoAlone3d.svg'
import Imagetwo from '../images/ShoppingCart.svg'
import Vectosvg from '../images/rewards_img/Vecto.svg'
import ListShop from '../images/product_img/miconnn.svg'
import Home from '../images/product_img/micon.svg'
import Making from '../images/product_img/making.svg'
import AuditKYC from '../images/product_img/u.svg'
import Microphone from '../images/product_img/MicrophoneStage.svg'

import World from '../images/product_img/world.svg'
import Services from '../images/product_img/services.svg'
import Partners from '../images/product_img/partners.svg'
import Holders from '../images/product_img/holders.svg'







const Products = () => {
    return (

        <div id="rewards" style={{ position: 'relative' }}>
            <div id="navbar">

                <div className="navbar">
                    <img src={Image} style={{ width: '107px', height: '70x', paddingLeft: '30px' }} />

                    <ul>
                        <Link to='/' ><li><a href="#" className="active" style={{ marginLeft: '30px' }} >Swap</a></li></Link>
                        <Link to='/rewards'><li><a href="#" className="active" style={{ marginLeft: '20px' }} >Rewards</a></li> </Link>
                        <Link to='/products' ><li><a href="#" className="active">Products</a></li></Link>
                       <Link to='/launchpad'> <li><a href="#" className="active">Launchpad</a></li></Link>
                       <Link to='/leaderboard'><li><a href="#" className="active">Leaderboard</a></li></Link>

                    </ul>
                </div>

                <div className="navbar_iki navbar">
                    <ul style={{ marginTop: '12px' }} >

                       <li><a href="#" className="active">About Us</a></li>
                    <Link to='/Support' className="active"><li><a href="#">Support</a></li></Link> 
                        <li><button>Connect Wallet</button></li>
                        <li><a href="#">En</a></li>
                        <div style={{ borderLeft: '1px solid #E3A455', height: '40px' }}></div>
                        <img src={Imagetwo} style={{ width: '50px', height: '35px', paddingLeft: '10px', color: "#ECAF5A" }} />

                    </ul>
                </div>


            </div>
            
            <hr style={{ border: '0.58px solid #B59770', maxwidth: '2150px', marginTop: '15px', marginBottom: '0', opacity: '1' }} />

        


            <div id="products">
                <div className="product mg-content">

                    <h1>HPAY  |  Services</h1>

                    <div className="products">
                        <div className="product-choice">

                            <img src={ListShop} className="listShop" />

                            <a href="#" style={{ marginRight: '78px' }} >List of Services</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '10px' }} />
                        </div>

                        <div className="product-choice">
                            <img src={Home} className="home" />


                            <a href="#" style={{ marginRight: '78px' }} >AStaking Service</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="product-choice pro-contents ">
                            <img src={Making} className="making" />

                            <a href="#" style={{ marginRight: '84px', color:'#FFE986' }}>Market Making</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="product-choice">
                            <img src={AuditKYC} className="auditKYC" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '108px' }} >Audit & KYC</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="product-choice">
                            <img src={Microphone} className="microphone" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '119px' }} >HedgeTalk</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                    </div>



                </div>

                <div className="aggre">
                    <h1>Products </h1>
                    <p>
                        HedgePay provides more
                        services for projects than
                        we have room to list.
                        Don’t see what you want?
                        Contact us directly
                    </p>


                </div>


                <div className="row">
                    <div className="col" >
                        <div className="position-relative" >

                          <img src={World}/>
                          <img src={Services} className="position-absolute" style={{right:'90px',top:'-70px'}}/>
                          <img src={Holders} className="position-absolute" style={{right:'-161px',top:'111px'}}/>
                          <img src={Partners} className="position-absolute" style={{right:'150px',top:'144px'}}/>


                        </div>

                        

                    </div>

              

                </div>






            </div>

        


        </div>




    )
}

export default Products;