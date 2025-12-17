import { useContext } from 'react'
import AppProvider from '../contextComponents/AppContext'

const Lists = () => {
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
        <option key={x.item_value} value={x.item_value}>
          {x.item_display_text || x.item_name}
        </option>
      ))}
    </select>
  );

}

export default Lists