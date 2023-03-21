import { useNavigate } from "react-router-dom"

function Error404() {
  const navigate = useNavigate()
  return (
    <div className="errorPage">
        <h1 className="errorPageH1">404</h1>
        <h2 className="errorPageH2">PAGE NOT FOUND</h2>
        <p className="errorPageP">We can’t find the page that you’re looking for.</p>
        <a onClick={() => navigate('/')} className='tf-button btn-effect'>
          <span className='boder-fade'></span>
          <span className='effect'>BACK TO HOMEPAGE</span>
        </a>
    </div>
  )
}

export default Error404