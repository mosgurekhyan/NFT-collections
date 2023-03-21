import { useContext } from 'react'
import { UseContext } from '../../App'
import './OurTeam2.css'

function OurTeam2() {
  const {team2} = useContext(UseContext)
  return (
    <div className='ourteam2'>
        <h3 className='h3'>OUR TEAM</h3>
        <h1 className='h1'>MEET OUR TEAM</h1>
        <div  className='ourTeam2'>
            {
                team2.map(e => (
                    <div className='ourTeam2Data' key={e.id}>
                        <img className='ourTeam2Img' src={e.img} alt="" />
                        <h4 className='ourTeam2h4'>{e.name}</h4>
                        <p className='ourTeam2P'>{e.profession}</p>
                        <div className='iconsTeam'>
                            <i className={e.icon1}></i>
                            <i className={e.icon2}></i>
                            <i className={e.icon3}></i>
                            <i className={e.icon4}></i>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurTeam2