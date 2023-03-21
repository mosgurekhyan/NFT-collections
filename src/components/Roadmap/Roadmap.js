import { useEffect, useState } from 'react'

function Roadmap() {
  const [item1, setItem1] = useState(false)
  const [item2, setItem2] = useState(false)
  const [item3, setItem3] = useState(false)
  const [item4, setItem4] = useState(false)
  const [item5, setItem5] = useState(false)
  const [item6, setItem6] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const handleScroll = (e) => {
    if(e.target.documentElement.scrollTop < 1400){
      setItem1(false)
    }
    if(e.target.documentElement.scrollTop > 1400){
      setItem1(true)
    }
    if(e.target.documentElement.scrollTop > 1800){
      setItem1(false)
    }
    if(e.target.documentElement.scrollTop > 2050){
      setItem1(true)
    }
    if(e.target.documentElement.scrollTop < 1550){
      setItem2(false)
    }
    if(e.target.documentElement.scrollTop > 1550){
      setItem2(true)
    }
    if(e.target.documentElement.scrollTop > 1950){
      setItem2(false)
    }
    if(e.target.documentElement.scrollTop > 2200){
      setItem2(true)
    }
    if(e.target.documentElement.scrollTop < 1700){
      setItem3(false)
    }
    if(e.target.documentElement.scrollTop > 1700){
      setItem3(true)
    }
    if(e.target.documentElement.scrollTop > 2100){
      setItem3(false)
    }
    if(e.target.documentElement.scrollTop > 2350){
      setItem3(true)
    }
    if(e.target.documentElement.scrollTop < 1850){
      setItem4(false)
    }
    if(e.target.documentElement.scrollTop > 1850){
      setItem4(true)
    }
    if(e.target.documentElement.scrollTop > 2250){
      setItem4(false)
    }
    if(e.target.documentElement.scrollTop > 2500){
      setItem4(true)
    }
    if(e.target.documentElement.scrollTop < 2000){
      setItem5(false)
    }
    if(e.target.documentElement.scrollTop > 2000){
      setItem5(true)
    }
    if(e.target.documentElement.scrollTop > 2400){
      setItem5(false)
    }
    if(e.target.documentElement.scrollTop > 2650){
      setItem5(true)
    }
    if(e.target.documentElement.scrollTop < 2150){
      setItem6(false)
    }
    if(e.target.documentElement.scrollTop > 2150){
      setItem6(true)
    }
    if(e.target.documentElement.scrollTop > 2550){
      setItem6(false)
    }
    if(e.target.documentElement.scrollTop > 2800){
      setItem6(true)
    }
  }

  return (
    <div className='home1Div5'>
        <div className="overlay2"></div>
        <div className='home1Data1'>
          <h3>ROADMAP</h3>
          <h1>CYBOX TIMELINE</h1>
        </div>
        <div className='home1Div51'>
          <div className='rod1'></div>
          <div className='rod2'></div>
          <div style={{marginLeft: item1 ? '0' : '-150px', zIndex: item1 ? '5' : '-5'}} className='hom11'>
            <div className='hom1'>
              <h1>Q2 2022</h1>
              <li>Aenean tempor</li>
              <li>Fusce arcu maecenas</li>
              <li>Malesuada felis sem elementum</li>
              <li>Risus eu metus</li>
            </div>
          </div>
          <div style={{marginRight: item2 ? '0' : '-150px', zIndex: item2 ? '5' : '-5'}} className="hom12">
            <div className='hom2'>
              <h1>Q1 2022</h1>
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
              <li>Social media setup</li>
            </div>
          </div>
          <div style={{marginLeft: item3 ? '0' : '-150px', zIndex: item3 ? '5' : '-5'}} className='hom13'>
            <div className='hom1'>
              <h1>Q4 2021</h1>
              <li>Aenean tempor</li>
              <li>Fusce arcu maecenas</li>
              <li>Malesuada felis sem elementum</li>
              <li>Risus eu metus</li>
            </div>
          </div>
          <div style={{marginRight: item4 ? '0' : '-150px', zIndex: item4 ? '5' : '-5'}} className="hom14">
            <div className='hom2'>
              <h1>Q3 2021</h1>
              <li>Aenean tempor</li>
              <li>Fusce arcu maecenas</li>
              <li>Malesuada felis sem elementum</li>
              <li>Risus eu metus</li>
            </div>
          </div>
          <div style={{marginLeft: item5 ? '0' : '-150px', zIndex: item5 ? '5' : '-5'}} className='hom13'>
            <div className='hom1'>
              <h1>Q2 2021</h1>
              <li>Aenean tempor</li>
              <li>Fusce arcu maecenas</li>
              <li>Malesuada felis sem elementum</li>
              <li>Risus eu metus</li>
            </div>
          </div>
          <div style={{marginRight: item6 ? '0' : '-150px', zIndex: item6 ? '5' : '-5'}} className="hom14">
            <div className='hom2'>
              <h1>Q1 2021</h1>
              <li>Aenean tempor</li>
              <li>Fusce arcu maecenas</li>
              <li>Malesuada felis sem elementum</li>
              <li>Risus eu metus</li>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Roadmap