import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UseContext } from '../../App'
import { selectSearchNFT, toggleSearchText } from '../../store/slices/searchNFT/searchNFTSlice'
import './NFT.css'

function NFT() {
  const dispatch = useDispatch()
  const [ul1, setUl1] = useState(false)
  const [ul2, setUl2] = useState(false)
  const [div, setDiv] = useState(false)
  const formRef = useRef(null)
  const {slider1} = useContext(UseContext)
  const search = useSelector(selectSearchNFT)

  const handleSubmit = (e) => {
    e.preventDefault()
    formRef.current.reset()
  }
  
  const doubledArray = slider1.map(x => [x, x, x, x]).flat().sort(() => .5 - Math.random())

  const filterNFT = useMemo(() => {
    return [...doubledArray.filter(e => e.name.includes(search.toUpperCase()))]
  }, [doubledArray, search])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='nftItem'>
      <div className='faqDiv1'>
        <h1 className='h11'>NFT ITEM'S</h1>
      </div>
      <div className="nftItemDiv1">
        <div className="nftItemDiv2">
          <form ref={formRef} onSubmit={handleSubmit} className='form'>
            <input onChange={(e) => dispatch(toggleSearchText(e.target.value))} type="text" placeholder="Search"/>
            <button><i className="fas fa-search"></i></button>
          </form>
          <div className='nftItemDiv3'>
            <div className='divNFT' onClick={() => setUl1(!ul1)}>Calvary Deneral <i className="arrow5 arrow fa-solid fa-angle-down"></i></div>
            <div className='divNFT' onClick={() => setUl2(!ul2)}>Default sorting <i className="arrow5 arrow fa-solid fa-angle-down"></i></div>
            <ul style={{visibility: ul1 ? '' : 'hidden'}} className='ulNFT'>
              <li className='liHFT'>Default sorting</li>
              <li>TAIYO ROBOTICS</li>
              <li>JUNGLE CATS</li>
            </ul>
            <ul style={{visibility: ul2 ? '' : 'hidden'}} className='ulNFT'>
              <li>TAIYO ROBOTICS</li>
              <li>JUNGLE CATS</li>
              <li>JELLY BEASTS</li>
            </ul>
          </div>
        </div>
        <div className='artsData'>
          {
            filterNFT.filter(e => div ? (e.id % 1 === 0) : e.id % 2 === 0).map((e, i) => (
              <div className="orb2" key={i}>
                <img src={e.img} alt="" />
                <h2>{e.name}</h2>
              </div>
            ))
          }
        </div>
      </div>
      <a style={{display: div ? 'none' : 'inline-flex'}} onClick={() => setDiv(true)} className='tf-button btn-effect'>
        <span className='boder-fade'></span>
        <span className='effect'>LOAD MORE</span>
      </a>
    </div>
  )
}

export default NFT