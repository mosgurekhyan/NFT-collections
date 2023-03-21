import { useContext } from 'react'
import { UseContext } from '../../App'
import './Items.css'

function Items() {
  const {items} = useContext(UseContext)
  return (
    <div className='items'>
        {
            items.map(e => (
                <div className='box-text corner-box' key={e.id}>
                    <h2>{e.title}</h2>
                    <p>{e.text}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Items