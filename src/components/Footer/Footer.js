import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <img className='footerImg1' src="https://cyboxhtml.surielementor.com/assets/images/backgroup/bg-ft.png" alt="" />
      <img className='footerImg2' src="https://cyboxhtml.surielementor.com/assets/images/backgroup/bg-ft2.png" alt="" />
      <div className='footerDiv1'>
        <div className='footerIcons'>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-discord"></i>
        </div>
        <h1>Don’t Miss Out, Join Now For Early Access</h1>
        <p>Maecenas Sit Pretium, Cras In. In Quisque Sem Id Eget. In Vel Gravida Ut</p>
        <div className='footerInputs'>
          <input type="text" placeholder='Enter Your Email Address'/>
          <a className='tf-button btn-effect'>
            <span className='boder-fade'></span>
            <span className='effect'>Subscribe</span>
          </a>
        </div>
      </div>
      <div className='footerDiv2'>
        <p>CYBOX 2022- ALL Rights Reserved</p>
        <div className='footerData'>
          <a>Privacy Policy</a>
          <a>Cookies</a>
          <a>Terms & Conditions</a>
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Footer