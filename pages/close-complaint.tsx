import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../components/header-section";
import Footer from "../components/footer";

const CloseComplaint: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    router.push("/complaint-detail");
  }, [router]);

  const onBackButtonFrameClick = useCallback(() => {
    router.push("/pending-complaints");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border gap-[37px_0px] tracking-[normal] mq725:gap-[18px_0px]">
      <main className="self-stretch flex flex-col items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[30px_0px] max-w-full">
        <HeaderSection
          user11447091="/user-1144709-1@2x.png"
          rectangle31="/rectangle-31.svg"
          circulars="/polygon-1-1.svg"
          rectangle34="/rectangle-34.svg"
          onRectangleClick={onRectangleClick}
        />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-11xl text-black font-inria-sans">
          <div className="w-[1223px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1025:flex-wrap">
            <div className="w-[393px] bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[230px] px-5 pb-[303px] box-border gap-[32px_0px] min-w-[393px] max-w-full z-[1] mq1025:flex-1 mq725:min-w-full mq450:gap-[16px_0px] mq975:pt-[149px] mq975:pb-[197px] mq975:box-border">
              <div className="w-[393px] h-[722px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
              <div className="flex flex-row items-start justify-start py-0 px-11">
                <img
                  className="h-[121px] w-[121px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/checked-709510-11@2x.png"
                />
              </div>
              <b className="relative z-[2] mq450:text-lg mq975:text-5xl">
                Close complaint
              </b>
            </div>
            <div className="flex-1 bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[38px] pb-[57px] pr-[34px] pl-[58px] box-border gap-[84px_0px] min-w-[539px] max-w-full text-5xl mq725:min-w-full mq450:gap-[21px_0px] mq975:gap-[42px_0px] mq975:pl-[29px] mq975:pt-[25px] mq975:pb-[37px] mq975:box-border">
              <div className="w-[830px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px_0px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_74px] max-w-full mq725:flex-wrap mq450:gap-[0px_18px] mq975:gap-[0px_37px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border min-w-[346px] max-w-full mq725:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[28px_0px] max-w-full">
                      <div className="bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-1 px-4 pb-[3px] box-border whitespace-nowrap max-w-full z-[1]">
                        <div className="h-9 w-[325px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                        <div className="relative z-[2]">
                          Complaint ID: 475638473988
                        </div>
                      </div>
                      <b className="relative text-13xl [text-decoration:underline] whitespace-pre-wrap z-[1] mq450:text-lgi mq975:text-7xl">
                        Damaged road connecting two village
                      </b>
                      <div className="flex flex-row items-end justify-start gap-[0px_31px] max-w-full mq450:flex-wrap mq450:gap-[0px_15px]">
                        <div className="flex flex-col items-start justify-start gap-[5px_0px]">
                          <b className="relative z-[1] mq450:text-lgi">
                            Location:
                          </b>
                          <b className="relative z-[1] mq450:text-lgi">
                            Department:
                          </b>
                          <b className="relative z-[1] mq450:text-lgi">Date:</b>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 text-xl">
                          <div className="flex flex-col items-start justify-start gap-[10px_0px]">
                            <div className="relative z-[1] mq450:text-base">
                              XYZ Village, PQR district
                            </div>
                            <div className="relative z-[1] mq450:text-base">
                              Road and safety
                            </div>
                            <div className="relative z-[1] mq450:text-base">
                              30-12-2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] pt-[5px] pb-[6.099999999999994px] pr-[19.200000000000728px] pl-5 bg-gainsboro-300 rounded-mini flex flex-row items-start justify-start gap-[13px] z-[1]"
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
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_38px] max-w-full mq725:flex-wrap mq975:gap-[0px_19px]">
                  <b className="relative z-[1] mq450:text-lgi">Description:</b>
                  <div className="h-[33px] flex-1 relative text-xl inline-block min-w-[372px] max-w-full z-[1] mq725:min-w-full mq450:text-base">
                    I would like to draw your kind attention towards the
                    pathetic state of roads in our area. For the last four
                    months, the road has been almost impassable. We have made
                    several complaints, but no action has been taken.
                  </div>
                </div>
              </div>
              <div className="w-[424px] flex flex-row items-start justify-start gap-[0px_9px] max-w-full text-9xl mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[143px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[69px_0px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[46px_0px]">
                      <b className="relative z-[1] mq450:text-3xl">
                        Select reason:
                      </b>
                      <b className="relative z-[1] mq450:text-3xl">
                        Attach document:
                      </b>
                    </div>
                    <div className="w-[213px] h-[49px] relative whitespace-nowrap text-6xl">
                      <div
                        className="absolute top-[0px] left-[0px] rounded-mini bg-gainsboro-300 w-full h-full cursor-pointer z-[1]"
                        onClick={onBackButtonFrameClick}
                      />
                      <div className="absolute top-[11px] left-[23px] inline-block w-[167px] h-[27px] z-[2]">
                        Submit to close
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[33px_0px] min-w-[195px] text-4xl mq450:flex-1">
                  <div className="bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-[9px] pb-2.5 pr-3.5 pl-[21px] gap-[14px] z-[1]">
                    <div className="h-[47px] w-[195px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative z-[1] mq450:text-lg">
                      Select reason
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <img
                        className="w-3.5 h-3 relative object-contain z-[1]"
                        alt=""
                        src="/polygon-1-11.svg"
                      />
                    </div>
                  </div>
                  <div className="bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-[11px] pb-2.5 pr-[23px] pl-5 whitespace-nowrap z-[1] text-3xl">
                    <div className="h-[47px] w-[195px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative z-[2]">
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
      <Footer />
    </div>
  );
};

export default CloseComplaint;
