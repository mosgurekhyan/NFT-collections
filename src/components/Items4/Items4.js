import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseContext } from '../../App'
import './Items4.css'

function Items4() {
  const {items4} = useContext(UseContext)
  const navigate = useNavigate()
  return (
    <div className='items4Div'>
        <div className='title'>
          <h3>ABOUT US</h3>
          <h1>WHAT IS CYBOX?</h1>
          <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis.</p>
        </div>
        <div className='items4Data'>
            {
                items4.map(e => (
                    <div key={e.id} className='box-text corner-box'>
                        <h3>{e.title}</h3>
                        <p>{e.text}</p>
                    </div>
                ))
            }
        </div>
        <a onClick={() => navigate('/nft')} className='tf-button btn-effect'>
          <span className='boder-fade'></span>
          <span className='effect'>GET NFTS</span>
        </a>
    </div>
  )
}

export default Items4