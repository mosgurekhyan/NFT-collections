import { useContext } from 'react'
import { UseContext } from '../../App'
import './HowWeWork.css'

function HowWeWork() {
  const {items5} = useContext(UseContext)
  return (
    <div className='howWeWork'>
        <div className='howWeWork1'>
            <h3 className='h3'>HOW WE WORK</h3>
            <h1 className='h1'>BECOME OUR MEMBER</h1>
            <p className='p1'>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed. Id accumsan quam viverra ante in id integer ut. Volutpat lobortis dolor etiam dis interdum tincidunt senectus.</p>
        </div>
        <div className='howWeWork2'>
            {
                items5.map(e => (
                    <div className='box-text corner-box howWeWorkData' key={e.id}>
                        <h3>{e.title}</h3>
                        <p className='p1'>{e.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HowWeWork