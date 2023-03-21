import { useContext } from 'react'
import { UseContext } from '../../App'
import './Arts.css'

function Arts() {
  const {slider1} = useContext(UseContext)
  return (
    <div className='arts'>
        <h3 className='h3'>NFT FEATURED</h3>
        <h1 className='h1'>ARTS & COLLECTIBLES</h1>
        <div className='artsData'>
            {
                slider1.map(e => (
                    <div className="orb2" key={e.id}>
                        <img src={e.img} alt="" />
                        <h2>{e.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Arts