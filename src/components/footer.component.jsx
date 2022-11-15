import logo from "../assets/footer_logo.svg";
import facebook from "../assets/facebook_logo.svg";
import instagram from "../assets/instagram_logo.svg";
import twitter from "../assets/twitter_logo.svg";

const Footer = () => {
  return (
    <>
      <div className="flex p-[1.5rem] bg-[#1D1D1E] text-white small:flex-col">
        <div className="flex-[25%] pb-[0.8rem] lg:pl-[3rem]">
          <img src={logo} alt="" className="pb-[4rem]" />

          <div className="flex pb-[1.5rem] gap-3">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>

          <p>© 2022 Metabnb</p>
        </div>
        <div className="flex-[75%]">
          <div className="flex justify-around small:flex-col">
            <div className="pb-[0.8rem]">
              <h2 className="font-bold pb-[1rem]">Community</h2>
              <ul className="list-none">
                <li className="pb-[0.5rem]">NFT</li>
                <li className="pb-[0.5rem]">Tokens</li>
                <li className="pb-[0.5rem]">Landlords</li>
                <li className="pb-[0.5rem]">Discord</li>
              </ul>
            </div>
            <div className="pb-[0.8rem]">
              <h2 className="font-bold pb-[1rem]">Places</h2>
              <ul className="list-none">
                <li className="pb-[0.5rem]">Castle</li>
                <li className="pb-[0.5rem]">Farms</li>
                <li className="pb-[0.5rem]">Beach</li>
                <li className="pb-[0.5rem]">Learn more</li>
              </ul>
            </div>
            <div className="pb-[0.8rem]">
              <h2 className="font-bold pb-[1rem]">About us</h2>
              <ul className="list-none">
                <li className="pb-[0.5rem]">Road map</li>
                <li className="pb-[0.5rem]">Creators</li>
                <li className="pb-[0.5rem]">Career</li>
                <li className="pb-[0.5rem]">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
