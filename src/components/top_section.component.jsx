import img from "../assets/top_section_img.svg";
const TopSection = () => {
  return (
    <>
      <div className="flex w-[90%] m-auto p-[1rem] small:flex-col">
        <div className="flex-[60%] p-[2rem]">
          <h1 className="text-[4.5rem] text-left small:text-[3rem]">
            Rent a <span className="text-[#A02279]">Place </span> away from
            <span className="text-[#A02279]"> Home </span> in the
            <span className="text-[#A02279]"> Metaverse </span>
          </h1>
          <p className="text-[1rem] text-left small:text-[1rem] lg:hidden">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfortzone
          </p>
          <p className="lg:text-[1.6rem] lg:block text-left tracking-widest hidden">
            we provide you access to luxury and affordable houses <br /> in the
            metaverse, get a chance to turn your <br /> imagination to reality
            at your comfortzone
          </p>
          <input
            type="text"
            placeholder="Search for location"
            className="border 
          py-[0.7rem] 
          w-[65%]
          px-[1rem]
         rounded-l-md"
          />
          <input
            type="button"
            value="Search"
            className="bg-[#A02279] text-white py-[0.7rem] mt-[2rem]
            rounded-r-md
            w-[35%]
            px-[1rem]"
          />
        </div>
        <div className="flex-[40%] text-center">
          <img
            src={img}
            alt=""
            className="inline-block
            mt-[2rem]
            
          m-auto"
          />
        </div>
      </div>
    </>
  );
};

export default TopSection;
