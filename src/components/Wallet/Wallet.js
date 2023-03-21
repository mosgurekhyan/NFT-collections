import { useContext } from 'react'
import { UseContext } from '../../App'
import './Wallet.css'

function Wallet() {
  const {walletImages} = useContext(UseContext)
  return (
    <div className='mainWallet'>
      <h3 className='h3'>PARTNERS</h3>
      <h1 className='h1'>CYBOX INVESTORS</h1>
      <div className='wallet'>
        {
          walletImages.map(e => (
            <img key={e.id} src={e.img} alt="" />
          ))
        }
      </div>
    </div>
  )
}

export default Wallet