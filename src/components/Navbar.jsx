import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className='py-5 px-16 fixed top-0 z-50 w-full bg-orange-900'>
      <div className='flex items-center justify-between'>
        <p className='font-extrabold text-white text-2xl'>coding</p>

        <GiHamburgerMenu className='block md:hidden text-white size-10 rounded-full p-2 cursor-pointer hover:bg-green-700' />

        <ul className='hidden md:flex gap-x-8 text-white font-bold'>
          <li><a href="" className='underline-offset-4 hover:underline'>Home</a></li>
          <li><a href="" className='underline-offset-4 hover:underline'>About us</a></li>
        </ul>
      </div>
    </nav>
  );
}