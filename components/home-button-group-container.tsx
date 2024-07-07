import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HomeButtonGroupContainerType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  productDimensionsCode?: string;

  /** Style props */
  rectangleIconGap?: CSSProperties["gap"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onRectangleClick?: () => void;
};

const HomeButtonGroupContainer: NextPage<HomeButtonGroupContainerType> = ({
  dimensionCode,
  dimensionCodeText,
  productDimensionsCode,
  rectangleIconGap,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  onRectangleClick,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: rectangleIconGap,
    };
  }, [rectangleIconGap]);

  const groupButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const complaintsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mt-[-32px] text-left text-5xl text-black font-inria-sans mq750:pl-7 mq750:pr-7 mq750:box-border">
      <div
        className="flex-1 bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-x-auto flex flex-row items-start justify-center py-2 pr-5 pl-[23px] box-border gap-[0px_57px] max-w-full z-[1] mq750:gap-[0px_28px]"
        style={frameDivStyle}
      >
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
          <button
            className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[18px] pl-[19px] bg-black rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-darkslategray-100"
            style={groupButtonStyle}
          >
            <img
              className="h-12 w-[149px] relative rounded-11xl hidden"
              alt=""
              src={dimensionCode}
            />
            <div
              className="relative text-5xl font-inria-sans text-white text-left z-[1]"
              style={dashboardStyle}
            >
              Dashboard
            </div>
          </button>
        </div>
        <div
          className="rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-2 pl-3.5 gap-[7px] z-[2]"
          style={groupDivStyle}
        >
          <img
            className="h-12 w-40 relative rounded-11xl hidden"
            alt=""
            src={dimensionCodeText}
          />
          <div className="relative z-[1]" style={complaintsStyle}>
            Complaints
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <img
              className="w-3.5 h-3 relative object-contain z-[1]"
              alt=""
              src={productDimensionsCode}
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
        <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-[13px] bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
          <img
            className="h-12 w-24 relative rounded-11xl hidden"
            alt=""
            src="/rectangle-34.svg"
          />
          <div className="relative text-5xl font-inria-sans text-black text-left z-[1]">
            Profile
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeButtonGroupContainer;
