import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HomeButtonGroupContainer from "../components/home-button-group-container";
import Footer from "../components/footer";

const Dashboard: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[687px_0px] tracking-[normal] mq450:gap-[172px_0px] mq750:gap-[343px_0px]">
      <header className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] max-w-full text-left text-21xl text-gray-200 font-inria-sans mq750:gap-[20px_0px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch [background:linear-gradient(180deg,_rgba(228,_228,_228,_0.68)_0.01%,_rgba(179,_174,_167,_0.69))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-end justify-between pt-0 pb-8 pr-[57px] pl-2 box-border max-w-full gap-[20px] mq750:flex-wrap mq750:pr-7 mq750:box-border">
            <div className="h-[139px] w-[1440px] relative [background:linear-gradient(180deg,_rgba(228,_228,_228,_0.68)_0.01%,_rgba(179,_174,_167,_0.69))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="w-[453px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
              <img
                className="h-[107px] w-36 relative object-cover z-[1] mq450:flex-1"
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[201px]">
                <h2 className="m-0 h-[42px] relative text-inherit font-bold font-inherit inline-block shrink-0 whitespace-nowrap z-[1]">
                  SAHAYAK PORTAL
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3.5 text-6xl text-black">
              <div className="flex flex-col items-start justify-start gap-[6px_0px]">
                <div className="rounded-11xl bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 gap-[9px] z-[1]">
                  <div className="h-12 w-[220px] relative rounded-11xl bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                  <img
                    className="h-12 w-12 relative object-cover z-[1]"
                    alt=""
                    src="/user-1144709-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pr-[7px] pl-0">
                    <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[1]">
                      User name
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                    <img
                      className="w-4 h-3.5 relative object-contain z-[1]"
                      alt=""
                      src="/frame-group.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 pr-10 pl-[57px] text-xl text-gray-500">
                  <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                    Administrator
                  </i>
                </div>
              </div>
            </div>
          </div>
          <HomeButtonGroupContainer
            dimensionCode="/rectangle-301.svg"
            dimensionCodeText="/rectangle-311.svg"
            productDimensionsCode="/polygon-1-11.svg"
            onRectangleClick={onRectangleClick}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
          <nav className="m-0 flex-1 bg-dimgray flex flex-row items-start justify-start pt-4 px-[93px] pb-[17px] box-border gap-[0px_56px] max-w-full whitespace-nowrap text-left text-5xl text-white font-inria-sans mq750:gap-[0px_28px] mq750:pl-[23px] mq750:pr-[23px] mq750:box-border mq1275:flex-wrap mq1275:pl-[46px] mq1275:pr-[46px] mq1275:box-border">
            <div className="h-[62px] w-[1327px] relative bg-dimgray hidden max-w-full" />
            <div className="w-48 flex flex-col items-start justify-start">
              <b className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                Department
              </b>
            </div>
            <b className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[1]">
              Total Complaints
            </b>
            <b className="relative z-[1]">Resolved</b>
            <b className="relative z-[1]">Pending</b>
            <b className="relative z-[1]">In-process</b>
            <b className="relative z-[1]">Closed</b>
          </nav>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Dashboard;
