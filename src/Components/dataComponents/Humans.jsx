import {useState, useEffect} from 'react'

const Humans = () => {
  const [humanList, setHumanList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}get/humans`)
      .then(res => res.json())
      .then(data => setHumanList(data))
  }, [])

  return(
    <div>
      {humanList.map(x=>
        <h2 key={x.id}>{`${x.type} - ${x.name} - ${x.nick_name} - ${x.rating} - ${x.allowance_earned}`}</h2>
      )}
    </div>
  )
}

export default Humans