import logo from "../images/Logo.svg";
import { pageLinks } from "../data";

function Navbar() {
  return (
    <nav className="bg-white h-16 fixed top-0 left-0 w-full shadow-md z-30">
      <div className="max-w-6xl mx-auto items-center flex h-full">
        <div className="p-8">
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <ul className="flex space-x-6 items-center capitalize">
            {pageLinks.map((pageLink) => {
              const { id, text, href } = pageLink;
              return (
                <li key={id} className="">
                  <a href={href} className="text-gray-700 font-jakarta">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="ml-auto space-x-4">
            <button className="bg-white border text-gray-800 px-6 py-2 rounded-md">Sign In</button>
            <button className="bg-black text-white px-6 py-2 rounded-md">Start for free</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
