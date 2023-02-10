import Logo from "../assets/Logo.jpg";
import Trophy from "../assets/Trophy.png";

const Header = () => {
  return (
    <>
      <div className="w-[40%] h-[20%] sm:w-[20%] sm:h-[30%] mt-10">
           <img alt="star wars logo" src={Logo} style={{width: "100%", height: "100%"}} />
      </div>
      <div className="pb-4 text-center">
        <h1 className="text-sm sm:text-xl py-2">Sample ReactJS project using the SWAPI API</h1>
        <p className="text-xs sm:text-lg px-4">Results are filtered to starships with a crew size less than 10 and sorted by crew size</p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="text-xs sm:text-lg px-4">The starship that has featured in the most films will show a</p>
          <img className="h-5 w-5 sm:h-10 sm:w-10" alt="trophy" src={Trophy} />
        </div>
      </div>
    </>
    

  )
}

export default Header;