import BottomSection from "../components/bottom_section.component";
import LogosAfterTop from "../components/logos_after_top.component";
import MiddleSection from "../components/midde_section.component";
import TopSection from "../components/top_section.component";
import { useContext, useEffect } from "react";
import { MetaContext } from "../context";

const Home = () => {
  const { setMobileNav } = useContext(MetaContext);
  useEffect(() => {
    setMobileNav(false);
  }, []);
  return (
    <>
      <TopSection></TopSection>
      <LogosAfterTop></LogosAfterTop>
      <MiddleSection></MiddleSection>
      <BottomSection></BottomSection>
    </>
  );
};

export default Home;
