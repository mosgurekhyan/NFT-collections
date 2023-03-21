import { useEffect } from 'react'
import Items6 from '../Items6/Items6'
import './NFTdetails.css'

function NFTdetails() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='nftDetails'>
      <div className='faqDiv1'>
        <h1 className='h11'>ITEM DETAILS</h1>
      </div>
      <div className="nftDetailsDiv1">
        <div className='nftDetailsImage'></div>
        <div className='nftDetailsData'>
          <h1 className='h1Details'>Samuel Olukoju</h1>
          <h5 className='h4Details'>Cybox #01</h5>
          <div className='nftDetailsDiv2'>
            <div className='nftDetailsDiv3'>
              <i className="nftIcon fa-solid fa-eye">           225</i>
              <i className="nftIcon fa-regular fa-heart">             100</i>            
            </div>
            <div className='nftDetailsDiv4'>
              <i className="nftIcon fa-regular fa-paper-plane"></i>
              <i className="nftIcon fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p className='nftDetailsP'>Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortis morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum</p>
          <a className='nftButton tf-button btn-effect'>
            <span className='boder-fade'></span>
            <span className='effect'><i className="bag fa-solid fa-bag-shopping"></i>BUY ON OPENSEA</span>
          </a>
          <Items6/>
        </div>
      </div>
    </div>
  )
}

export default NFTdetails