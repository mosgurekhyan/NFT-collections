import { useEffect, useState } from 'react'
import Items7 from '../Items7/Items7'
import Items8 from '../Items8/Items8'
import './BlogGrid.css'

function BlogGrid() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blog'>
      <div className='faqDiv1'>
        <h1 className='h11'>OUR BLOGS</h1>
      </div>
      <div className="blogDiv1">
        <div className="blogDiv2">
          <div className="blogDiv4"><h5 className='blogH5'>NFTARTWORK</h5></div>
          <p className='blogP'>by Admin | 20 Jun 2022</p>
          <h1 className='blogH1'>Convert More Leads With These Three New Follow-Up Ideas</h1>
          <p className='blogP2'>We make daily use products more affordable and accessible for a billion Indians by using our in-house technology to power one of the world’s most efficient grocery supply chains. We make daily use products more affordable and accessible for a...</p>
          <h4 className='blogH4'>READ MORE</h4>
          <p className='blogP3'></p>
        </div>
        <div className="blogDiv3">
          <form className='form2'>
            <input type="text" placeholder="Search"/>
            <button><i className="fas fa-search"></i></button>
          </form>
          <div onClick={() => setOpen1(!open1)} style={{height: open1 ? '230px' : ''}} className="blogDiv5">
            <div className="blogDiv7">
              <h2 className='blogH2'>Categories</h2>
              <i className="arrow3 arrow fa-solid fa-angle-down"></i>
            </div>
            <div className="blogDiv6">
              <p className='blogP4'></p>
              <p className='blogP5'></p>
            </div>
            <p className='blogP6'>Latest(22) Analysis(45) Digital Art(13) Collectible(12) Corporate(32) Game(05) Metaverse(16)</p>
          </div>
          <div onClick={() => setOpen2(!open2)} style={{height: open2 ? '350px' : ''}} className="blogDiv5">
            <div className="blogDiv7">
              <h2 className='blogH2'>Recent Posts</h2>
              <i className="arrow3 arrow fa-solid fa-angle-down"></i>
            </div>
            <div className="blogDiv6">
              <p className='blogP4'></p>
              <p className='blogP5'></p>
            </div>
            <Items7/>
          </div>
          <div onClick={() => setOpen3(!open3)} style={{height: open3 ? '230px' : ''}} className="blogDiv5">
            <div className="blogDiv7">
              <h2 className='blogH2'>Archives</h2>
              <i className="arrow3 arrow fa-solid fa-angle-down"></i>
            </div>
            <div className="blogDiv6">
              <p className='blogP4'></p>
              <p className='blogP5'></p>
            </div>
            <p className='blogP6'>October(22) September(11) August(14) July(27) June(31) May(21) April(27)</p>
          </div>
          <div onClick={() => setOpen4(!open4)} style={{height: open4 ? '160px' : ''}} className="blogDiv5">
            <div className="blogDiv7">
              <h2 className='blogH2'>Popular Tags</h2>
              <i className="arrow3 arrow fa-solid fa-angle-down"></i>
            </div>
            <div className="blogDiv6">
              <p className='blogP4'></p>
              <p className='blogP5'></p>
            </div>
            <div className="blogDiv8">
              <p className='blogP7'>nftartwork</p>
              <p className='blogP7'>rarible</p>
              <p className='blogP7'>metaverse</p>
              <p className='blogP7'>btc</p>
              <p className='blogP7'>nftsstories</p>
              <p className='blogP7'>digitalartist</p>
              <p className='blogP7'>animation</p>
              <p className='blogP7'>cryptocurrencies</p>
            </div>
          </div>
        </div>
      </div>
      <Items8/>
    </div>
  )
}

export default BlogGrid