import mbToken from "../assets/mbToken.svg";
import metamask from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";

const LogosAfterTop = () => {
  return (
    <>
      <div className="small:flex-col flex justify-around bg-[#A02279] p-[1rem] mt-[2rem]">
        <img
          src={mbToken}
          alt=""
          className="small:w-[70%] inline-block m-auto pt-[0.5rem]"
        />
        <img
          src={metamask}
          alt=""
          className="small:w-[70%] inline-block m-auto pt-[0.5rem]"
        />
        <img
          src={opensea}
          alt=""
          className="small:w-[70%] inline-block m-auto pt-[0.5rem]"
        />
      </div>
    </>
  );
};

export default LogosAfterTop;
