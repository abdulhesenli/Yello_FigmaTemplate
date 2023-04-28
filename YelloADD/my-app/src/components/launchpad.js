import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/LogoAlone3d.svg'
import Imagetwo from '../images/ShoppingCart.svg'
import Vectosvg from '../images/rewards_img/Vecto.svg'
import Create from '../images/launch_img/create.svg'
import PreList from '../images/launch_img/prelist.svg'
import Vault from '../images/launch_img/Vault.svg'
import Services from '../images/launch_img/launchpad1.svg'
import Partners from '../images/launch_img/lauchpad2.svg'
import Holders from '../images/launch_img/lauchpad3.svg'







const Launchpad = () => {
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
                    <Link to='/Support' className="active"><li><a href="#">Support</a></li></Link> 
                        <li><button>Connect Wallet</button></li>
                        <li><a href="#">En</a></li>
                        <div style={{ borderLeft: '1px solid #E3A455', height: '40px' }}></div>
                        <img src={Imagetwo} style={{ width: '50px', height: '35px', paddingLeft: '10px', color: "#ECAF5A" }} />

                    </ul>
                </div>


            </div>

            <hr style={{ border: '0.58px solid #B59770', maxwidth: '2150px', marginTop: '15px', marginBottom: '0', opacity: '1' }} />




            <div id="launchpad">
                <div className="launchpad mg-content">

                    <h1>HPAD  |  Launchpad</h1>

                    <div className="products">
                   

                 

                        <div className="launchpad-choice pro-contents ">
                            <img src={Create} className="making" />

                            <a href="#" style={{ marginRight: '84px', color: '#FFE986' }}>Create Presale</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="product-choice">
                            <img src={PreList} className="auditKYC" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '108px' }} >Presale List</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="product-choice">
                            <img src={Vault} className="microphone" style={{ width: '23px', height: '23px', marginright: '10px ' }} />

                            <a href="#" style={{ marginRight: '78px' }} >Liquidity Locker</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                    </div>



                </div>

                <div className="aggre launch-aggre">
                    <h1>H - Pad </h1>
                    <p>
                    Welcome to the multichain launchpad with over 7 different ways to launch your project
                    </p>


                </div>


                <div className="roww">
                    
                        <div className="position-relative" >

                      
                            <img src={Services} className="position-absolute" style={{ right: '9px', top: '-228px' }} />
                            <img src={Holders} className="position-absolute" style={{ right: '-240px', top: '-164px' }} />
                            <img src={Partners} className="position-absolute" style={{ right: '42px', top: '-11px' }} />


                        </div>



                 



                </div>






            </div>




        </div>




    )
}

export default Launchpad;