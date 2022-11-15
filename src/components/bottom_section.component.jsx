import image from "../assets/bottom_section_img.svg";

const BottomSection = () => {
  return (
    <>
      <div className="bg-[rgb(160,34,121)] p-[3rem] lg:py-[4.5rem] flex text-white small:flex-col">
        <div className="flex-[40%]  small:w-[100%] lg:pt-[6rem]">
          <h1 className="font-bold text-[2rem] pb-[2.5rem] lg:text-[3rem] w-[90%]">
            Metabnb NFTs
          </h1>
          <p className="pb-[2.5rem] lg:w-[90%]">
            Discover our NFT gift cards collection.Loyal customer get amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </p>
          <button className="bg-white text-[#a02279] rounded-[8px]  py-[0.8rem] px-[1.3rem] ">
            Learn more
          </button>
        </div>
        <div className="flex-[60%] text-center">
          <img src={image} alt="" className="inline-block m-auto"></img>
        </div>
      </div>
    </>
  );
};

export default BottomSection;
