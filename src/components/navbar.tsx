import { NavLink } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  // const titleLogo = dataNavbar(navbarItemActive).logo.title.split(' ');

  return (
    <nav className='flex md:flex-col min-w-[29px] justify-center bg-app-white md:ml-auto md:pt-40 md:px-3 md:pl-6'>
      {/* <NavLink to='/'>
        <h1 className='py-14 border-b text-center text-app-blue-dark text-[1.625rem] border-app-gray-100'>
          <span className='font-bold'>{titleLogo[0]}</span>
          <span className='ml-2 font-light'>{titleLogo[1]}</span>
        </h1>
      </NavLink> */}
      <ul className='flex md:flex-col md:gap-y-10 flex-row gap-x-14 py-6 px-4 border-4 rounded-2xl border-red-500'>
        {dataNavbar(navbarItemActive).nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className='flex flex-row items-center text-app-gray-500'
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            {item.icon}
            <span
              className={`text-base font-medium ${
                item.id === navbarItemActive
                  ? 'text-app-primary' 
                  : 'text-app-gray-500 '
              }`}
            >
              {/* {item.title} */}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
