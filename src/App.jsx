import { useEffect, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Starships from "./components/Starships";
import * as Utils from './utilities/utilities'

function App() {
  const [showData, setShowData] = useState(false);
  const [starshipsData, setStarshipsData] = useState([]);
  const [screen, setScreen] = useState("h-screen");
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState({isError: false, errorMessage: ""});

  useEffect(() => {
    new Promise((resolve, reject) => {
      Utils.getStarships('https://swapi.dev/api/starships', [], resolve, reject)
    })
      .then(response => {        
        //console.log(response);        
        setStarshipsData(response);
        setIsLoading(false);
  
      }).catch((error) => {
          console.log(error);
          setErrorState({isError: true, errorMessage: error})});
  }, []);

  const clickHandler = () => {
    setShowData(true);
    setScreen("");
  }

  return (
    <>
    <main className={`w-full ${screen} text-white bg-black`}>
      <div className='flex flex-col items-center space-y-4'>
        <Header />
        {!errorState.isError && <Button clickHandler={clickHandler} isLoading={isLoading} />}
        {showData && <Starships data={starshipsData}/>}
        {errorState.isError && <p className="text-red-500">{errorState.errorMessage}</p>}
      </div>
    </main>
    </>
  )
}

export default App;
