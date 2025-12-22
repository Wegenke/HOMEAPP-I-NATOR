
const NavLinks = ({setSubMenu, contextItems}) => {
  return(
    <div>
        {
            contextItems.map((item) => (
                <button key={item.value} onClick={() => setSubMenu(item.value)}>
                    {item.displayText}
                </button>
            ))
        }
    </div>
  )
}

export default NavLinks