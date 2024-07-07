import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type UserFormContainerType = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];

  /** Action props */
  onForgotPasswordGroupClick?: () => void;
};

const UserFormContainer: NextPage<UserFormContainerType> = ({
  propBackgroundColor,
  propBoxShadow,
  propBackgroundColor1,
  propBackgroundColor2,
  propBoxShadow1,
  propBackgroundColor3,
  onForgotPasswordGroupClick,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      boxShadow: propBoxShadow1,
    };
  }, [propBackgroundColor2, propBoxShadow1]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  return (
    <div className="w-[439px] bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start pt-7 px-[5px] pb-[163px] box-border gap-[26px_0px] min-w-[439px] max-w-full text-left text-xl text-gray-500 font-inria-sans lg:flex-1 mq750:pt-5 mq750:pb-[106px] mq750:box-border mq750:min-w-full">
      <div className="w-[439px] h-[722px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="w-40 flex flex-col items-start justify-start gap-[5.33px_0px]">
          <div className="flex flex-row items-start justify-start py-0 px-3.5">
            <img
              className="h-[120px] w-[120px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/user-149071-2@2x.png"
            />
          </div>
          <div className="self-stretch relative text-13xl text-black z-[1] mq1050:text-7xl mq450:text-lgi">
            User name
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-3.5">
            <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-base">
              Administrator
            </i>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[19px]">
            <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-base">
              Department
            </i>
          </div>
        </div>
      </div>
      <div className="w-[429px] overflow-x-auto flex flex-col items-start justify-start gap-[8px_0px] max-w-full text-5xl text-black">
        <div className="w-[429px] h-[65px] relative whitespace-nowrap">
          <div
            className="absolute top-[0px] left-[0px] bg-whitesmoke-600 w-full h-full cursor-pointer z-[1]"
            onClick={onForgotPasswordGroupClick}
          />
          <div className="absolute top-[18px] left-[32px] z-[2]">
            Update Profile
          </div>
        </div>
        <div
          className="w-[429px] bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-[18px] px-8 box-border whitespace-nowrap z-[1]"
          style={groupDiv2Style}
        >
          <div
            className="h-[65px] w-[429px] relative bg-silver-100 hidden max-w-full"
            style={rectangleDivStyle}
          />
          <div className="relative z-[1]">Change Password</div>
        </div>
        <div
          className="w-[429px] bg-whitesmoke-500 flex flex-row items-start justify-start py-[18px] px-8 box-border whitespace-nowrap z-[1]"
          style={groupDiv3Style}
        >
          <div
            className="h-[65px] w-[429px] relative bg-whitesmoke-500 hidden max-w-full"
            style={rectangleDiv1Style}
          />
          <div className="relative z-[1]">Forgot Password</div>
        </div>
        <div className="w-[429px] bg-whitesmoke-500 flex flex-row items-start justify-start py-[18px] px-8 box-border z-[1]">
          <div className="h-[65px] w-[429px] relative bg-whitesmoke-500 hidden max-w-full" />
          <div className="relative z-[1] mq450:text-lgi">Sign-out</div>
        </div>
      </div>
    </div>
  );
};

export default UserFormContainer;
