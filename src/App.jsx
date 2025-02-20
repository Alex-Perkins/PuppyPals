//Import puppyList from the data.js file
import { puppyList } from './data.js'

//Import the useState hook
import { useState } from 'react'

//import a CSS file
import './index.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {

  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  console.log(featuredPup);

  return (

    <div className="appContainer">

      <div className="App">

        {puppies.map((puppy) => {

          return (<p onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}> {puppy.name} </p>

          );

        })}

      </div>

{featPupId && (

  <div class="puppyTable">

    <h2> {featuredPup.name} </h2>

    <ul>

      <li> Age: {featuredPup.age} </li>

      <li> Email: {featuredPup.email} </li>

    </ul>

  </div>

)}

    </div>

);

};

export default App

