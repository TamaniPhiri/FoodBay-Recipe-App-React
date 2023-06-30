import bg from '../assets/bg.svg'
import Hero from '../Components/Home/Hero'
const Home = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='h-screen resize-none bg-no-repeat px-4 md:px-8 bg-cover bg-fixed w-full flex'>
      <Hero/>
    </div>
  )
}

export default Home
