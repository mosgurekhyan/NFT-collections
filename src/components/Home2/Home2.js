import { useEffect } from 'react'
import Answers from '../Answers/Answers'
import Arts from '../Arts/Arts'
import HowWeWork from '../HowWeWork/HowWeWork'
import Items3 from '../Items3/Items3'
import Items4 from '../Items4/Items4'
import OurTeam2 from '../OurTeam2/OurTeam2'
import Roadmap from '../Roadmap/Roadmap'
import Wallet from '../Wallet/Wallet'
import './Home2.css'

function Home2() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (
    <div className='mainHome1'>
      <div className='home1'>
        <div className='overlayy'></div>
        <div className='home1Div1'>
          <h1 className='title'>CYBOX NFT COLLECTIONS FOR EVERYONE</h1>
          <div className='dataDiv'>
            <p className='text'>Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.</p>
            <a className='tf-button2 btn-effect2'>
              <span className='boder-fade2'></span>
              <span className='effect2'>CONNECT WALLET</span>
            </a>
            <a className='tf-button3 btn-effect3'>
              <span className='boder-fade3'></span>
              <span className='effect3'>WATCH VIDEO</span>
            </a>
          </div>
        </div>
      </div>
      <Items4/>
      <Roadmap/>
      <Arts/>
      <HowWeWork/>
      <OurTeam2/>
      <Wallet/>
      <div className="home1Div8">
        <Items3/>
      </div>
      <Answers/>
    </div>
  )
}

export default Home2