import frame from "../assets/Frame 151.png";
import frame2 from "../assets/Frame 151 (2).png";
import frame3 from "../assets/Frame 151 (3).png";
import frame4 from "../assets/Frame 151 (4).png";
import frame5 from "../assets/Frame 151 (5).png";
import frame6 from "../assets/Frame 151 (6).png";
import frame7 from "../assets/Frame 151 (7).png";
import frame1 from "../assets/Frame 151 (1).png";
import frame8 from "../assets/Frame 151 (8).png";
import frame9 from "../assets/Frame 151 (9).png";
import frame10 from "../assets/Frame 151 (10).png";
import frame11 from "../assets/Frame 151 (11).png";
import frame12 from "../assets/Frame 151 (12).png";
import frame13 from "../assets/Frame 151 (13).png";
import frame14 from "../assets/Frame 151 (14).png";
import frame15 from "../assets/Frame 151 (15).png";
import { Icon } from "@iconify/react";

const Place_to_stay = () => {
  const images = [
    frame4,
    frame5,
    frame6,
    frame7,
    frame,
    frame1,
    frame2,
    frame3,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
    frame13,
    frame14,
    frame15,
  ];
  return (
    <>
      <div className="flex pt-[2.5rem] justify-between lg:w-[90%] lg:m-auto   overflow-x-auto noslider">
        <div className="flex-shrink-0 pr-[1.5rem] pl-[0.5rem]">
          <h3>Resturant</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>Cottage</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>Castle</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>fantast city</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>beach</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>Carbins</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>Off-grid</h3>
        </div>
        <div className="flex-shrink-0 pr-[1.5rem]">
          <h3>Farm</h3>
        </div>
        <div className="flex justify-between flex-shrink-0 pr-[1.5rem] items-center border p-[0.5rem] relative top-[-8px]">
          <h3 className="pr-[0.5rem]">Location</h3>
          <Icon icon="mingcute:settings-2-fill" />
        </div>
      </div>
      <div className="w-[90%] mt-[2rem]  m-auto">
        <div className="flex flex-wrap  p-[1.5rem]">
          {images.map((image) => {
            return (
              <div className="flex-[98%] md:flex-[47%] lg:flex-[22%] border rounded-[12px] p-[1rem] mx-[10px] my-[1.5rem]">
                <img src={image} alt="" className="w-full" />
                <div className="flex justify-between ">
                  <div>
                    <p className="text-[14px]">Desert King</p>
                    <p className="text-[14px]">2345km away</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[14px] ">
                      <b>1MBT per night</b>
                    </p>
                    <p className="text-[14px]">available for 2 weeks stay</p>
                  </div>
                </div>
                <div className="flex">
                  <Icon icon="clarity:star-solid" color="#a02279" width="15" />
                  <Icon icon="clarity:star-solid" color="#a02279" width="15" />
                  <Icon icon="clarity:star-solid" color="#a02279" width="15" />
                  <Icon icon="clarity:star-solid" color="#a02279" width="15" />
                  <Icon icon="clarity:star-solid" color="#a02279" width="15" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Place_to_stay;
