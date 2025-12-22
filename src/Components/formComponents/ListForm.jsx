import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import AppProvider from '../contextComponents/AppContext'
import ListsDataManager from '../../dataManagers/listDataManager'
import { redirect } from "react-router";


const ListForm = ({crudActivity}) => {

    const { register, handleSubmit, reset } = useForm()
    const enums = useContext(AppProvider.context);
    
    if (!enums) {
        console.log("Enums not loaded yet");
        return null;
    }
    if (!enums.ListType || enums.ListType.length === 0) {
        console.log("ListType not loaded or empty");
        return null;
    }
    async function submitData(data) {
        console.log("Submitting data:", data, crudActivity);
        if(crudActivity == "create"){
            await ListsDataManager.createList(data)
                .then((id) => {
                    id = "BOOM";
                    reset()
                    redirect(`/list/${id}`)
                })
                .catch(err => {
                    console.error(`BRO - SETUP TOASTRS - DUH`)                    
                })
        }

    }

  return (
    <div id="adminforms">
      <form id="listForm" onSubmit={handleSubmit(submitData)}>
        List Type: 
        <select {...register("listType")}>
            {enums.ListType.map((x) => (
                <option key={x.item_value} value={x.item_value}>
                    {x.item_display_text || x.item_name}
                </option>
            ))}
        </select> 
        <br/>
        List Name:
        <input {...register("listName", { required: true })} />
        <br />
        List Description:
        <textarea {...register("listDescription") } />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ListForm