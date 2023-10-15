import hat from "../assets/hat.png";
import enquire from "../assets/enquire.png";
import report from "../assets/report.png";
import search from "../assets/search.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
const Platform = () => {
  return (
    <section className="mt-2 flex flex-row gap-10 justify-center items-center px-24 pb-10 max-sm:px-2 max-sm:gap-5 max-sm:flex-col">
      <div className="w-[40%] max-sm:w-full">
        <h1 className=" font-poppins text-[50px] max-sm:text-center">
          <span className="partner"> All-in-One</span> platform that Makes
          Easier
        </h1>
        <p className="text-lg font-medium  max-sm:text-center">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="flex gap-10 flex-row justify-center items-center mt-2  p-1">
          <div className="flex gap-3 justify-center items-center">
            <img src={search} alt="" />
            <p className="text-md">
              <span className="font-bold">SEARCH</span> for vital company
              information{" "}
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <img src={enquire} alt="" />
            <p className="text-md">
              <span className="font-bold">CONNECT</span> with the resources to
              meet your business needs
            </p>
          </div>
        </div>
        <div className="flex gap-10 flex-row justify-center items-center  p-1 mt-2">
          <div className="flex gap-3 justify-center items-center">
            <img src={report} alt="" />
            <p className="text-md">
              <span className="font-bold">RESEARCH</span> and generate reports
              that drive growth
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <img src={hat} alt="" />
            <p className="text-md">
              <span className="font-bold">ACADEMY</span> to give you the skills
              for success in your career
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 max-sm:mt-5">
          <div className="flex flex-row justify-center max-sm:px-1 gap-1">
            <div className="flex flex-col gap-1 justify-start items-end">
              <div className="h-10 w-60 max-sm:h-3 max-sm:w-10 ml-10 bg-[#EFD9F9] rounded-lg"></div>
              <div className="h-10 w-72 max-sm:h-3 max-sm:w-16 ml-10 bg-[#EFD9F9] rounded-lg"></div>
              <div className="h-10 w-96 max-sm:h-3 max-sm:w-24 ml-10 bg-[#EFD9F9] rounded-lg"></div>
              <div className="h-10 w-96 max-sm:h-3 max-sm:w-24 ml-10 bg-[#DDF3FF] rounded-lg mt-5"></div>
              <div className="h-10 w-72 max-sm:h-3 max-sm:w-16 ml-10 bg-[#DDF3FF] rounded-lg"></div>
            </div>
            <div className="bg-sir flex items-center justify-center  mt-2">
              <img src={man} alt="man" width="200px" className=" max-sm:w-32" />
            </div>
          </div>
          <div className="bg-mam flex items-center  mt-2">
            <img src={woman} alt="" width="220px" className="max-sm:w-48" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
