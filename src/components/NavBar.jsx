import { headerLogo } from '../assets/images/index';
import { hamburger } from '../assets/icons/index';
import { navLinks } from '../constants/index';
import { useNavigate } from 'react-router-dom';
import shu from '../assets/images/shu.png'

const NavBar = () => {
  const toggleMenu = () => {};
  const Navigate =useNavigate();

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="./" className="">
          <img src={shu} alt="Logo" width={130} height={29} />
        </a>

        <ul className="max-lg:hidden flex-1 flex justify-center items-center gap-16">
          {navLinks.map((navLink) => (
            <li onClick={()=>{Navigate('/'+navLink.href)}}
              key={navLink.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {navLink.label}
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="Menu"
            className="cursor-pointer"
            width={25}
            height={25}
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
