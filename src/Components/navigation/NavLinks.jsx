import { Link } from "react-router-dom"
const NavLinks = () => {
  return(
    <div id='navlinks'>
      <Link to='/'>HOME</Link><span>  </span>
      <Link to='/admin-forms'>ADMIN FORM</Link><span>  </span>
      <Link to='/all-chores'>ALL CHORES</Link><span>  </span>
      <Link to='/all-humans'>ALL HUMANS</Link><span>  </span>
      <Link to='/all-plants'>ALL PLANTS</Link><span>  </span>
      <Link to='/lists'>LISTS</Link><span>  </span>
      <Link to='/all-animals'>ALL ANIMALS</Link><span>  </span>
    </div>
  )
}

export default NavLinks