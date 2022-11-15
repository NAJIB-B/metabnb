import { Outlet } from "react-router-dom";
import Footer from "../components/footer.component";
import Nav from "../components/nav/nav.component";

const Nav_and_footer = () => {
  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Nav_and_footer;
