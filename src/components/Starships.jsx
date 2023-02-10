import Starship from "./Starship";

const Starships = (props) => {
  const starshipsData = props.data.map((ship) => {
    let crewCount = 0;
    
    if (ship.crew.includes("-")){
      crewCount = parseInt(ship.crew.split("-")[0]);
    } else {
      if (ship.crew.includes(",")){
        crewCount = parseInt(ship.crew.replace(/\,/g,''));
      } else {
          if(isNaN(parseInt(ship.crew))) {
            crewCount = 0;
          } else {
            crewCount = parseInt(ship.crew);
          }         
      }
    }      
    
    return {
      name: ship.name,
      model: ship.model,
      countOfFilms: ship.films.length,
      crew: crewCount
    }
  });
  
  //console.log("In here");
  //console.log(starshipsData.length);

  const filteredStarshipsData = starshipsData.filter((ship) => {
     if(ship.crew < 10) {
      return true;
     }
  });
  
  //console.log("In here");
  //console.log(filteredStarshipsData.length);

  const sortedByCountOfFilms = filteredStarshipsData.sort((left, right) => {
    return left.countOfFilms - right.countOfFilms;
  });  

  const highestCountOfFilms = sortedByCountOfFilms[sortedByCountOfFilms.length - 1].countOfFilms;  

  const sortedByCountOfCrew = filteredStarshipsData.sort((left, right) => {
    return left.crew - right.crew;
  });  

  return (
    <div className="w-[100%]">
      {sortedByCountOfCrew.map((ship, index) => <Starship key={index} ship={ship} highest={highestCountOfFilms} />)}
    </div>
  )
}

export default Starships;