import { useForm } from 'react-hook-form'

const AnimalForm = () => {

  const { register, handleSubmit, reset } = useForm()

  async function submitData(data) {
    fetch(`${import.meta.env.VITE_API_URL}post/add_animal`, {
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

  async function showData(data) {
    console.log(data)
    reset()
  }

  return (
    <div id="adminforms">
      <form id="animalForm" onSubmit={handleSubmit(submitData)}>
        Animal Name: <input {...register("name", { required: true })} /><br />
        Animal Type: <input {...register("type", { required: true })} /><br />
        Animal Age: <input type="number" {...register("age", { required: true })} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AnimalForm