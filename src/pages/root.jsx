import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive, isPending }) =>
  isActive? 'text-gray-500 mr-4' : 'text-blue-500 mr-4' 

function Root() {
  return (
    <div className='m-4'>
      <div className='pb-4 border-b-2 mb-4'>
        <NavLink className={navLinkClass} to='/' >Home</NavLink>
        <NavLink className={navLinkClass} to='editor' >Editor</NavLink>
        <NavLink className={navLinkClass} to='glyphs' >Glyphs</NavLink>
        <NavLink className={navLinkClass} to='words' >Words</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;