import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/LogoAlone3d.svg'
import Imagetwo from '../images/ShoppingCart.svg'
import Vectosvg from '../images/rewards_img/Vecto.svg'
import leader from '../images/leaderboard_img/CircleWavyCheck.svg'
import userswitch from '../images/leaderboard_img/UserSwitch.svg'
import Globus from '../images/leaderboard_img/Globe.png'


const Leaderboard = () => {
    return (

        <div id="rewards" style={{ position: 'relative' }}>
            <div id="navbar">

                <div className="navbar">
                    <img src={Image} style={{ width: '107px', height: '70x', paddingLeft: '30px' }} />

                    <ul>
                        <Link to='/' ><li><a href="#" className="active" style={{ marginLeft: '30px' }} >Swap</a></li></Link>
                        <Link to='/rewards'><li><a href="#" className="active" style={{ marginLeft: '20px' }} >Rewards</a></li> </Link>
                        <Link to='/products' ><li><a href="#">Products</a></li></Link>
                        <Link to='/launchpad' ><li><a href="#">Launchpad</a></li></Link>
                        <Link to='/leaderboard'><li><a href="#">Leaderboard</a></li></Link>

                    </ul>
                </div>

                <div className="navbar_iki navbar">
                    <ul style={{ marginTop: '12px' }} >

                    <li><a href="#">About Us</a></li>
                    <Link to='/Support'><li><a href="#">Support</a></li></Link> 
                        <li><button>Connect Wallet</button></li>
                        <li><a href="#">En</a></li>
                        <div style={{ borderLeft: '1px solid #E3A455', height: '40px' }}></div>
                        <img src={Imagetwo} style={{ width: '50px', height: '35px', paddingLeft: '10px', color: "#ECAF5A" }} />

                    </ul>
                </div>


            </div>

            <hr style={{ border: '0.58px solid #B59770', maxwidth: '2150px', marginTop: '15px', marginBottom: '0', opacity: '1' }} />




            <div id="leaderboard">
                <div className="leaderboard mg-content">

                    <h1>HPAY  |  Leaderboard</h1>

                    <div className="products">

                    <div className="product-choice">
                            <img src={leader} className="auditKYC" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '108px' }} >Presale List</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="launchpad-choice pro-contents ">
                            <img src={userswitch} className="making" />

                            <a href="#" style={{ marginRight: '84px', color: '#FFE986' }}>Create Presale</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                   


                    </div>



                </div>

                <div className="aggre">
                    <h1>Security Center</h1>
                    <p>
                        One of HedgePay’s three core
                        tenants is security. Use our
                        database to find projects with
                        known leaders and audited contracts.   
                      </p>


                </div>


                <div className="roww">

                    <div className="position-relative" >


                    <img src={Globus} alt="" />

                       

                    </div>







                </div>






            </div>




        </div>




    )
}

export default Leaderboard;