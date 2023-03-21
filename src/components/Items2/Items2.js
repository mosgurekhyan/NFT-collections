import { useContext } from 'react'
import { UseContext } from '../../App'
import './Items2.css'

function Items2() {
  const {items2} = useContext(UseContext)
  return (
    <div className='items2Main'>
      {
        items2.map(e => (
            <div className='items2Div' key={e.id}>
                <h2>{e.title}</h2>
                <p>{e.text}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Items2