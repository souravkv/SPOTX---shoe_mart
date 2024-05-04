import { headerLogo } from '../assets/images/index';
import { hamburger } from '../assets/icons/index';
import { navLinks } from '../constants/index';
import { useNavigate } from 'react-router-dom';
import shu from '../assets/images/shu.png'

const NavBar = () => {
  const toggleMenu = () => {};
  const Navigate =useNavigate();

  return (
    <div className=" fixed z-20  bg-zinc-900 w-full px-20  py-8  flex  justify-between  items-center">
      <div className='logo'></div>
      <div className='links'> {["Services","What I used ","Login","About Me","Collection"].map((items,index)=>{
        return(<a key={index} onClick={()=>{Navigate('/log')}}  className='   font-["Neue_Montreal"] gap-24 px-5 text-md  hover:text-slate-400 hover:cursor-wait  capitalize font-light'>{items}</a>)
      })}</div>

    </div>
  );
};

export default NavBar;
