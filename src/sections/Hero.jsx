import { useState } from "react";
import ha from "../assets/ha.png";
import hb from "../assets/hb.png";
import hc from "../assets/hc.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/MyContext";
const Hero = () => {
  const { data } = useContext(MyContext);
  console.log(...data);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    const result = data.filter((ca) => {
      return value && ca && ca.name && ca.name.toLowerCase().includes(value);
    });
    setResults(result);
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <main className="px-24 py-10 flex flex-row justify-center items-center gap-10 max-sm:flex-col max-md:flex-col max-sm:px-2">
      <div className="flex w-[50%] max-sm:w-[100%] flex-col justify-center ">
        <h3 className="text-black font-poppins text-[45px] ">
          Find <span className="partner">Partners</span> (CAs) available online
        </h3>
        <p className="text-[#616161] text-lg font-normal ">
          <span className="font-semibold">CONNECT</span> with us where your
          services are listed and visible to a myriad of businesses seeking CA’s
          for compliance support
        </p>
        <div className="relative flex-row flex py-2 w-full gap-1">
          <input
            type="text"
            className="w-full outline-none rounded-lg border border-1 p-3"
            placeholder="Search By Name"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button className="bg-[#0076CE] rounded-lg p-2 w-48 text-white">
            SEARCH
          </button>
        </div>
        <div className=" w-full h-4 rounded-lg z-10 ">
          {results &&
            results.map((ca) => {
              return (
                <Link
                  key={ca.id}
                  to={{
                    pathname: `/details/${ca.id}`,
                  }}
                  className="rounded-lg"
                >
                  <div
                    key={ca.id}
                    className="bg-white p-2 font-poppins cursor-pointer shadow-xl "
                  >
                    {ca.name}
                  </div>
                  <hr />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="flex gap-3">
        <img src={ha} alt="" className="mt-16 h-[400px] max-sm:h-[150px] " />
        <img src={hb} alt="" className="mb-16 max-sm:h-[150px]" />
        <img src={hc} alt="" className="mt-8 mb-8 max-sm:h-[150px]" />
      </div>
    </main>
  );
};

export default Hero;
