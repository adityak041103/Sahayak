import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[1158px] box-border tracking-[normal]">
      <section className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start max-w-full text-left text-13xl text-black font-inria-sans">
        <header className="self-stretch h-[111px] sticky [background:linear-gradient(180deg,_#171713,_rgba(174,_170,_86,_0))] top-[0] z-[99] text-left text-21xl text-gray-200 font-inria-sans">
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#171713,_rgba(174,_170,_86,_0))] w-full h-full hidden" />
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(228,_228,_228,_0.68)_0.01%,_rgba(255,_248,_237,_0.69))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-full z-[1]" />
          <div className="absolute top-[27px] left-[124px] w-[335px] flex flex-col items-start justify-start">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit whitespace-nowrap z-[2]">
              SAHAYAK PORTAL
            </h1>
            <i className="w-[301px] relative text-base inline-block text-black whitespace-nowrap box-border pr-5 z-[2]">
              Speak up and transform the village
            </i>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[124px] h-[105px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className="absolute top-[42px] left-[651px] w-[46px] h-[46px] object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/info-4394038-1@2x.png"
          />
          <img
            className="absolute top-[42px] left-[509px] w-[46px] h-[46px] object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/home-4946262-1@2x.png"
          />
          <img
            className="absolute top-[42px] left-[1037px] w-[46px] h-[46px] object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/adduser-1177577-1@2x.png"
          />
          <div className="absolute top-[41px] left-[514px] flex flex-row items-start justify-start gap-[0px_24px] text-base text-black font-inter">
            <div className="w-[120px] flex flex-col items-start justify-start pt-px pb-0 pr-[7px] pl-0 box-border">
              <div className="self-stretch rounded-31xl bg-whitesmoke-100 flex flex-row items-start justify-end pt-3.5 px-[0.30000000000001137px] pb-[5.900000000000006px] z-[2]">
                <img
                  className="h-[46px] w-[113px] relative rounded-31xl hidden"
                  alt=""
                  src="/rectangle-3.svg"
                />
                <div className="h-[26.1px] w-[82.9px] relative font-semibold inline-block shrink-0 box-border pl-5 z-[3]">
                  Home
                </div>
              </div>
            </div>
            <div className="w-[140px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch rounded-31xl bg-white flex flex-row items-start justify-end pt-3.5 pb-[2.5px] pr-[10.300000000000011px] pl-[47px] whitespace-nowrap z-[2]">
                <div className="h-[43.2px] w-[140px] relative rounded-31xl bg-white hidden" />
                <div className="h-[26.7px] flex-1 relative font-semibold inline-block z-[3]">
                  About us
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px pb-0 pr-2.5 pl-0">
              <button className="cursor-pointer [border:none] py-0 pr-[11px] pl-0 bg-gray-100 rounded-31xl flex flex-row items-start justify-start gap-[7px] z-[2]">
                <div className="h-[43px] w-[191px] relative rounded-31xl bg-gray-100 hidden" />
                <img
                  className="h-[46px] w-[46px] relative object-cover z-[1]"
                  alt=""
                  src="/points-1647434-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                  <div className="h-[26px] relative text-base font-semibold font-inter text-black text-left inline-block shrink-0 whitespace-nowrap z-[1]">
                    Track Complaint
                  </div>
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="rounded-31xl bg-white flex flex-row items-start justify-end pt-3 pb-2.5 pr-2 pl-[43px] whitespace-nowrap z-[2]">
                <div className="h-11 w-44 relative rounded-31xl bg-white hidden" />
                <div className="relative font-semibold z-[3]">
                  Register Officer
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start cursor-pointer z-[2] text-whitesmoke-200"
              onClick={onGroupContainerClick}
            >
              <img
                className="h-[46px] w-[46px] relative object-cover min-h-[46px] z-[1]"
                loading="lazy"
                alt=""
                src="/user-1177568-1@2x.png"
              />
              <div className="rounded-31xl bg-gray-300 flex flex-row items-start justify-end pt-3 pb-[9px] pr-3 pl-[43px] whitespace-nowrap ml-[-37px]">
                <div className="h-[43px] w-[156px] relative rounded-31xl bg-gray-300 hidden" />
                <div className="relative font-semibold z-[1]">
                  0fficer Login
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-end justify-start py-[104px] pr-[37px] pl-[66px] box-border gap-[0px_54px] min-h-[917px] max-w-full z-[2] mt-[-4px] mq750:gap-[0px_27px] mq750:pl-[33px] mq750:box-border mq1125:flex-wrap mq1050:pb-[68px] mq1050:box-border mq450:pb-11 mq450:box-border">
          <div className="h-[917px] w-[1440px] relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
          <div className="w-[627px] flex flex-col items-start justify-start gap-[56px_0px] min-w-[627px] max-w-full mq750:gap-[28px_0px] mq1125:flex-1 mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_51px] mq750:flex-wrap mq750:gap-[0px_25px]">
              <button className="cursor-pointer [border:none] pt-14 pb-[35px] pr-[52px] pl-[58px] bg-gainsboro-200 rounded-41xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-col items-start justify-start gap-[35px] z-[3] mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border hover:bg-silver-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
              
              onClick={onGroupContainerClick}
              >
                
                <div className="w-72 h-[282px] relative rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] hidden" />
                <div className="flex flex-row items-start justify-start py-0 px-[27px]">
                  <img
                    className="h-[118px] w-[118px] relative object-cover z-[1]"
                    alt=""
                    src="/user-456283-1@2x.png"
                  />
                </div>
                <div className="relative text-13xl font-inria-sans text-black text-left z-[1] mq1050:text-7xl mq450:text-lgi ">
                  Officer Login
                </div>
              </button>
              <div className="flex-1 rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-col items-start justify-start pt-14 pb-[35px] pr-[30px] pl-[43px] box-border gap-[36px] min-w-[216px] z-[3] mq450:gap-[18px] mq450:pl-5 mq450:box-border">
                <div className="w-72 h-[282px] relative rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] hidden" />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-10 pl-[57px]">
                  <img
                    className="h-[117px] w-[118px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-9@2x.png"
                  />
                </div>
                <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq1050:text-7xl mq450:text-lgi">
                  Post Complaint
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_51px] text-gray-200 mq750:flex-wrap mq750:gap-[0px_25px]">
              <div className="flex-1 rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-col items-start justify-start pt-[62px] px-[68px] pb-[29px] box-border gap-[35px] min-w-[216px] z-[3] mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="w-72 h-[282px] relative rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] hidden" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[17px]">
                  <img
                    className="h-[118px] w-[118px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/portfolio-4620481-1@2x.png"
                  />
                </div>
                <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq1050:text-7xl mq450:text-lgi">
                  Dashboard
                </h1>
              </div>
              <div className="rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-col items-start justify-start pt-[62px] pb-7 pr-[70px] pl-[100px] gap-[36px] z-[3] mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="w-72 h-[282px] relative rounded-41xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] hidden" />
                <img
                  className="w-[118px] h-[118px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/conversation-942802-1@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                  <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq1050:text-7xl mq450:text-lgi">
                    FAQS
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[628px] flex-1 relative rounded-31xl max-w-full overflow-hidden object-cover min-w-[426px] z-[3] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
