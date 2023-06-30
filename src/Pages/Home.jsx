import Hero from '../Components/Home/Hero'
import Search from '../Components/Home/Search'
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-rose-400 px-4 md:px-8 to-orange-300'>
      <Hero/>
      <Search/>
    </div>
  )
}

export default Home
