import Trophy from "../assets/Trophy.png";

const Starship = ({ship, highest}) => {
  //console.log(props.ship);
  //const content = `${props.ship.name} ${props.highest === props.ship.countOfFilms ? "H" : ''}, ${props.ship.model}, ${props.ship.countOfFilms}`;
  return (
   <>
      <div className='border-2 w-[80%] sm:w-[50%] mx-auto mb-2 border-white flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-4'>
        <div>
          <h1 className='text-cyan-400 text-sm sm:text-lg'>Name:</h1>
          <h1 className='text-sm sm:text-lg flex items-center pr-2'>{ship.name} <span>{highest === ship.countOfFilms? <img className="h-5 w-5 sm:h-10 sm:w-10" src={Trophy} alt="trophy logo" /> : ""}</span></h1>
          <h2 className='text-cyan-400 text-sm  sm:text-base'>Model:</h2>
          <h3 className='text-sm sm:text-base'>{ship.model}</h3>
        </div>
        <div className='md:pr-6'>
          <h2 className='text-sm sm:text-base'><span className='text-cyan-400'>Number Of Films:</span> {ship.countOfFilms}</h2>
        </div>
      </div>
   </>
  )
}

export default Starship;