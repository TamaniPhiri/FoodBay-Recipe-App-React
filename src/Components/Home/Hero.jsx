import { Player} from '@lottiefiles/react-lottie-player';
const Hero = () => {
  return (
    <div className="flex items-center md:py-0 py-16 justify-center w-full md:flex-row md:h-screen h-auto flex-col">
      {/* Header intro */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
        <h1 className=" w-full text-center text-gray-900 md:text-left text-2xl font-bold md:text-5xl">
          Don&#39;t know what to cook today?
        </h1>
        <p className=" w-full text-center md:text-left py-4 text-rose-900">
          Try FoodBay, one of the best recipe apps on the internet, no ads, no pricing, just good food for everybody.
        </p>
        <div className="flex flex-row gap-2 items-center w-full py-4 md:justify-start justify-center">
          <button className=" bg-rose-900 hover:bg-rose-800 text-white px-4 py-1 rounded-md hover:scale-105 duration-500">
            Find out more
          </button>
          <button className=" bg-gray-900 hover:bg-gray-800 text-white px-4 py-1 rounded-md hover:scale-105 duration-500">
            Get the app
          </button>
        </div>
      </div>

      {/* Hero Animation */}
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_ysas4vcp.json"
          className="w-full h-full z-0 object-cover"
          id="player"
        ></Player>
      </div>
    </div>
  )
}

export default Hero