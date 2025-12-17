  import { useContext } from 'react'
  import AppProvider from '../contextComponents/AppContext'


export default function Lists(){
  const enums = useContext(AppProvider.context);

  if (!enums) {
    console.log("Enums not loaded yet");
    return null;
  }
  if (!enums.ListType || enums.ListType.length === 0) {
    console.log("ListType not loaded or empty");
    return null;
  }
 
  
  return (
    <select>
      {enums.ListType.map((x) => (
        <option key={x.id} value={x.id}>
          {x.item_display_text || x.item_name}
        </option>
      ))}
    </select>
  );

}