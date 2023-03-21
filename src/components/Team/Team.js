import { useContext } from 'react'
import { UseContext } from '../../App'
import './Team.css'

function Team() {
  const {team} = useContext(UseContext)
  return (
    <div className='team'>
        {
            team.map(e => (
                <div className='teaM' key={e.id}>
                    <img className='teamImg' src={e.img} alt="" />
                    <h4 className='teamh4'>{e.name}</h4>
                    <p className='teamP'>{e.profession}</p>
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
  )
}

export default Team