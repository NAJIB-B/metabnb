import metamask from "../assets/metamask_icon.svg";
import opensea from "../assets/opensea_icon.svg";
const ConnectWalletModal = ({ setWallet }) => {
  return (
    <>
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white
      w-[75%] md:w-[35%]  rounded-[16px]"
      >
        <div className="flex justify-between w-[85%] m-auto pb-[1.5rem] pt-[1rem]">
          <h2 className="font-bold">Connect wallet</h2>
          <h2 onClick={setWallet} className="cursor-pointer">
            X
          </h2>
        </div>
        <hr />
        <div className="w-[85%] m-auto pb-[1.5rem] pt-[1rem]">
          <p>Choose your preferred wallet :</p>
        </div>

        <div className="w-[85%] m-auto border bg-[#CFD8DC] p-[0.8rem] rounded-[12px] flex justify-between mb-[1.5rem]">
          <div className="flex item-baseline">
            <img src={metamask} alt="" />
            <p className="pl-[1rem] pt-[0.5rem]"> Metamask</p>
          </div>
          <div>
            <h1>&gt;</h1>
          </div>
        </div>
        <div className="w-[85%] m-auto border bg-[#CFD8DC] p-[0.8rem]  rounded-[12px] flex justify-between mb-[1.5rem]">
          <div className="flex items-strecth">
            <img src={opensea} alt="" />
            <p className="pl-[1rem] pt-[0.5rem]"> WalletConnect</p>
          </div>
          <div>
            <h1>&gt;</h1>
          </div>
        </div>
      </div>
      <div
        className="absolute z-40 top-0 left-0 bg-[#4040404d] w-full h-full overflow-hidden
      "
        onClick={setWallet}
      ></div>
    </>
  );
};

export default ConnectWalletModal;
