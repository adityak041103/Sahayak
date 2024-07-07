import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const OfficerLoginForm: NextPage = () => {
  const router = useRouter();

  const onReturnTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  return (
    <form className="m-0 flex-1 rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-whitesmoke-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[21px] px-0 pb-11 box-border gap-[27px_0px] min-w-[407px] max-w-full z-[2] mq700:min-w-full mq450:pb-5 mq450:box-border mq975:pt-5 mq975:pb-[29px] mq975:box-border">
      <div className="self-stretch h-[796px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-whitesmoke-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
      <div className="self-stretch flex flex-col items-end justify-start gap-[10px_0px] max-w-full">
        <div className="w-[593px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
            <div className="w-[269px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
              <div className="self-stretch h-[42px] relative">
                <div className="absolute top-[0px] left-[0px] text-13xl font-inria-sans text-black text-left inline-block w-[250px] h-[42px] z-[3] mq450:text-lgi mq975:text-7xl">
                  OFFICER LOGIN
                </div>
                <img
                  className="absolute top-[20px] left-[219px] w-[50px] h-[0.6px] object-contain z-[4]"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-1 pb-[5px] pr-2 pl-[17px] bg-[transparent] flex flex-row items-start justify-start relative gap-[7px] z-[3]">
              <div
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-gainsboro-300 cursor-pointer"
                onClick={onReturnTextClick}
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative text-5xl font-inria-sans text-black text-left z-[1] mq450:text-lgi">
                  Return
                </div>
              </div>
              <img
                className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                alt=""
                src="/return-150519-1@2x.png"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-black" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[23px] pr-[50px] pl-[58px] box-border max-w-full mq700:pl-[29px] mq700:pr-[25px] mq700:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[9px]">
            <img
              className="h-[100px] w-[100px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/user-1177568-2@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px_0px] max-w-full">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="relative text-5xl font-inria-sans text-black text-left z-[3] mq450:text-lgi">
                  Username / Email Id / Phone
                </div>
              </div>
              <div className="relative text-5xl font-inria-sans text-red text-left z-[3] mq450:text-lgi">
                *
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full">
              <div className="flex-1 bg-gainsboro-300 box-border flex flex-row items-start justify-start pt-3.5 px-[18px] pb-2 max-w-full z-[3] border-[0px] border-solid border-black">
                <img
                  className="h-14 w-[512px] relative hidden max-w-full"
                  alt=""
                  src="/rectangle-15.svg"
                />
                <input
                  className="w-[343px] [border:none] [outline:none] font-inria-sans text-9xl bg-[transparent] h-[34px] relative text-gray-1000 text-left inline-block max-w-full p-0 z-[4] mq450:text-3xl"
                  placeholder="Username / Email Id / Phone"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] max-w-full">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="relative text-5xl font-inria-sans text-black text-left z-[3] mq450:text-lgi">
                  Password
                </div>
              </div>
              <div className="relative text-5xl font-inria-sans text-red text-left z-[3] mq450:text-lgi">
                *
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full">
              <div className="flex-1 bg-gainsboro-300 box-border flex flex-row items-start justify-start pt-2.5 px-[18px] pb-3 max-w-full z-[3] border-[0px] border-solid border-black">
                <img
                  className="h-14 w-[512px] relative hidden max-w-full"
                  alt=""
                  src="/rectangle-15.svg"
                />
                <input
                  className="w-[115px] [border:none] [outline:none] font-inria-sans text-9xl bg-[transparent] h-[34px] relative text-gray-1000 text-left inline-block p-0 z-[4] mq450:text-3xl"
                  placeholder="Password"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end pt-0 pb-5 pr-[42px] pl-16 box-border max-w-full mq700:pl-8 mq700:pr-[21px] mq700:box-border">
        <div className="w-[520px] flex flex-row items-start justify-start gap-[0px_9px] max-w-full mq700:flex-wrap">
          <div className="flex-1 bg-gainsboro-300 box-border flex flex-row items-start justify-start py-[11px] px-[18px] min-w-[98px] max-w-full z-[3] border-[0px] border-solid border-black">
            <img
              className="h-14 w-[332px] relative hidden max-w-full"
              alt=""
              src="/rectangle-18.svg"
            />
            <input
              className="w-[98px] [border:none] [outline:none] font-inria-sans text-9xl bg-[transparent] h-[34px] relative text-gray-1000 text-left inline-block p-0 z-[4] mq450:text-3xl"
              placeholder="Captcha"
              type="text"
            />
          </div>
          <img
            className="h-14 w-[140px] relative object-cover min-h-[56px] z-[3]"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <img
              className="w-[30px] h-[30px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/return-770444-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end pt-0 pb-[22px] pr-[50px] pl-16 box-border max-w-full mq700:pl-8 mq700:pr-[25px] mq700:box-border">
        <div className="w-[512px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <button
              className="cursor-pointer pt-3 pb-3.5 pr-[27px] pl-[29px] bg-gainsboro-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[3] border-[0px] border-solid border-black hover:bg-silver-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
              onClick={onGroupButton1Click}
            >
              <img
                className="h-[60px] w-[133px] relative hidden"
                alt=""
                src="/rectangle-19.svg"
              />
              <b className="relative text-9xl font-inria-sans text-black text-left z-[1] mq450:text-3xl">
                LOGIN
              </b>
            </button>
          </div>
          <button className="cursor-pointer pt-2 pb-[19px] pr-[5px] pl-3.5 bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[3] border-[0px] border-solid border-black hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <img
              className="h-14 w-[202px] relative hidden"
              alt=""
              src="/rectangle-20.svg"
            />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[4]">
              Forgot Password?
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-16 box-border max-w-full mq700:pl-8 mq700:pr-8 mq700:box-border">
        <div className="flex flex-row items-start justify-start gap-[0px_15px] max-w-full mq700:flex-wrap">
          <div className="relative text-5xl font-inria-sans text-black text-left z-[3] mq450:text-lgi">{`Not registered? `}</div>
          <div className="relative text-9xl font-inria-sans text-deepskyblue text-left z-[3] mq450:text-3xl">
            Register new officer
          </div>
        </div>
      </div>
    </form>
  );
};

export default OfficerLoginForm;
