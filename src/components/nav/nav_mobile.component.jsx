import { Link } from "react-router-dom";

const MobileNav = ({ setNav, setWallet }) => {
  const navlinks = [
    { name: "Home", link: "" },
    { name: "Place to stay", link: "placeToStay" },
    { name: "NFTs", link: "" },
    { name: "Community", link: "" },
  ];
  return (
    <>
      <div
        className="fixed  top-0 left-0  flex z-30 bg-[#4040404d]  justify-center
       pt-[4rem] w-full h-[100vh] text-center overflow-hidden"
      >
        <div className="absolute top-[1.5rem] right-[2rem]">
          <h1 onClick={setNav} className="text-white text-[1.5rem]">
            X
          </h1>
        </div>
        <ul className="">
          {navlinks.map((link) => {
            return (
              <li className="pb-[2rem] font-bold text-white">
                <Link to={link.link}> {link.name}</Link>
              </li>
            );
          })}

          <li>
            <button
              className="bg-[#A02279] rounded-[10px] py-[0.8rem] px-[1.2rem] text-white"
              onClick={setWallet}
            >
              Connect button
            </button>
          </li>
        </ul>
      </div>
      <div
        className="fixed z-20 top-0 left-0 bg-[#404040b3] blur-[16px] w-full h-[100%] overflow-hidden
      "
      ></div>
    </>
  );
};
export default MobileNav;
