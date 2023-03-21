import { useEffect } from 'react'
import './Contact.css'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='contact'>
      <div className='faqDiv1'>
        <h1 className='h11'>CONTACT US</h1>
      </div>
      <div className="contactDiv1">
        <div className="contactDiv2">
          <h1 className='contactH1'>HAVE A QUESTION</h1>
          <p className='contactP1'>Fill up the Form and ou team will get back to within 24 hrs</p>
          <input className='contactInput1' placeholder='Name' type="text" />
          <input className='contactInput1' placeholder='Email Address' type="text" />
          <input className='contactInput1' placeholder='Phone' type="text" />
          <input className='contactInput2' placeholder='Type your Message' type="text" />
          <a className='tf-button btn-effect'>
            <span className='boder-fade'></span>
            <span className='effect'>SEND MESSAGE</span>
          </a>
        </div>
        <div className="contactDiv3">
          <div className="contactDiv4">
            <div className="contactDiv6">
              <h2 className='contactH2'>Location</h2>
              <p className='contactP2'>2163 Phillips Gap Rd West Jefferson,NC, 28694</p>
            </div>
            <div className="contactDiv6">
              <h2 className='contactH2'>Contact Us</h2>
              <p className='contactP2'>+1 666 8888 Info.avitex@gmail.com</p>
            </div>
          </div>
          <div className="mapouter">
            <div className="gmap_canvas"><iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=121 King St&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br/><a href="https://embedgooglemap.2yu.co">html embed google map</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact