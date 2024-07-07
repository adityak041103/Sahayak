import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent11: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  return (
    <header className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-21xl text-gray-200 font-inria-sans">
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mt-[-32px] text-5xl text-black mq750:pl-7 mq750:pr-7 mq750:box-border">
        <div className="flex-1 bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-x-auto flex flex-row items-start justify-center py-2 pr-5 pl-[23px] box-border gap-[0px_57px] max-w-full z-[1] mq750:gap-[0px_28px]">
          <div className="h-16 w-[1327px] relative bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 hidden" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-12 w-[100px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 z-[2]">
            <img
              className="absolute top-[0px] left-[0px] rounded-11xl w-[100px] h-12 cursor-pointer"
              alt=""
              src="/rectangle-291.svg"
              onClick={onRectangleClick}
            />
            <div className="absolute top-[8px] left-[18px] text-5xl font-inria-sans text-black text-left z-[1]">
              Home
            </div>
          </button>
          <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
            <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[18px] pl-[19px] bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
              <img
                className="h-12 w-[149px] relative rounded-11xl hidden"
                alt=""
                src="/rectangle-30.svg"
              />
              <div className="relative text-5xl font-inria-sans text-black text-left z-[1]">
                Dashboard
              </div>
            </button>
          </div>
          <div className="rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-2 pl-3.5 gap-[7px] z-[2]">
            <img
              className="h-12 w-40 relative rounded-11xl hidden"
              alt=""
              src="/rectangle-311.svg"
            />
            <div className="relative z-[1]">Complaints</div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <img
                className="w-3.5 h-3 relative object-contain z-[1]"
                alt=""
                src="/polygon-1-11.svg"
              />
            </div>
          </div>
          <div className="rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-[3px] pl-[15px] gap-[7px] z-[2]">
            <img
              className="h-12 w-[121px] relative rounded-11xl hidden"
              alt=""
              src="/rectangle-32.svg"
            />
            <div className="relative z-[1]">Manage</div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <img
                className="w-3.5 h-3 relative object-contain z-[1]"
                alt=""
                src="/polygon-1-11.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-4 bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
            <img
              className="h-12 w-[121px] relative rounded-11xl hidden"
              alt=""
              src="/rectangle-32.svg"
            />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[1]">
              Circulars
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-[13px] bg-black rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-darkslategray-100">
            <img
              className="h-12 w-24 relative rounded-11xl hidden"
              alt=""
              src="/rectangle-341.svg"
            />
            <div className="relative text-5xl font-inria-sans text-white text-left z-[1]">
              Profile
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent11;
