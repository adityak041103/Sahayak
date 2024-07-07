import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../components/header-section";
import Footer from "../components/footer";

const ForwardComplaint: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    router.push("/complaint-detail");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border gap-[37px_0px] tracking-[normal] mq725:gap-[18px_0px]">
      <main className="self-stretch flex flex-col items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[30px_0px] max-w-full">
        <HeaderSection
          user11447091="/user-1144709-1@2x.png"
          rectangle31="/rectangle-31.svg"
          circulars="/polygon-1-1.svg"
          rectangle34="/rectangle-34.svg"
          headerPadding="unset"
          closeComplaintTextPadding="17px 0px 0px"
          complaintsBackgroundColor="#000"
          circularsIconColor="#fff"
          profileBackgroundColor="#fff"
          propColor="#000"
          onRectangleClick={onRectangleClick}
        />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-11xl text-black font-inria-sans">
          <div className="w-[1223px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1025:flex-wrap">
            <div className="bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[245px] pb-[303px] pr-[53px] pl-[91px] box-border gap-[23px_0px] min-w-[393px] max-w-full z-[2] mq1025:flex-1 mq725:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq975:pt-[159px] mq975:pb-[197px] mq975:box-border">
              <div className="w-[393px] h-[722px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
              <div className="flex flex-row items-start justify-start py-0 pr-[67px] pl-[68px]">
                <img
                  className="h-[115px] w-[114px] relative object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/chevrons-9678557-11@2x.png"
                />
              </div>
              <b className="relative z-[3] mq450:text-lg mq975:text-5xl">
                Forward complaint
              </b>
            </div>
            <div className="flex-1 bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[31px] pb-[41px] pr-[34px] pl-[58px] box-border gap-[91px_0px] min-w-[539px] max-w-full z-[1] text-5xl mq725:min-w-full mq450:gap-[23px_0px] mq975:gap-[45px_0px] mq975:pl-[29px] mq975:pt-5 mq975:pb-[27px] mq975:box-border">
              <div className="w-[830px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px_0px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[23px_0px] max-w-full">
                  <div className="self-stretch flex flex-col items-end justify-start max-w-full">
                    <button
                      className="cursor-pointer [border:none] pt-[5px] pb-[6.100000000000001px] pr-[19.200000000000728px] pl-5 bg-gainsboro-300 rounded-mini flex flex-row items-start justify-start gap-[13px] z-[2]"
                      onClick={onGroupButtonClick}
                    >
                      <div className="h-[42px] w-[131.7px] relative rounded-mini bg-gainsboro-300 hidden" />
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="w-[25px] h-6 relative object-cover z-[1]"
                          alt=""
                          src="/return-150519-1@2x.png"
                        />
                      </div>
                      <div className="relative text-7xl font-inria-sans text-black text-left z-[1] mq450:text-2xl">
                        Back
                      </div>
                    </button>
                    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                      <div className="bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-1 px-4 pb-[3px] box-border whitespace-nowrap max-w-full z-[2]">
                        <div className="h-9 w-[325px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                        <div className="relative z-[3]">
                          Complaint ID: 475638473988
                        </div>
                      </div>
                    </div>
                  </div>
                  <b className="relative text-13xl [text-decoration:underline] inline-block whitespace-pre-wrap max-w-full z-[2] mq450:text-lgi mq975:text-7xl">
                    Damaged road connecting two village
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_31px] max-w-full mq725:flex-wrap mq975:gap-[0px_15px]">
                  <div className="flex flex-col items-start justify-start gap-[5px_0px]">
                    <b className="relative z-[2] mq450:text-lgi">Location:</b>
                    <b className="relative z-[2] mq450:text-lgi">Department:</b>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                      <b className="relative z-[2] mq450:text-lgi">Date:</b>
                    </div>
                    <b className="relative z-[2] mq450:text-lgi">
                      Description:
                    </b>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[372px] max-w-full text-xl mq725:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10.33px_0px]">
                      <div className="relative z-[2] mq450:text-base">
                        XYZ Village, PQR district
                      </div>
                      <div className="relative z-[2] mq450:text-base">
                        Road and safety
                      </div>
                      <div className="relative z-[2] mq450:text-base">
                        30-12-2023
                      </div>
                      <div className="self-stretch h-[33px] relative inline-block shrink-0 z-[2] mq450:text-base">
                        I would like to draw your kind attention towards the
                        pathetic state of roads in our area. For the last four
                        months, the road has been almost impassable. We have
                        made several complaints, but no action has been taken.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[684px] flex flex-row items-start justify-start gap-[0px_12px] max-w-full text-7xl mq725:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[219px] mq725:flex-1">
                  <div className="flex flex-col items-start justify-start gap-[29px_0px]">
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
                      <b className="relative z-[2] mq450:text-2xl">
                        Select department:
                      </b>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-px">
                      <b className="relative z-[2] mq450:text-2xl">{`Add remark: `}</b>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-4">
                      <b className="relative z-[2] mq450:text-2xl">
                        Attach document:
                      </b>
                    </div>
                    <div className="w-[194px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-6xl">
                      <div className="h-[49px] flex-1 relative">
                        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-mini bg-gainsboro-300 w-[139px] z-[2]" />
                        <div className="absolute top-[11px] left-[23px] inline-block w-[167px] h-[27px] z-[3] mq450:text-xl">
                          Forward
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[19px_0px] min-w-[294px] max-w-full text-4xl">
                  <div className="bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-2 pr-4 pl-[31px] gap-[0px_11px] z-[2]">
                    <div className="h-11 w-[257px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative z-[3] mq450:text-lg">
                      Select department
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-3.5 h-3 relative object-contain z-[3]"
                        alt=""
                        src="/polygon-1-11.svg"
                      />
                    </div>
                  </div>
                  <input
                    className="w-full [border:none] [outline:none] bg-gainsboro-300 self-stretch h-11 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-2.5 px-5 box-border font-inria-sans text-xl text-gray-400 min-w-[250px] z-[2]"
                    placeholder="eg. Look into this issue"
                    type="text"
                  />
                  <div className="bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-[11px] pb-[7px] pr-[23px] pl-5 whitespace-nowrap z-[2] text-3xl">
                    <div className="h-11 w-[195px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative z-[3]">
                      <span>{`Choose file `}</span>
                      <span className="text-lg">(.pdf)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[830px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
      <Footer />
    </div>
  );
};

export default ForwardComplaint;
