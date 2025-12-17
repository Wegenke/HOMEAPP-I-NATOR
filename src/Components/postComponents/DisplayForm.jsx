import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { forms } from './AllForms'


export default function DisplayForm({ currForm }) {
  const [humans, setHumans] = useState([])

  //Use Form Hooks
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}get/human_ids`)
      .then(res => res.json())
      .then(data => setHumans(data))
  }, [])



  async function onSubmit(data) {
    //Post URLs
    const postLinks = {
      chores: `${import.meta.env.VITE_API_URL}post/add_chore`,
      animals: `${import.meta.env.VITE_API_URL}post/add_animal`,
      plants: `${import.meta.env.VITE_API_URL}post/add_plant`
    }
    fetch(postLinks[currForm], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Http error! status: ${res.status}`)
        }
      })
      .then(() => reset())
      .catch(err => {
        console.error(`Error: ${err}`)
        reset()
      })
  }

  async function showData(data){
    console.log(data)
    reset()
  }

  //Multiple forms in same .jsx causes issues.
  const forms = {
    chores: (
        <form id="choreForm" onSubmit={handleSubmit(onSubmit)}>
          Chore Name: <input {...register("chore_name", { required: true })} /><br />
          Chore Value: <input {...register("chore_value", { required: true })} /><br />
          <input type="submit" />
        </form>
    ),
    plants: (
      <h1>PLANTS HERE</h1>
    ),
    animals: (
      <h1>Animals from list</h1>
    ),
    choose: <h1>CHOOSE A FORM from list</h1>
  }

  switch (currForm) {
    case 'chores':
      return forms[currForm]
    case 'plants':
      return forms[currForm]
    case 'animals':
      return forms[currForm]
    default:
      return forms.choose
  }
}