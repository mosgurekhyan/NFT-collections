import { useContext } from 'react'
import { UseContext } from '../../App'
import './Items7.css'

function Items7() {
  const {items7} = useContext(UseContext)
  return (
    <div className='items7'>
        {
            items7.map(e => (
                <div key={e.id} className='items7Data'>
                    <div className="items7Div1">
                      <img className='items7Img' src={e.img} alt="" />
                      <div className="items7Div2">
                        <h2 className='items7H2'>{e.name}</h2>
                        <p className='items7P'>{e.date}</p>
                      </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Items7