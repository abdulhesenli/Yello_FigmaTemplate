import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/LogoAlone3d.svg'
import Imagetwo from '../images/ShoppingCart.svg'
import Vectosvg from '../images/rewards_img/Vecto.svg'
import Busd from '../images/rewards_img/busd.svg'
import Micon from '../images/rewards_img/micon.svg'
import Classic from '../images/rewards_img/viewChart.svg'
import Cube from '../images/rewards_img/Cube.svg'
import Hpayicon from '../images/rewards_img/Hpayicon.svg'


import Bounty from '../images/rewards_img/Monthly salary.svg'


const Rewards = () => {
    return (

        <div id="rewards" style={{ position: 'relative' }}>


            <div id="navbar">

                <div className="navbar">
                    <img src={Image} style={{ width: '107px', height: '70x', paddingLeft: '30px' }}/>

                    <ul>
                        <Link to='/' ><li><a href="#" className="active" style={{ marginLeft: '30px' }} >Swap</a></li></Link>
                        <Link to='/rewards'><li><a href="#" className="active" style={{ marginLeft: '20px' }} >Rewards</a></li> </Link>
                        <Link to='/products' ><li><a href="#" className="active">Products</a></li></Link>
                        <Link to='/launchpad'> <li><a href="#" className="active">Launchpad</a></li></Link>
                        <Link to='/leaderboard'><li><a href="#" className="active">Leaderboard</a></li></Link>

                    </ul>
                </div>

                <div className="navbar_iki navbar">
                    <ul style={{marginTop:'12px'}} >

                    <li><a href="#" className="active">About Us</a></li>
                    <Link to='/Support'><li><a href="#" className="active">Support</a></li></Link> 
                        <li><button>Connect Wallet</button></li>
                        <li><a href="#">En</a></li>
                        <div style={{ borderLeft: '1px solid #E3A455', height: '40px' }}></div>
                        <img src={Imagetwo} style={{ width: '50px', height: '35px', paddingLeft: '10px', color: "#ECAF5A" }} />

                    </ul>
                </div>


            </div>
            <hr style={{ border: '0.58px solid #B59770', maxwidth: '2150px', marginTop: '15px', marginBottom:'0',opacity:'1' }} />

            <img src={Cube} style={{ mixBlendMode: "color-dodge" }} />


            <div id="content">
                <div className="content mg-content">

                    <h1>HPAY Exchange</h1>

                    <div className="rewards_content_a">
                        <div className="rewards_content">
                            <img src={Busd} className="busd"  />
                            <a href="#" style={{ marginRight: '78px' }} >BUSD Rewards</a>
                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '19px' }} />
                        </div>

                        <div className="contentiki">
                            <img src={Micon} className="micon" />
                            

                            <a href="#"style={{ marginRight: '78px' }} >Auto Compound</a>
                            
                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="contentiki">
                            <img src={Classic} className="classic" />

                            <a href="#" style={{ marginRight: '84px' }}>Classic Staking</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                        <div className="contentiki">
                            <img src={Bounty} className="bounty" style={{ width: '23px', height: '23px', marginright: '10px '  }} />

                            <a href="#" style={{ marginRight: '76px' }} >Bounty Rewards</a>

                            <img src={Vectosvg} style={{ width: '7px', height: '12px', position: 'absolute', right: '8px' }} />
                        </div>

                    </div>



                </div>

                <div className="aggre">
                    <h1>HedgeFi <br />
                        Rewards
                    </h1>
                    <p>
                        HedgePay offers software products and services to crypto projects and utilizes a percentage of profits to improve our HedgeFi reward pool
                    </p>


                </div>


                <div className="row">
                    <div className="col d-flex" >
                        <div>

                            <h1 className="rewards-text mb-0" >82.49% </h1>
                            <span>Current APY</span>

                        </div>

                        <div style={{ borderLeft: '1px solid #D9D9D9', height: '55px', marginLeft: '20px' }}></div>

                    </div>

                    <div className="col d-flex" >
                        <div>

                            <h1 className="rewards-text mb-0" >$213 </h1>
                            <span>Value /day</span>

                        </div>

                        <div style={{ borderLeft: '1px solid #D9D9D9', height: '55px', marginLeft: '20px' }}></div>

                    </div>

                    <div className="col d-flex" >
                        <div>

                            <h1 className="rewards-text mb-0" >$1,491  </h1>
                            <span>Value /week</span>

                        </div>

                        <div style={{ borderLeft: '1px solid #D9D9D9', height: '55px', marginLeft: '20px' }}></div>

                    </div>

                    <div className="col d-flex" >
                        <div>

                            <h1 className="rewards-text mb-0" >$5,964 </h1>
                            <span>Value /month</span>

                        </div>

                        <div style={{ borderLeft: '1px solid #D9D9D9', height: '55px', marginLeft: '20px' }}></div>

                    </div>  

                </div>

                
         



            </div>

            <div className="checkk">
                  
                  <button type="button" id="rewardbutton" style={{textAlign:'end'}}>
                    

                    <button className="btn" type="button">
                        <img src={Hpayicon} style={{position:'absolute', left:'3px'}}/>
                        HPAY
                        </button>

                    0</button>
              </div>
        

        </div>




    )
}

export default Rewards;