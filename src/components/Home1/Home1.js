import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Answers from '../Answers/Answers'
import Items from '../Items/Items'
import Items2 from '../Items2/Items2'
import Items3 from '../Items3/Items3'
import Roadmap from '../Roadmap/Roadmap'
import Slider1 from '../Slider1/Slider1'
import Team from '../Team/Team'
import Wallet from '../Wallet/Wallet'
import './Home1.css'

function Home1() {
  const navigate = useNavigate()
  
  const [item1, setItem1] = useState(false)
  const [item2, setItem2] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    if(e.target.documentElement.scrollTop > 480){
      setItem1(true)
    }
    if(e.target.documentElement.scrollTop < 480) {
      setItem1(false)
    }
    if(e.target.documentElement.scrollTop > 1880) {
      setItem1(false)
    }
    if(e.target.documentElement.scrollTop > 4000){
      setItem1(true)
    }
    if(e.target.documentElement.scrollTop > 4770){
      setItem2(true)
    }
    if(e.target.documentElement.scrollTop < 4770){
      setItem2(false)
    }
    console.log(e.target.documentElement.scrollTop)
  }

  return (
    <div className='mainHome1'>
      <div className='home1'>
        <div className='overlay'></div>
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
        <div className='home1Div2'>
          <img src="https://cyboxhtml.surielementor.com/assets/images/common/itemslider.png" alt="" />
        </div>
      </div>
      <div className='home1Div3'>
        <div style={{marginTop: item1 ? '0px' : '300px'}} className='home1Div4'>
          <h3>ABOUT US</h3>
          <h1>WHAT IS CYBOX ?</h1>
          <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed. Id accumsan quam viverra ante in id integer ut. Volutpat lobortis dolor etiam dis interdum tincidunt senectus.</p>
          <a onClick={() => navigate('/nft')} className='tf-button btn-effect'>
            <span className='boder-fade'></span>
            <span className='effect'>GET NFTS</span>
          </a>
        </div>
        <div style={{marginTop: item1 ? '0px' : '300px', transition: '1s'}}>
          <Items/>
        </div>
      </div>
      <Slider1/>
      <Roadmap/>
      <div className='home1Div6'>
        <div>
          <h2>HOW WE WORK</h2>
          <h1>BECOME OUR MEMBER</h1>
          <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis.</p>
        </div>
        <Items2/>
      </div>
      <div className='home1Div7'>
        <div className='home1Div71'>
          <h2>OUR TEAM</h2>
          <h1>MEET OUR TEAM</h1>
          <h3>Who We Are</h3>
          <p>Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.</p>
        </div>
        <Team/>
      </div>
      <div className="home1Div8">
        <div style={{marginTop: item1 ? '0px' : '300px', transition: '2.3s'}}>
          <Items3/>
        </div>
      </div>
      <div className='walletDiv'>
        <div style={{marginTop: item2 ? '0px' : '400px', transition: '2s'}}>
          <Wallet/>
        </div>
      </div>
      <Answers/>
    </div>
  )
}

export default Home1