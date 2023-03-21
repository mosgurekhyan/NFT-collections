import { useEffect, useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [item1, setItem1] = useState(false)
  const [item2, setItem2] = useState(false)
  const [item3, setItem3] = useState(false)
  const [item4, setItem4] = useState(false)
  const [item5, setItem5] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='faq'>
      <div className='faqDiv1'>
        <h1 className='h11'>ASKED QUESTIONS</h1>
      </div>
      <div className='faqDiv2'>
        <div className="faqDiv3">

          <div className={item1 ? 'answersData22' : 'answersData11'}>
            <div className='iconDiv'>
              <h2>What Are The NFTs?</h2>
              <i onClick={() => {setItem1(!item1); setItem2(false); setItem3(false); setItem4(false); setItem5(false)}} style={{transform: item1 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
            </div>
            <h4>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.</h4>
          </div>

          <div className={item2 ? 'answersData22' : 'answersData11'}>
            <div className='iconDiv'>
              <h2>How Can We Buy Your NFTs?</h2>
              <i onClick={() => {setItem2(!item2); setItem1(false); setItem3(false); setItem4(false); setItem5(false)}} style={{transform: item2 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
            </div>
            <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.</h4>
          </div>

          <div className={item3 ? 'answersData22' : 'answersData11'}>
            <div className='iconDiv'>
              <h2>Who Are The Team Behind The Project?</h2>
              <i onClick={() => {setItem3(!item3); setItem1(false); setItem2(false); setItem4(false); setItem5(false)}} style={{transform: item3 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
            </div>
            <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.Who Are The Team Behind.</h4>
          </div>

          <div className={item4 ? 'answersData22' : 'answersData11'}>
            <div className='iconDiv'>
              <h2>How Much Will It Cost To Mint?</h2>
              <i onClick={() => {setItem4(!item4); setItem1(false); setItem2(false); setItem3(false); setItem5(false)}} style={{transform: item4 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
            </div>
            <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.</h4>
          </div>

          <div className={item5 ? 'answersData22' : 'answersData11'}>
            <div className='iconDiv'>
              <h2>What's The Story Behind The Art?</h2>
              <i onClick={() => {setItem5(!item5); setItem1(false); setItem2(false); setItem3(false); setItem4(false)}} style={{transform: item4 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
            </div>
            <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.</h4>
          </div>
        </div>
        <div className="faqDiv4">
          <h1 className='h111'>HAVE A QUESTION</h1>
          <p className='p2'>Fill up the Form and ou team will get back to within 24 hrs</p>
          <input className='name' type="text" placeholder='Name'/>
          <input className='name' type="text" placeholder='Email Address'/>
          <input className='name' type="text" placeholder='Phone'/>
          <input className='yourM' type="text" placeholder='Type your Message'/>
          <a className='tf-button btn-effect'>
            <span className='boder-fade'></span>
            <span className='effect'>SEND MESSAGE</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ