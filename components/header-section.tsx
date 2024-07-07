import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HeaderSectionType = {
  user11447091?: string;
  rectangle31?: string;
  circulars?: string;
  rectangle34?: string;

  /** Style props */
  headerPadding?: CSSProperties["padding"];
  closeComplaintTextPadding?: CSSProperties["padding"];
  complaintsBackgroundColor?: CSSProperties["backgroundColor"];
  circularsIconColor?: CSSProperties["color"];
  profileBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];

  /** Action props */
  onRectangleClick?: () => void;
};

const HeaderSection: NextPage<HeaderSectionType> = ({
  user11447091,
  rectangle31,
  circulars,
  rectangle34,
  headerPadding,
  closeComplaintTextPadding,
  complaintsBackgroundColor,
  circularsIconColor,
  profileBackgroundColor,
  propColor,
  onRectangleClick,
}) => {
  const headerRectangleStyle: CSSProperties = useMemo(() => {
    return {
      padding: headerPadding,
    };
  }, [headerPadding]);

  const homeTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: closeComplaintTextPadding,
    };
  }, [closeComplaintTextPadding]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: complaintsBackgroundColor,
    };
  }, [complaintsBackgroundColor]);

  const complaints1Style: CSSProperties = useMemo(() => {
    return {
      color: circularsIconColor,
    };
  }, [circularsIconColor]);

  const groupButton1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
    };
  }, [profileBackgroundColor]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <header
      className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-21xl text-gray-200 font-inria-sans"
      style={headerRectangleStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between pt-0 pb-8 pr-[57px] pl-2 box-border relative max-w-full gap-[20px] mq725:pr-7 mq725:box-border mq975:flex-wrap">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(228,_228,_228,_0.68)_0.01%,_rgba(179,_174,_167,_0.69))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]" />
        <div className="w-[453px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
          <img
            className="h-[107px] w-36 relative object-cover z-[2] mq450:flex-1"
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[201px]">
            <h2 className="m-0 h-[42px] relative text-inherit font-bold font-inherit inline-block shrink-0 whitespace-nowrap z-[2]">
              SAHAYAK PORTAL
            </h2>
          </div>
        </div>
        <div
          className="w-[220px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-6xl text-black"
          style={homeTextStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px_0px]">
            <div className="self-stretch h-12 relative">
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[0px] left-[0px] rounded-11xl bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-full" />
                <img
                  className="absolute top-[0px] left-[0px] w-12 h-12 object-cover z-[2]"
                  alt=""
                  src={user11447091}
                />
                <img
                  className="absolute top-[19px] left-[189px] w-4 h-3.5 object-contain z-[2]"
                  alt=""
                  src="/frame-group.svg"
                />
              </div>
              <div className="absolute top-[10px] left-[57px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[2]">
                User name
              </div>
            </div>
            <div className="flex flex-row items-start justify-end py-0 pr-[38px] pl-[59px] text-xl text-gray-500">
              <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3]">
                Administrator
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mt-[-35px] text-5xl text-white mq725:pl-[27px] mq725:pr-[27px] mq725:box-border">
        <div className="flex-1 bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-x-auto flex flex-row items-start justify-center py-2 pr-5 pl-[23px] box-border gap-[0px_57px] max-w-full z-[3] mq725:gap-[0px_28px]">
          <div className="h-16 w-[1327px] relative bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 hidden" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-12 w-[100px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 z-[4]">
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
            <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[18px] pl-[19px] bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[4] hover:bg-gainsboro-100">
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
          <div
            className="rounded-11xl bg-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-2 pl-3.5 gap-[7px] z-[4]"
            style={groupDiv1Style}
          >
            <img
              className="h-12 w-40 relative rounded-11xl hidden"
              alt=""
              src={rectangle31}
            />
            <div className="relative z-[1]" style={complaints1Style}>
              Complaints
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <img
                className="w-3.5 h-3 relative object-contain z-[1]"
                alt=""
                src={circulars}
              />
            </div>
          </div>
          <div className="rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-[3px] pl-[15px] gap-[7px] z-[4] text-black">
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
          <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-4 bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[4] hover:bg-gainsboro-100">
            <img
              className="h-12 w-[121px] relative rounded-11xl hidden"
              alt=""
              src="/rectangle-32.svg"
            />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[1]">
              Circulars
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-[13px] bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[4] hover:bg-gainsboro-100"
            style={groupButton1Style}
          >
            <img
              className="h-12 w-24 relative rounded-11xl hidden"
              alt=""
              src={rectangle34}
            />
            <div
              className="relative text-5xl font-inria-sans text-black text-left z-[1]"
              style={profileStyle}
            >
              Profile
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
