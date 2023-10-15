const JoinCard = ({ name, num, desc, fee, day }) => {
  return (
    <div>
      <div className="h-[230px] w-[300px] rounded-lg p-1 shadow-xl m-2 flex flex-col justify-center items-center text-center bg-white border-1 border-slate-100 border relative">
        <div className="absolute top-[-10px] left-[-10px] rounded-lg p-1 h-10 w-10 bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-white font-bold text-center flex items-center justify-center">
          {num}
        </div>
        <h2 className="font-poppins text-lg py-1">{name} </h2>
        <p className="font-sm py-1">{desc}</p>
        <div className="bg-[#F4F4F4] flex justify-start items-center gap-5 px-2 rounded-lg p-1 mt-2">
          <div>
            <h6 className="font-poppins text-[#0076CE] py-1">Due Date</h6>
            <p>Within {day} days</p>
          </div>
          <div>
            <h6 className="font-poppins text-[#F66] py-1">Penalty Fees</h6>
            <p>
              <span className="font-bold underline">&#8377;{fee}</span> for a
              company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
