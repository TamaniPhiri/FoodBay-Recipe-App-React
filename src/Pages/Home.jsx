import bg from '../assets/bg.svg'
import Hero from '../Components/Home/Hero'
import Search from '../Components/Home/Search'
const Home = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='h-full resize-none bg-no-repeat px-4 md:px-8 bg-cover bg-fixed w-full flex flex-col'>
      <Hero/>
      <Search/>
    </div>
  )
}

export default Home
