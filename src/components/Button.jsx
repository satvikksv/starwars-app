const Button = (props) => {
  const getData = () => {
     props.clickHandler();
  };

  return (
    <>
      {props.isLoading ? <p>Loading...</p> : (
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 sm:py-2 text-sm sm:text-base rounded" onClick={getData}>
          Get Starships
        </button>
      )}     
    </>
    
  )
}

export default Button;