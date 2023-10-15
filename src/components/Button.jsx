const Button = ({ name }) => {
  return (
    <div>
      <button className="rounded-lg border-solid border-2 border-[#0076CE] px-2 py-1 text-white bg-[#0076CE]">
        {name}
      </button>
    </div>
  );
};

export default Button;
