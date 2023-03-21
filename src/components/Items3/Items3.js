import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseContext } from '../../App'
import './Items3.css'

function Items3() {
  const {items3} = useContext(UseContext)
  const navigate = useNavigate()
  return (
    <div className='mainItems3Div'>
      <span className='sp1'>
         <h3>BLOGS</h3>
         <h1>LASTEST NEWS</h1>
      </span>
      <div className='items3Div'>
          {
              items3.map(e => (
                  <div className='items3Div1' key={e.id}>
                      <img src={e.img} alt="" />
                      <h4>{e.name}</h4>
                      <div className='items3Div2'>
                          <h5>{e.date}</h5>
                          <h2>{e.question}</h2>
                          <p>{e.text}</p>
                      </div>
                  </div>
              ))
          }
      </div>
      <div className='sp2'>
          <a onClick={() => navigate('/contact')} className='tf-button btn-effect'>
             <span className='boder-fade'></span>
             <span className='effect'>EXPLORE MORE</span>
          </a>
      </div>
    </div>
  )
}

export default Items3