import logo from "../assets/logo.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center flex-row ">
      <div className="h-[80px] w-full px-6 py-1 flex justify-between items-center max-sm:flex-row max-sm:mt-10">
        <img src={logo} alt="" className="max-sm:text-center" />
        <div className="flex flex-row justify-start items-center bg-transparent mr-48 gap-16 text-black font-bold max-sm:gap-1 max-sm:hidden max-md:hidden">
          <select name="" id="" className="text-black pl-10 bg-transparent">
            <option value="Solutions">Solutions</option>
          </select>
          <select name="" id="" className="bg-transparent">
            <option value="Features">Features</option>
          </select>
          <p>Blogs</p>

          <select name="" id="" className=" bg-transparent">
            <option value="">About</option>
          </select>
        </div>
        <div className="flex flex-row gap-10 font-bold">
          <button className="rounded-lg border-solid border-2 border-[#0076CE] px-2 py-1 text-blue-500">
            Login
          </button>
          <Button name="Register" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
