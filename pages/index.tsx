import Navi from '../components/Navi'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navi/>
      <div className=''>
        <h1 className='xs:hidden text-6xl text-blue-600 font-bold'>AdrenaLive</h1>
      </div>
    </div>
  )
}
