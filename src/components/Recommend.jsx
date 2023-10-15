/* eslint-disable react/prop-types */
const Recommend = ({ data }) => {
  const rand = Math.floor(Math.random() * 10);

  return (
    <div className="container  rounded-lg shadow-xl my-5">
      <img
        src={`https://picsum.photos/id/1/200/300`}
        alt="Image Unavailable "
        className="rounded-lg h-48 w-full p-1"
      />
      <div className="px-2 flex justify-between items-center">
        <h2 className="text-md font-poppins">About {data[rand].name}</h2>
        <p className="font-bold">{data[rand].price}</p>
      </div>
      <p className="px-2 text-xs my-2">
        I will do business evaluation and corporate services
      </p>
      <p className="px-2 text-xs font-semibold ">
        <span className="text-[#0076CE] font-semibold">
          {data[rand].rating}
        </span>
        ({data[rand].reviewCount})
      </p>
      <button className="bg-[#0076CE] py-1 w-[90%] mx-4 my-2 text-white font-normal rounded-lg">
        View Services
      </button>
    </div>
  );
};

export default Recommend;
