import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function AnimalDetails() {

  useEffect(() => {
    console.log('params are', params);
  }, [])

  
  // useParams gives us an object with our url params
  //url params are set in the <route> component in App.jsx
  const params = useParams();

  return (
    <div>
      <h1>Animal Detail</h1>
    </div>
  )
  
}