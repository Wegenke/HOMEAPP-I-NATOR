import {useState, useEffect} from 'react'



export default function Plants(){
  const [plantsList, setPlantsList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}get/plants`)
      .then(res => res.json())
      .then(data => setPlantsList(data))
  }, [])

  return(
    <div>
      {plantsList.map(x=>
        <h2 key={x.id}>{`${x.edible} - ${x.name} - ${x.location} - ${x.bucket}`}</h2>
      )}
    </div>
  )
}