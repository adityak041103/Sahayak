import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameCancelUpdateType = {
  changePassword?: string;
  enterOldPassword?: string;
  cancelUpdateGroupPlacehol?: string;
  enterNewPassword?: string;
  frameEnterNewPassPlacehol?: string;
  update?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const FrameCancelUpdate: NextPage<FrameCancelUpdateType> = ({
  changePassword,
  enterOldPassword,
  cancelUpdateGroupPlacehol,
  enterNewPassword,
  frameEnterNewPassPlacehol,
  update,
  propColor,
}) => {
  const cancelUpdateGroupStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <form className="m-0 flex-1 bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[78px] px-5 pb-[124px] box-border gap-[69px_0px] min-w-[577px] max-w-full z-[1] mq750:gap-[34px_0px] mq750:pt-[51px] mq750:pb-[81px] mq750:box-border mq750:min-w-full mq450:gap-[17px_0px]">
      <div className="w-[888px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
      <div className="w-[588px] flex flex-col items-start justify-start gap-[36px_0px] max-w-full mq750:gap-[18px_0px]">
        <div className="flex flex-row items-start justify-start py-0 px-px">
          <h3 className="m-0 relative text-17xl font-bold font-inria-sans text-black text-left z-[2] mq1050:text-10xl mq450:text-3xl">
            {changePassword}
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="relative text-xl font-inria-sans text-black text-left z-[2] mq450:text-base">
              {enterOldPassword}
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-gainsboro-300 self-stretch h-[45px] flex flex-row items-start justify-start pt-[7px] px-[34px] pb-3.5 box-border font-inria-sans text-xl text-gray-800 min-w-[250px] z-[2]"
            placeholder={cancelUpdateGroupPlacehol}
            type="text"
            style={cancelUpdateGroupStyle}
          />
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div className="relative text-xl font-inria-sans text-black text-left z-[2] mq450:text-base">
              {enterNewPassword}
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-gainsboro-300 self-stretch h-[45px] flex flex-row items-start justify-start pt-[13px] px-[34px] pb-2 box-border font-inria-sans text-xl text-gray-400 min-w-[250px]"
            placeholder={frameEnterNewPassPlacehol}
            type="text"
          />
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="relative text-xl font-inria-sans text-black text-left z-[2] mq450:text-base">
              Re-enter new Password
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-gainsboro-300 self-stretch h-[45px] flex flex-row items-start justify-start pt-2.5 px-[34px] pb-[11px] box-border font-inria-sans text-xl text-gray-400 min-w-[250px] z-[2]"
            placeholder="Re-enter new Password"
            type="text"
          />
        </div>
      </div>
      <div className="w-[578px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <button className="cursor-pointer pt-[7px] pb-[9px] pr-[37px] pl-[31px] bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-black hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="h-[45px] w-[138px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[1] mq450:text-lgi">
              Cancel
            </div>
          </button>
          <button className="cursor-pointer pt-[7px] px-[31px] pb-[9px] bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-black hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="h-[45px] w-[138px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[1] mq450:text-lgi">
              {update}
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FrameCancelUpdate;
