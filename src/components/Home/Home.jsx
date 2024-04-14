import React from 'react';
// used to 
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory(); 


  function handleClick() {
    // change location
    // history is a record of everywhere we've been
    // the last entry in the array is where we are now
  
    // push '/animals' to the end of an array
    history.push('/animals')
  }




  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <button onClick={handleClick}>Go Home!</button>
    </div>
  );
}

export default Home;
