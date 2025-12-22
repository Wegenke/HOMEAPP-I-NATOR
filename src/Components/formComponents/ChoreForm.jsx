import { useForm } from 'react-hook-form'

const ChoreForm = () => {

  const { register, handleSubmit, reset } = useForm()

  async function submitData(data) {
    console.log("blammo", data)
    fetch(`${import.meta.env.VITE_API_URL}post/add_chore`, {
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
      <form id="choreForm" onSubmit={handleSubmit(submitData)}>
        Chore Name: <input {...register("chore_name", { required: true })} /><br />
        Chore Value: <input {...register("chore_value", { required: true })} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ChoreForm