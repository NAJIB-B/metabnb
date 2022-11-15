import frame from "../assets/Frame 151.png";
import frame2 from "../assets/Frame 151 (2).png";
import frame3 from "../assets/Frame 151 (3).png";
import frame4 from "../assets/Frame 151 (4).png";
import frame5 from "../assets/Frame 151 (5).png";
import frame6 from "../assets/Frame 151 (6).png";
import frame7 from "../assets/Frame 151 (7).png";
import frame1 from "../assets/Frame 151 (1).png";
import { Icon } from "@iconify/react";

const MiddleSection = () => {
  const images = [
    frame,
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
  ];
  return (
    <>
      <div className="w-[90%] mt-[2rem]  m-auto">
        <h1 className="text-center font-bold lg:text-[2.3rem]">
          Inspiration for your next adventure
        </h1>
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

export default MiddleSection;
