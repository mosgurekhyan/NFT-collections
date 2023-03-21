import { useState } from 'react'
import './Answers.css'

function Answers() {
  const [item1, setItem1] = useState(false)
  const [item2, setItem2] = useState(false)
  const [item3, setItem3] = useState(false)
  const [item4, setItem4] = useState(false)

  return (
    <div className='answers'>
      <img className='answersImg' src="https://cyboxhtml.surielementor.com/assets/images/common/imgfaq.jpg" alt="" />  
      <div className='answersDiv'>
        <h3>FAQS</h3>
        <h1>LOOKING FOR ANSWERS?</h1>

        <div className={item1 ? 'answersData2' : 'answersData1'}>
          <div className='iconDiv'>
            <h2>What Are The NFTs?</h2>
            <i onClick={() => {setItem1(!item1); setItem2(false); setItem3(false); setItem4(false)}} style={{transform: item1 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
          </div>
          <h4>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.</h4>
        </div>

        <div className={item2 ? 'answersData2' : 'answersData1'}>
          <div className='iconDiv'>
            <h2>How Do I Get NFTs?</h2>
            <i onClick={() => {setItem2(!item2); setItem1(false); setItem3(false); setItem4(false)}} style={{transform: item2 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
          </div>
          <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.</h4>
        </div>

        <div className={item3 ? 'answersData2' : 'answersData1'}>
          <div className='iconDiv'>
            <h2>How Can We Buy Your NFTs?</h2>
            <i onClick={() => {setItem3(!item3); setItem1(false); setItem2(false); setItem4(false)}} style={{transform: item3 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
          </div>
          <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.Who Are The Team Behind.</h4>
        </div>

        <div className={item4 ? 'answersData2' : 'answersData1'}>
          <div className='iconDiv'>
            <h2>Who Are The Team Behind The Project?</h2>
            <i onClick={() => {setItem4(!item4); setItem1(false); setItem2(false); setItem3(false)}} style={{transform: item4 ? 'rotateZ(180deg)' : 'rotateZ(0)'}} className="arrow2 arrow fa-solid fa-angle-down"></i>
          </div>
          <h4>Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.</h4>
        </div>
      </div>
    </div>
  )
}

export default Answers