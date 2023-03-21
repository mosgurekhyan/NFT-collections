import { useEffect } from 'react'
import Items4 from '../Items4/Items4'
import OurTeam2 from '../OurTeam2/OurTeam2'
import Wallet from '../Wallet/Wallet'
import './About1.css'

function About1() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about'>
      <div className='aboutDiv1'>
        <h1 className='h2'>ABOUT US</h1>
      </div>
      <Items4/>
      <OurTeam2/>
      <div className='aboutDiv2'>
        <Wallet/>
      </div>
    </div>
  )
}

export default About1