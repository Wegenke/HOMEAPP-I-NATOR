import { useState } from 'react'
import SubMenu from '../../navigation/SubMenu'
import ShowLists from './ShowLists'
import CreateList from './CreateList'
import UpdateList from './UpdateList'
import List from './List'
import { useParams } from 'react-router-dom'

const Lists = () => {

  const [subMenu, setSubMenu] = useState("home");
  const queryParams = useParams();

  const subMenuOptions = [
    {value: "home", displayText: "View Lists"},
    {value: "new", displayText: "Add List"},
    {value: "update", displayText: "Update List"},
  ];


  let content;

  // if(queryParams.id){
  //   if(subMenu === "update" ){
  //     content = <p>This shit don't exist!!</p>
  //   } else {
  //     content = <List id={queryParams.id} />
  //   }
  // }
  if(subMenu == 'update'){
    content = <UpdateList />
  } else if(subMenu === "new"){
    content = <CreateList />
  } else {
    content = <ShowLists />
  }

  return (
    <>
      <SubMenu setSubMenu={setSubMenu} contextItems={subMenuOptions} />
      {content}
    </>
  );

}

export default Lists