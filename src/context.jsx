import { createContext } from "react";
import { useState } from "react";
export const MetaContext = createContext({
  mobileNav: false,
  setMobileNav: () => {},
  setConnectWallet: () => {},
  connectWallet: false,
});

export const MetaProvider = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const setWallet = () => {
    setConnectWallet(!connectWallet);
  };
  const setNav = () => {
    setMobileNav(!mobileNav);
  };
  const value = {
    mobileNav,
    setNav,
    setMobileNav,
    setConnectWallet,
    connectWallet,
    setWallet,
  };
  return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
};
