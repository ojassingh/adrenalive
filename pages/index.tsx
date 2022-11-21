import Navi from '../components/Navi'
import Upcoming from '../components/Upcoming'
import Partner from '../components/Partner'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navi/>
      <div className='py-4'>
        <Upcoming/>
        <Partner/>
      </div>
    </div>
  )
}
