import type { NextPage } from "next";
import OfficerLoginForm from "../components/officer-login-form";

const Login: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-center py-[114px] px-5 box-border tracking-[normal]">
      <div className="h-[1024px] w-[1440px] relative bg-white hidden max-w-full" />
      <main className="w-[1162px] rounded-11xl bg-white flex flex-row items-start justify-start [row-gap:20px] max-w-full z-[1] text-left text-[48px] text-gray-200 font-inria-sans mq975:flex-wrap">
        <div className="self-stretch w-[1162px] relative rounded-11xl bg-white hidden max-w-full" />
        <div className="w-[536px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[228px] px-5 pb-[270px] box-border gap-[36px_0px] min-w-[536px] max-w-full z-[2] mq700:min-w-full mq450:gap-[18px_0px] mq450:pt-24 mq450:pb-[114px] mq450:box-border mq975:flex-1 mq975:pt-[148px] mq975:pb-[175px] mq975:box-border">
          <div className="w-[536px] h-[796px] relative rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
          <div className="w-[374px] flex flex-row items-start justify-start py-0 px-[61px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="h-[215px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <h1 className="m-0 h-[47px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[3] mq450:text-10xl mq975:text-[38px]">
            SAHAYAK PORTAL
          </h1>
        </div>
        <OfficerLoginForm />
      </main>
    </div>
  );
};

export default Login;
