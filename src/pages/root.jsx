import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive, isPending }) =>
  isActive? 'text-gray-500 mr-4' : 'text-blue-500 mr-4' 

function Root() {
  return (
    <div>
      <div>
        <NavLink className={navLinkClass} to='/' >Home</NavLink>
        <NavLink className={navLinkClass} to='all-glyphs' >All Glyphs</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;