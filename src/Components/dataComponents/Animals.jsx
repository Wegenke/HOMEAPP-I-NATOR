import {useState, useEffect} from 'react'

const Animals = () => {
  const [animalList, setAnimalList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}get/animals`)
      .then(res => res.json())
      .then(data => setAnimalList(data))
  }, [])

  return(
    <div>
      {animalList.map(x=>
        <h2 key={x.id}>{`${x.name} - ${x.type} - ${x.age}`}</h2>
      )}
    </div>
  )
}

export default Animals