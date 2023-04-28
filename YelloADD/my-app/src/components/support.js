import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/LogoAlone3d.svg'
import Imagetwo from '../images/ShoppingCart.svg'
import Vectosvg from '../images/rewards_img/Vecto.svg'
import Notepad from '../images/support_img/Notepad.svg'
import tech from '../images/support_img/Frame 1707478468.svg'
import help from '../images/support_img/Info.svg'
import Kris from '../images/support_img/Group 1000001663.svg'
import layer from '../images/support_img/Layer 3.svg'



const Support = () => {
    return (

        <div id="rewards" style={{ position: 'relative' }}>
            <div id="navbar">

                <div className="navbar">
                    <img src={Image} style={{ width: '107px', height: '70x', paddingLeft: '30px' }} />

                    <ul>
                        <Link to='/' ><li><a href="#" className="active" style={{ marginLeft: '30px' }} >Swap</a></li></Link>
                        <Link to='/rewards'><li><a href="#" className="active" style={{ marginLeft: '20px' }} >Rewards</a></li> </Link>
                        <Link to='/products' ><li><a href="#" className="active">Products</a></li></Link>
                        <Link to='/launchpad' ><li><a href="#" className="active">Launchpad</a></li></Link>
                        <Link to='/leaderboard'><li><a href="#" className="active">Leaderboard</a></li></Link>

                    </ul>
                </div>

                <div className="navbar_iki navbar">
                    <ul style={{ marginTop: '12px' }} >

                        <li><a href="#" className="active">About Us</a></li>
                       <Link to='/Support'><li><a href="#" className="active">Support</a></li></Link> 
                        <li><button>Connect Wallet</button></li>
                        <li><a href="#">En</a></li>
                        <div style={{ borderLeft: '1px solid #E3A455', height: '40px' }}></div>
                        <img src={Imagetwo} style={{ width: '50px', height: '35px', paddingLeft: '10px', color: "#ECAF5A" }} />

                    </ul>
                </div>


            </div>

            <hr style={{ border: '0.58px solid #B59770', maxwidth: '2150px', marginTop: '15px', marginBottom: '0', opacity: '1' }} />




            <div id="support">


                <div className="aggre support-aggre">
                    <h1>Let’s talk</h1>
                    <p>
                    We are here to help
                    </p>
                </div>

                <div>
                    <img src={layer} className="layer-img"/>
                    <img src={Kris} className="support-img" />
                </div>

                <div className="support mg-content">

                    <h1>Support</h1>

                    <div className="products">

                 

                        <div className="support-choice pro-contents ">
                            <img src={help} className="making" />

                            <a href="#" style={{ marginRight: '89px', color: '#FFE986' }}>Help Center</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="support-choice">
                            <img src={Notepad} className="auditKYC" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '60px' }} >Request Forms</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="support-choice">
                            <img src={tech} className="auditKYC" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '31px' }} >Technical Support</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                    </div>

                </div>

               

            </div>
        </div>
    )
}

export default Support;