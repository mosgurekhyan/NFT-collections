import { useContext } from 'react'
import { UseContext } from '../../App'
import './Items8.css'

function Items8() {
  const {items8} = useContext(UseContext)
  return (
    <div className='items8'>
        {
            items8.map(e => (
                <div key={e.id} className='items8Div1'>
                    <h4 className='items8H4'>{e.type}</h4>
                    <img className='items8Img' src={e.img} alt="" />
                    <div className="items8Data">
                      <p className='blogP'>{e.date}</p>
                      <h2 className='items8H2'>{e.title}</h2>
                      <p className='items8P2'>{e.text}</p>
                      <h4 className='blogH4'>READ MORE</h4>
                    </div>
                    <p className='items8P1'></p>
                </div>
            ))
        }
    </div>
  )
}

export default Items8