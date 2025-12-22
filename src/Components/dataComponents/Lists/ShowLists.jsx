import { useState, useEffect } from "react"


const ShowLists = () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}api/lists`)
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])

    return (
        <div>
            {lists.map(x=>
                <h2 key={x.id}>{`${x.name} - ${x.description}`}</h2>
            )}
        </div>
    )
}

export default ShowLists