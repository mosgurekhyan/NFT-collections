import { useEffect, useState } from 'react'
import './ComingSoon.css'

function CommingSoon() {
  const [isActive, setIsActive] = useState(true)
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  let interval = null

  useEffect(() => {
    window.scrollTo(0, 0)
    let countDownDate = new Date('Jul 28, 2023 00:00:00').getTime()
    interval = setInterval(() => {
      let now = new Date().getTime()
      let distance = countDownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if(isActive) {
        if(distance < 0) {
          clearInterval(interval)
        } else {
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [isActive])

  return (
    <div className='commingSoon'>
      <img className='image2' src='https://cyboxhtml.surielementor.com/assets/images/logo/logo.png'/>
      <h3 className='h32'>SITE UNNDER RECONSTRUCTION</h3>
      <h1 className='h12'>COMING SOON</h1>
      <div className='commingSoonDiv1'>
        <div className='date box-text corner-box'>{timerDays}</div>
        <div className='date box-text corner-box'>{timerHours}</div>
        <div className='date box-text corner-box'>{timerMinutes}</div>
        <div className='date box-text corner-box'>{timerSeconds}</div>
        <div className='time'>
          <h2 className='h22'>Days</h2>
          <h2 className='h22'>Houres</h2>
          <h2 className='h22'>Minutes</h2>
          <h2 className='h22'>Seconds</h2>
        </div>
      </div>
      <div className='commingSoonDiv2'>
        <input className='commingSoonInput' placeholder='Your Email Address' type="text" />
        <a className='tf-button btn-effect'>
          <span className='boder-fade'></span>
          <span className='effect'>SIGN UP</span>
        </a>
      </div>
      <div className='commingSoonDiv3'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-telegram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-discord"></i>
      </div>
    </div>
  )
}

export default CommingSoon