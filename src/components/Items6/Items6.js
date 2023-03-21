import { useContext } from 'react'
import { UseContext } from '../../App'
import './Items6.css'

function Items6() {
  const {items6} = useContext(UseContext)
  return (
    <div className='items6'>
        {
            items6.map(e => (
                <div key={e.id} class="items6Data box-text corner-box">
                    <h3 className='items6DataH3'>{e.title}</h3>
                    <h1 className='items6DataH1'>{e.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default Items6