import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiFillStar, AiTwotoneCalendar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import MyContext from "../context/MyContext";
import { Link, useParams } from "react-router-dom";
import Recommend from "../components/Recommend";

const DetailsPage = () => {
  const params = useParams();

  const { data } = useContext(MyContext);
  const profile = data[params.id - 1];

  return (
    <>
      <Navbar />
      <Link to="/" className="flex justify-end px-24 py-5 max-sm:px-2">
        <button className="bg-[#0076CE] px-2 py-1 text-white font-poppins rounded-lg">
          Back to Search
        </button>
      </Link>
      <section className="bg-white">
        <div className="px-24 py-5 flex  gap-10 justify-between max-sm:px-2 max-sm:flex-col">
          <div className="left flex   flex-col gap-5">
            <h2 className="text-2xl font-poppins">{profile?.name}</h2>
            <p>{profile.intro}</p>
            <div className="flex gap-2 items-center justify-start">
              <AiFillStar className="text-[#0076CE]" />
              <p className="">
                <span className="text-[#0076CE] font-semibold">
                  {profile.rating}
                </span>
                ({profile.reviewCount})
              </p>
            </div>
            <div className="container w-full h-36 rounded-lg shadow-xl px-3">
              <div className="flex justify-between items-center p-1 ">
                <p className="text-md">{profile.taskComplexity}</p>
                <p className="font-bold">{profile.price}</p>
              </div>

              <div className="flex items-center justify-start gap-1 mt-4">
                <AiTwotoneCalendar className="text-[#0076CE]" />
                <p className="text-sm">{profile.deliveryTime}</p>
              </div>
              <div className="flex gap-5 mt-4 justify-between items-center ">
                <button className="rounded-lg text-center flex items-center justify-center bg-[#0076CE]  text-white p-2 text-sm px-4">
                  Request Proposal
                </button>
                <button className="rounded-lg text-center flex items-center justify-center border border-1 border-[#0076CE] text-[#0076CE] p-2 text-sm px-4">
                  Chat With Me
                </button>
              </div>
            </div>
            <div className="container w-full h-60 rounded-lg shadow-xl mt-4 p-4 flex flex-col gap-5 items-center">
              <h2 className="text-2xl font-poppins">What People Say?</h2>
              <p className="text-sm">{profile.testimonial.text}</p>
              <BsThreeDots className="" />
            </div>
          </div>

          <div className="flex  flex-col gap-5 justify-center px-2">
            <img
              src={
                profile.image
                  ? profile.image
                  : `https://picsum.photos/id/1/200/300`
              }
            />
            <h2 className="text-2xl font-poppins">About {profile.name}</h2>
            <div className="flex flex-row justify-start items-center gap-10 mt-2 max-sm:justify-center">
              <div className="flex flex-col">
                <p className="font-poppins text-xs">FROM</p>
                <p className="text-xl">{profile.about.from}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins text-xs">PARTNER SINCE</p>
                <p className="text-xl">{profile.about.partnerSince}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins text-xs">AVERAGE RESPONSE TIME</p>
                <p className="text-xl">{profile.about.averageResponseTime}</p>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <p className="font-poppins text-xs">ABOUT</p>
              <p className="text-md">{profile.about.description}</p>
            </div>
            <div className="flex gap-5 justify-around">
              <div className="flex flex-col mt-2 ">
                <p className="font-poppins text-xs">SERVICES I OFFER</p>
                <ul className="list-disc px-4">
                  {profile?.about.services.map((service, i) => {
                    return <li key={i}>{service}</li>;
                  })}
                </ul>
              </div>
              <div className="flex flex-col mt-2">
                <p className="font-poppins text-xs">WHY ME?</p>
                <ul className="list-disc ">
                  {profile?.about.benefits.map((service, i) => {
                    return <li key={i}>{service}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-24 my-10 max-sm:px-2">
          <h2 className="text-2xl font-poppins">Recommended for you</h2>
          <div className="flex gap-10 justify-between items-center max-sm:flex-col max-md:flex-col">
            <Recommend data={data} />
            <Recommend data={data} />
            <Recommend data={data} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailsPage;
