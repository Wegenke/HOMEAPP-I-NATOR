import { useForm } from 'react-hook-form'

const HumanForm = () => {
  const { register, handleSubmit, reset } = useForm()

  async function submitData(data) {
    console.log(data)
    fetch(`${import.meta.env.VITE_API_URL}post/add_human`, {
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
      <form id="humanForm" onSubmit={handleSubmit(submitData)}>
        Parent:<input {...register("type", {required: true})} type="radio" value="parent"/> <br />
        Child:<input {...register("type", {required: true})} type="radio" value="child"/><br />
        Name: <input {...register("name", { required: true })} /><br />
        Nick Name: <input {...register("nick_name", { required: true })} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default HumanForm