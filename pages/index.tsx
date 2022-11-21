import Navi from '../components/Navi'
import Upcoming from '../components/Upcoming'
import Partner from '../components/Partner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navi/>
      <div className='mt-4'>
        <Upcoming/>
        <Partner/>
        <Footer/>
      </div>
    </div>
  )
}


