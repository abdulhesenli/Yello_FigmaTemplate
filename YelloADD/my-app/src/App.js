import Home from './components/home';
import { Route, Routes, Navlink,} from 'react-router';
import './App.css';
import Rewards from './components/rewards';
import Products from './components/products';
import Launchpad from './components/launchpad';
import Leaderboard from './components/leaderboard';
import Support from './components/support';
import Certic from '../src/images/CERTIK.svg'
import Frame from '../src/images/Frame.svg'
import footersocial from '../src/images/footer-social.svg'
import services from '../src/images/footer-services.svg'

function App() {
  return (
    <div className="App">
   










   

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/products' element={<Products />} />
        <Route path='/launchpad' element={<Launchpad />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/support' element={<Support />} />
        <Route path='/support' element={<Support/>} />
      </Routes>




      <hr style={{ border: '0.58px solid #CDCDDF', width: '1150px',  margin:'auto', marginTop: '30px', }} />
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '40px' }}>

                <div>
                    <img src={Certic} style={{ marginRight:'400px', height: '70px', paddingLeft: '16px', objectFit: 'cover' }} />

                </div>

                <div style={{ display: 'flex', alignContent: "center" }} >
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '60px' }}>
                        <img src={Frame} style={{ width: '35px', height: '35px', marginLeft: '18px', marginBottom:'6px' }} />
                        <h1 className="socialfooter">CoinMarketCap</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '60px', }}>
                        <img src={footersocial} style={{ width: '35px', height: '35px', marginBottom:'6px'  }} />
                        <h1 className="socialfooter">Socials</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '55px', paddingRight: '15px'}}>
                        <img src={services} style={{ width: '35px', height: '35px', marginBottom:'6px'  }} />
                        <h1 className="socialfooter">Support</h1>
                    </div>
                </div>
            </footer>

    </div>
  );
}

export default App;
