import JoinCard from "../components/JoinCard";

const JoinUs = () => {
  return (
    <section className="px-24 max-sm:px-1 max-sm:py-5">
      <h1 className="text-center font-poppins text-[50px] ">
        Want to <span className="partner">Join</span> Us?
      </h1>
      <div className="bg-join mt-2">
        <p className="text-center text-xl font-medium">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
        <div className="flex gap-10 mt-2 flex-wrap justify-center items-center">
          <JoinCard
            name="Commencement of business"
            desc="Invested shareholders must confirm payment and office address "
            day={180}
            fee="50000"
            num="1st"
          />
          <JoinCard
            name="Auditor Appointment"
            desc="Company informs new auditor and submits ADT.1 form to ROC. "
            day={30}
            fee="30000"
            num="2nd"
          />
          <JoinCard
            name="DIN eKYC"
            desc="Directors share personal information for identification & verification . "
            day="Every year"
            fee="5000"
            num="3rd"
          />
          <JoinCard
            name="DPT-3"
            desc="Companies report money taken from people to ROC; auditors confirm details.. "
            day={30}
            fee="300"
            num="4th"
          />

          <JoinCard
            name=" MCA Form AOC-4"
            desc="It's like an official report card for a company's documents "
            day="On or before 30th November"
            fee="200"
            num="5th"
          />
          <JoinCard
            name="MCA Form MGT-7"
            desc="Companies must annually report activities and finances to the registrar."
            day="On or before 31st December"
            fee="200"
            num="6th"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
