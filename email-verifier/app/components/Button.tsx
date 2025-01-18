const Button = ({ title, textSize }: { title: string; textSize: string }) => {
  return (
    <button
      className="rounded-[1.2rem] overflow-hidden  relative p-[.1rem] bg-gradient-to-b from-[#7AA7EA]  via-[#4A2FAC] to-[#4837B0] 
              after:absolute after:w-full after:h-full after:left-0 after:top-0  after:z-[1]   after:rounded-[1.2rem]"
    >
      <span
        className={` block relative leading-[120%]  z-[2] rounded-[1.2rem] font-medium  text-white ${textSize}  py-[1.6rem] px-[3rem]  bg-gradient-to-r from-[#531FAD_0%]  via-[#3A78D0_50%] to-[#1683DC_100%] `}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
