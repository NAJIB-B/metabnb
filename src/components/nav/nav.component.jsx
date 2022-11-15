import logo from "../../assets/nav_logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "./nav_mobile.component";
import { useState } from "react";
import ConnectWalletModal from "../connect_wallet_modal.component";
const Nav = () => {
  const navlinks = [
    { name: "Home", link: "" },
    { name: "Place to stay", link: "placeToStay" },
    { name: "NFTs", link: "" },
    { name: "Community", link: "" },
  ];

  const [mobileNav, setMobileNav] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const setWallet = () => {
    setConnectWallet(!connectWallet);
  };
  const setNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      {connectWallet ? (
        <ConnectWalletModal setWallet={setWallet}></ConnectWalletModal>
      ) : mobileNav ? (
        <MobileNav setNav={setNav} setWallet={setWallet}></MobileNav>
      ) : (
        <>
          <div className="flex w-[90%] m-auto justify-between pt-[2rem] items-baseline ">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="small:hidden">
              {navlinks.map((link) => {
                return (
                  <Link to={link.link} className="p-[2rem] medium:p-[1rem]">
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="small:hidden">
              <button
                className="bg-[#A02279] rounded-[10px] py-[0.8rem] px-[1.2rem] text-white"
                onClick={setWallet}
              >
                Connect wallet
              </button>
            </div>
            <div className="hidden small:block">
              <MenuIcon onClick={setNav}></MenuIcon>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
