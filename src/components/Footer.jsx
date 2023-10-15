import logo from "../assets/logo.png";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="w-full  bg-gradient-to-r from-[#0076CE] to-[#9400D3] ">
      <div className="px-24 py-2 flex gap-24 font-bold text-white max-sm:px-2 max-sm:text-xs max-sm:gap-1 max-sm:justify-around max-sm:items-center">
        <div>
          <img src={logo} alt="" className="invert" />
          <p className="text-white text-xs font-medium mt-2">
            India&apos;s first platform dedicated to <br /> simplifying partner
            search
          </p>
        </div>
        <div className="flex flex-row justify-center gap-24 max-sm:flex-col max-sm:gap-1">
          <p>COMPANY</p>
          <p>SOLUTIONS</p>
          <p>RESOURCES</p>
          <p>SUPPORT</p>
          <p>LEGAL</p>
        </div>
      </div>

      <div className="px-24 max-sm:px-2">
        <hr className="mt-10 px-24 max-sm:px-2" />
        <div className="flex flex-row justify-between items-center gap-10">
          <p className="text-white text-xs font-medium mt-4 ">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="mt-4 flex flex-row gap-5">
            <BiLogoFacebookCircle className="text-white" />
            <BiLogoInstagram className="text-white" />
            <BiLogoLinkedin className="text-white" />
            <BiLogoWhatsapp className="text-white" />
          </div>
        </div>
      </div>
      <div className="bg-black w-full p-1 mt-4 text-white text-center  pt-2 max-sm:text-[8px]">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
