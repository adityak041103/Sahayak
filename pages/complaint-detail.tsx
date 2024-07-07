import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../components/header-section";
import Footer from "../components/footer";

const ComplaintDetail: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border gap-[29px_0px] tracking-[normal]">
      <HeaderSection
        user11447091="/user-1144709-1@2x.png"
        rectangle31="/rectangle-31.svg"
        circulars="/polygon-1-1.svg"
        rectangle34="/rectangle-34.svg"
        headerPadding="0px 2px 9px 0px"
        closeComplaintTextPadding="17px 0px 0px"
        complaintsBackgroundColor="#000"
        circularsIconColor="#fff"
        profileBackgroundColor="#fff"
        propColor="#000"
        onRectangleClick={onRectangleClick}
      />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq750:pl-[27px] mq750:pr-[27px] mq750:box-border">
        <section className="flex-1 bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start pt-[83px] pb-[74px] pr-[37px] pl-[58px] box-border gap-[64px_0px] max-w-full text-left text-5xl text-black font-inria-sans lg:pl-[29px] lg:box-border mq750:gap-[32px_0px] mq750:pt-[54px] mq750:pb-12 mq750:box-border mq450:gap-[16px_0px]">
          <div className="w-[1325px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[0px_92px] max-w-full lg:flex-wrap mq750:gap-[0px_46px] mq450:gap-[0px_23px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[90px_0px] max-w-full mq750:gap-[45px_0px] mq750:min-w-full mq450:gap-[22px_0px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px_0px] max-w-full">
                <div className="bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-1 px-4 pb-[3px] box-border whitespace-nowrap max-w-full z-[1]">
                  <div className="h-9 w-[325px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                  <div className="relative z-[2]">
                    Complaint ID: 475638473988
                  </div>
                </div>
                <b className="relative text-13xl [text-decoration:underline] inline-block whitespace-pre-wrap max-w-full z-[1] mq1050:text-7xl mq450:text-lgi">
                  Damaged road connecting two village
                </b>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_31px] max-w-full mq750:flex-wrap mq750:gap-[0px_15px]">
                  <div className="flex flex-col items-start justify-start gap-[5px_0px]">
                    <b className="relative z-[1] mq450:text-lgi">Location:</b>
                    <b className="relative z-[1] mq450:text-lgi">Department:</b>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                      <b className="relative z-[1] mq450:text-lgi">Date:</b>
                    </div>
                    <b className="relative z-[1] mq450:text-lgi">
                      Description:
                    </b>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[372px] max-w-full text-xl mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10.33px_0px]">
                      <div className="relative z-[1] mq450:text-base">
                        XYZ Village, PQR district
                      </div>
                      <div className="relative z-[1] mq450:text-base">
                        Road and safety
                      </div>
                      <div className="relative z-[1] mq450:text-base">
                        30-12-2023
                      </div>
                      <div className="self-stretch h-[33px] relative inline-block shrink-0 z-[1] mq450:text-base">
                        I would like to draw your kind attention towards the
                        pathetic state of roads in our area. For the last four
                        months, the road has been almost impassable. We have
                        made several complaints, but no action has been taken.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[606px] flex flex-col items-start justify-start gap-[25px_0px] max-w-full">
                <div className="flex flex-row items-start justify-start gap-[0px_17px] max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <b className="relative z-[1] mq450:text-lgi">
                      File Attached:
                    </b>
                  </div>
                  <div className="bg-gainsboro-300 flex flex-row items-start justify-start pt-1 pb-[5px] pr-5 pl-[18px] whitespace-nowrap z-[1] text-xl">
                    <div className="h-[33px] w-[219px] relative bg-gainsboro-300 hidden" />
                    <div className="relative z-[2]">{`Complaint report.pdf `}</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                    <b className="relative z-[1] mq450:text-lgi">Update:</b>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-3xl text-darkslateblue">
                      <b className="relative z-[1] mq450:text-lg">
                        In process- forwarded to concerned authority
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[400px] max-w-full lg:flex-1 mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px_0px] max-w-full">
                <b className="relative z-[1] mq450:text-lgi">
                  Photo/Video Attached
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[5px_0px] max-w-full">
                    <img
                      className="self-stretch h-[276px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                    <div className="w-[386px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                      <div className="flex flex-row items-start justify-start">
                        <div className="h-[26px] w-10 relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-full hidden" />
                          <img
                            className="absolute top-[9px] left-[17px] w-[15px] h-2 object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/polygon-3.svg"
                          />
                        </div>
                        <div className="h-[26px] w-10 relative rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-full hidden" />
                          <img
                            className="absolute top-[9px] left-[12px] w-[15px] h-2 object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/polygon-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center max-w-full">
            <div className="w-[910px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
                <button className="cursor-pointer [border:none] py-[13px] px-[41px] bg-gainsboro-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver-200">
                  <div className="relative text-5xl font-inria-sans text-black text-left">
                    Make update
                  </div>
                </button>
              </div>
              <button className="cursor-pointer [border:none] py-[13px] px-[30px] bg-gainsboro-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver-200">
                <div className="relative text-5xl font-inria-sans text-black text-left">
                  Close complaint
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[13px] bg-gainsboro-300 rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver-200">
                <div className="relative text-5xl font-inria-sans text-black text-left">
                  Forward complaint
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComplaintDetail;
