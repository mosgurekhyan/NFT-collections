import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const navigate = useNavigate()
  const [color, setColor] = useState(false)
  const linkname = useParams()
  // console.log(linkname)
  // console.log(linkname === 'home2')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    if ((e.target.documentElement.scrollTop) > 170){
      setColor(true)
    }else {
      setColor(false)
    }
  }

  return (
    <nav style={{backgroundColor: color ? '#0c1226' : 'transparent'}}>
      <img className='image1' src='https://cyboxhtml.surielementor.com/assets/images/logo/logo.png'/>
      <ul className='ul'>
        <li className='li1' style={{color: (linkname === 'home2') ? 'red' : '#fff'}}>
        {/* <li className='li1' style={{color: (linkname === 'home2') ? 'red' : '#fff'}}> */}
          HOME<i className="arrow1 arrow fa-solid fa-angle-down"></i>
          <ul className='ul1-1'>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/'>HOME 1</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/home2'>HOME 2</NavLink></li>
          </ul>
        </li>
        <li className='li2'>
          ABOUT<i className="arrow1 arrow fa-solid fa-angle-down"></i>
          <ul className='ul1-2'>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/about'>ABOUT</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/comingsoon'>COMING SOON</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/faq'>FAQ</NavLink></li>
          </ul>
        </li>
        <li className='li4'>
          NFT<i className="arrow1 arrow fa-solid fa-angle-down"></i>
          <ul className='ul1-4'>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/nft'>NFT ITEM</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'active-nav' : 'color'} to='/nftdetails'>NFT DETAILS</NavLink></li>
          </ul>
        </li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/blog'>BLOG</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/contact'>CONTACT</NavLink></li>
      </ul>
      <a onClick={() => navigate('/contact')} className='tf-button btn-effect'>
        <span className='boder-fade'></span>
        <span className='effect'>JOIN DISCORD</span>
      </a>
    </nav>
  )
}

export default NavBar