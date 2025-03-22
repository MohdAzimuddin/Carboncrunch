import logo from "./image/carboncrunch.png";
 
export const CarboncrunchNav = () => {
  return (
    <nav className="flex flex-col gap-4 lg:gap-2 lg:flex-row items-center justify-between p-6 mx-4 md:mx-8">
      {/* logo     */}
      <div className="flex items-center justify-center">
        <img src={logo} alt="carboncrunch" className="w-10 mr-2" />
        <h2 className="font-semibold text-lg">Carboncrunch</h2>
      </div>
      {/*Navigation */}
      <ul className=" font-semibold flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-10 p-3 bg-white justify-center items-center w-full md:w-auto md:flex-row shadow-sm rounded-xl">
        <li className="cursor-pointer text-sm md:text-lg hover:text-zinc-500 active:text-zinc-100">
          Home
        </li>
        <li className="cursor-pointer text-sm md:text-lg hover:text-zinc-500 active:text-zinc-100">
          Services
        </li>
        <li className="cursor-pointer text-sm md:text-lg hover:text-zinc-500 active:text-zinc-100">
          Blog
        </li>
        <li className="cursor-pointer text-sm md:text-lg hover:text-zinc-500 active:text-zinc-100">
          About Us
        </li>
        <li className="cursor-pointer text-sm md:text-lg hover:text-zinc-500 active:text-zinc-100">
          Contact
        </li>
      </ul>
      {/* button */}
      <div className="flex items-center justify-center">
        <button className="px-7 py-1 bg-green-200 mr-2 rounded-xl text-green-900 font-semibold cursor-poniter hover:bg-green-400  active:bg-green-100 transition">
          Login
        </button>
        <button className="hidden md:block px-5 py-1 bg-green-500 rounded-xl font-semibold text-zin-800 cursor-pointer hover:bg-green-700 active:bg-green-100 transition">
          Book Demo
        </button>
      </div>
    </nav>
  );
};
