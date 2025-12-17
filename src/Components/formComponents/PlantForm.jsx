import { useForm } from 'react-hook-form'

const PlantForm = () => {
  const { register, handleSubmit, reset } = useForm()

  async function submitData(data) {
    fetch(`${import.meta.env.VITE_API_URL}post/add_plant`, {
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
      <form id="plantForm" onSubmit={handleSubmit(submitData)}>
        Edible: <input type="checkbox" {...register("edible")} /><br />
        Plant Name: <input {...register("name", { required: true })} /><br />
        Plant Location: <input {...register("location", { required: true })} /><br />
        In a bucket: <input type="checkbox" {...register("bucket")} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default PlantForm