import { useContext } from 'react'
import { UseContext } from '../../App'
import './Slider1.css'

function Slider1() {
  const {slider1} = useContext(UseContext)
  return (
    <div className='marquee1'>
      <div className="marquee">
          <div className='marquee--inner1'>
              <span className='spanSlider'>
              {
                slider1.map(e => (
                    <div className="orb" key={e.id}>
                        <img src={e.img} alt="" />
                        <h2>{e.name}</h2>
                    </div>
                ))
              }
              </span>
              <span className='spanSlider'>
              {
                slider1.map(e => (
                    <div className="orb" key={e.id}>
                        <img src={e.img} alt="" />
                        <h2>{e.name}</h2>
                    </div>
                ))
              }
              </span>
          </div>
      </div>
      <span className='square'></span>
      <div className="marquee">
          <div className='marquee--inner2'>
              <span className='spanSlider'>
              {
                slider1.map(e => (
                    <div className="orb" key={e.id}>
                        <img src={e.img} alt="" />
                        <h2>{e.name}</h2>
                    </div>
                ))
              }
              </span>
              <span className='spanSlider'>
              {
                slider1.map(e => (
                    <div className="orb" key={e.id}>
                        <img src={e.img} alt="" />
                        <h2>{e.name}</h2>
                    </div>
                ))
              }
              </span>
          </div>
      </div>
    </div>
  )
}

export default Slider1
