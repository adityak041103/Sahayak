import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HomeButtonGroupContainer from "../components/home-button-group-container";
import Footer from "../components/footer";

const PendingComplaints: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[3px] px-0 pb-0 box-border gap-[30.5px_0px] tracking-[normal] mq750:gap-[15px_0px]">
      <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
        <div className="w-[1438px] flex flex-col items-end justify-start max-w-full">
          <header className="self-stretch flex flex-row items-start justify-between pt-0 pb-8 pr-[57px] pl-2 box-border relative max-w-full gap-[20px] text-left text-21xl text-gray-200 font-inria-sans mq750:flex-wrap mq750:pr-7 mq750:box-border">
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
            <div className="w-[220px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-6xl text-black">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1px_0px]">
                <div className="self-stretch h-12 relative">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-11xl bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-full" />
                    <img
                      className="absolute top-[0px] left-[0px] w-12 h-12 object-cover z-[2]"
                      alt=""
                      src="/user-1144709-1@2x.png"
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
          </header>
          <HomeButtonGroupContainer
            dimensionCode="/rectangle-30.svg"
            dimensionCodeText="/rectangle-31.svg"
            productDimensionsCode="/polygon-1-1.svg"
            rectangleIconGap="20px"
            propBackgroundColor="#fff"
            propColor="#000"
            propBackgroundColor1="#000"
            propColor1="#fff"
            onRectangleClick={onRectangleClick}
          />
        </div>
      </div>
      <main className="w-[1427px] flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full mq750:pl-9 mq750:pr-9 mq750:box-border">
        <section className="flex-1 flex flex-col items-start justify-start max-w-full text-left text-13xl text-white font-inria-sans">
          <div className="self-stretch rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(208,_95,_95,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-center py-[15px] pr-5 pl-7 box-border max-w-full z-[1]">
            <div className="h-[73px] w-[1281px] relative rounded-t-11xl rounded-b-none [background:linear-gradient(180deg,_rgba(208,_95,_95,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <b className="w-[339px] relative inline-block shrink-0 max-w-full z-[2] mq1050:text-7xl mq450:text-lgi">
              All Pending Complaints
            </b>
          </div>
          <div className="self-stretch rounded-t-11xl rounded-b-none bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[70px] px-0 pb-px box-border gap-[0.67px_0px] max-w-full mt-[-70px] text-base text-black mq750:pb-5 mq750:box-border">
            <div className="self-stretch h-[725px] relative rounded-t-11xl rounded-b-none bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
            <div className="self-stretch bg-gainsboro-300 box-border flex flex-row flex-wrap items-end justify-center pt-[3px] pb-1 pr-[26px] pl-[46px] gap-[17px] max-w-full z-[2] border-b-[1px] border-solid border-black lg:pl-[23px] lg:box-border">
              <div className="h-[163px] w-[1281px] relative bg-gainsboro-300 box-border hidden max-w-full border-b-[1px] border-solid border-black" />
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
                <div className="flex flex-col items-start justify-start gap-[17px_0px]">
                  <button className="cursor-pointer [border:none] pt-1 pb-[5px] pr-5 pl-[15px] bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightgray">
                    <div className="h-[34px] w-[292px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative text-2xl font-inria-sans text-black text-left z-[2]">
                      Complaint ID: 475638473988
                    </div>
                  </button>
                  <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                    <div className="flex flex-col items-start justify-start gap-[11px_0px]">
                      <div className="flex flex-row items-start justify-start gap-[0px_6px]">
                        <img
                          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                          alt=""
                          src="/placeholder-684809-1@2x.png"
                        />
                        <div className="relative z-[1]">
                          XYZ Village, PQR district
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_5px]">
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <img
                            className="w-5 h-5 relative object-cover z-[1]"
                            alt=""
                            src="/office-798008-1@2x.png"
                          />
                        </div>
                        <div className="relative z-[1]">Road and safety</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_7px]">
                        <img
                          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                          alt=""
                          src="/image-5@2x.png"
                        />
                        <div className="relative z-[1]">30-12-2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[33px_0px] min-w-[420px] max-w-full text-5xl mq750:gap-[16px_0px] mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[572px] flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                    <b className="relative inline-block whitespace-pre-wrap max-w-full z-[1] mq450:text-lgi">
                      Damaged road connecting two village
                    </b>
                    <div className="self-stretch h-[33px] relative text-lg inline-block shrink-0 z-[1]">
                      I would like to draw your kind attention towards the
                      pathetic state of roads in our area. For the last four
                      months, the road has been almost impassable. We have made
                      several complaints, but no action has been taken.
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-1 pb-0 pr-0 pl-[7px] bg-silver-100 rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[1]">
                  <div className="h-[31px] w-[100px] relative rounded-3xs bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="relative text-mini font-inria-sans text-black text-left z-[1]">
                      See more
                    </div>
                  </div>
                  <img
                    className="h-[30px] w-[30px] relative object-cover z-[1]"
                    alt=""
                    src="/plus-12805231-1@2x.png"
                  />
                </button>
              </div>
              <div className="h-[156px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <img
                  className="w-[150px] h-[149.8px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <div className="h-28 w-[50px] flex flex-col items-start justify-start text-mini">
                <div className="self-stretch [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[7px] px-[5px] pb-0.5 gap-[6px_0px] z-[1] border-[1px] border-solid border-black">
                  <div className="w-[50px] h-[70px] relative [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
                  <img
                    className="w-[38px] h-[37px] relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/raisehand-12778089-1@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <b className="relative z-[2]">500</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
              <div className="flex-1 bg-gainsboro-300 box-border flex flex-row flex-wrap items-end justify-center pt-[3px] pb-1 pr-6 pl-[46px] gap-[17px] max-w-full z-[3] border-b-[1px] border-solid border-black lg:pl-[23px] lg:box-border">
                <div className="h-[163px] w-[1281px] relative bg-gainsboro-300 box-border hidden max-w-full border-b-[1px] border-solid border-black" />
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
                  <div className="flex flex-col items-start justify-start gap-[17px_0px]">
                    <button className="cursor-pointer [border:none] pt-1 pb-[5px] pr-5 pl-[15px] bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightgray">
                      <div className="h-[34px] w-[292px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                      <div className="relative text-2xl font-inria-sans text-black text-left z-[2]">
                        Complaint ID: 475638473988
                      </div>
                    </button>
                    <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                      <div className="flex flex-col items-start justify-start gap-[11px_0px]">
                        <div className="flex flex-row items-start justify-start gap-[0px_6px]">
                          <img
                            className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                            alt=""
                            src="/placeholder-684809-1@2x.png"
                          />
                          <div className="relative z-[1]">
                            XYZ Village, PQR district
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0px_5px]">
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <img
                              className="w-5 h-5 relative object-cover z-[1]"
                              alt=""
                              src="/office-798008-1@2x.png"
                            />
                          </div>
                          <div className="relative z-[1]">Road and safety</div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0px_7px]">
                          <img
                            className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                            alt=""
                            src="/image-5@2x.png"
                          />
                          <div className="relative z-[1]">30-12-2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start gap-[33px_0px] min-w-[421px] max-w-full text-5xl mq750:gap-[16px_0px] mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <div className="w-[574px] flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                      <b className="relative inline-block whitespace-pre-wrap max-w-full z-[1] mq450:text-lgi">
                        Damaged road connecting two village
                      </b>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-lg">
                        <div className="h-[33px] flex-1 relative inline-block max-w-full z-[1]">
                          I would like to draw your kind attention towards the
                          pathetic state of roads in our area. For the last four
                          months, the road has been almost impassable. We have
                          made several complaints, but no action has been taken.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-start">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
                      <button className="cursor-pointer [border:none] pt-[7px] pb-1.5 pr-[30px] pl-[7px] bg-silver-100 rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gray-600">
                        <div className="h-[31px] w-[100px] relative rounded-3xs bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                        <div className="relative text-mini font-inria-sans text-black text-left z-[2]">
                          See more
                        </div>
                      </button>
                    </div>
                    <img
                      className="h-[30px] w-[30px] relative object-cover z-[3] ml-[-30px]"
                      loading="lazy"
                      alt=""
                      src="/plus-12805231-1@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[156px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                  <img
                    className="w-[150px] h-[149.8px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className="h-28 w-[50px] flex flex-col items-start justify-start text-mini">
                  <div className="self-stretch [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[7px] px-[5px] pb-0.5 gap-[6px_0px] z-[1] border-[1px] border-solid border-black">
                    <div className="w-[50px] h-[70px] relative [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
                    <img
                      className="w-[38px] h-[37px] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/raisehand-12778089-1@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                      <b className="relative z-[2]">500</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-gainsboro-300 box-border flex flex-row flex-wrap items-end justify-start pt-[3px] pb-1 pr-[26px] pl-[46px] gap-[17px] max-w-full z-[4] border-b-[1px] border-solid border-black lg:pl-[23px] lg:box-border">
              <div className="h-[163px] w-[1281px] relative bg-gainsboro-300 box-border hidden max-w-full border-b-[1px] border-solid border-black" />
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
                <div className="flex flex-col items-start justify-start gap-[17px_0px]">
                  <button className="cursor-pointer [border:none] pt-1 pb-[5px] pr-5 pl-[15px] bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightgray">
                    <div className="h-[34px] w-[292px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative text-2xl font-inria-sans text-black text-left z-[2]">
                      Complaint ID: 475638473988
                    </div>
                  </button>
                  <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                    <div className="flex flex-col items-start justify-start gap-[11px_0px]">
                      <div className="flex flex-row items-start justify-start gap-[0px_6px]">
                        <img
                          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                          alt=""
                          src="/placeholder-684809-1@2x.png"
                        />
                        <div className="relative z-[1]">
                          XYZ Village, PQR district
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_5px]">
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <img
                            className="w-5 h-5 relative object-cover z-[1]"
                            alt=""
                            src="/office-798008-1@2x.png"
                          />
                        </div>
                        <div className="relative z-[1]">Road and safety</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_7px]">
                        <img
                          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                          alt=""
                          src="/image-5@2x.png"
                        />
                        <div className="relative z-[1]">30-12-2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[33px_0px] min-w-[420px] max-w-full text-5xl mq750:gap-[16px_0px] mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[572px] flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                    <b className="relative inline-block whitespace-pre-wrap max-w-full z-[1] mq450:text-lgi">
                      Damaged road connecting two village
                    </b>
                    <div className="self-stretch h-[33px] relative text-lg inline-block shrink-0 z-[1]">
                      I would like to draw your kind attention towards the
                      pathetic state of roads in our area. For the last four
                      months, the road has been almost impassable. We have made
                      several complaints, but no action has been taken.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
                    <button className="cursor-pointer [border:none] pt-[7px] pb-1.5 pr-[30px] pl-[7px] bg-silver-100 rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gray-600">
                      <div className="h-[31px] w-[100px] relative rounded-3xs bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                      <div className="relative text-mini font-inria-sans text-black text-left z-[2]">
                        See more
                      </div>
                    </button>
                  </div>
                  <img
                    className="h-[30px] w-[30px] relative object-cover z-[3] ml-[-30px]"
                    loading="lazy"
                    alt=""
                    src="/plus-12805231-1@2x.png"
                  />
                </div>
              </div>
              <div className="h-[156px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <img
                  className="w-[150px] h-[149.8px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <div className="h-28 w-[50px] flex flex-col items-start justify-start text-mini">
                <div className="self-stretch [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[7px] px-[5px] pb-0.5 gap-[6px_0px] z-[1] border-[1px] border-solid border-black">
                  <div className="w-[50px] h-[70px] relative [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
                  <img
                    className="w-[38px] h-[37px] relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/raisehand-12778089-1@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <b className="relative z-[2]">500</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-gainsboro-300 box-border flex flex-row flex-wrap items-end justify-start pt-[3px] pb-1 pr-6 pl-[46px] gap-[17px] max-w-full z-[1] border-b-[1px] border-solid border-black lg:pl-[23px] lg:box-border">
              <div className="h-[163px] w-[1281px] relative bg-gainsboro-300 box-border hidden max-w-full border-b-[1px] border-solid border-black" />
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
                <div className="flex flex-col items-start justify-start gap-[17px_0px]">
                  <button className="cursor-pointer [border:none] pt-1 pb-[5px] pr-5 pl-[15px] bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightgray">
                    <div className="h-[34px] w-[292px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                    <div className="relative text-2xl font-inria-sans text-black text-left z-[2]">
                      Complaint ID: 475638473988
                    </div>
                  </button>
                  <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                    <div className="flex flex-col items-start justify-start gap-[11px_0px]">
                      <div className="flex flex-row items-start justify-start gap-[0px_6px]">
                        <img
                          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                          alt=""
                          src="/placeholder-684809-1@2x.png"
                        />
                        <div className="relative z-[1]">
                          XYZ Village, PQR district
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_5px]">
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <img
                            className="w-5 h-5 relative object-cover z-[1]"
                            alt=""
                            src="/office-798008-1@2x.png"
                          />
                        </div>
                        <div className="relative z-[1]">Road and safety</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_7px]">
                        <img
                          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
                          alt=""
                          src="/image-5@2x.png"
                        />
                        <div className="relative z-[1]">30-12-2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[33px_0px] min-w-[421px] max-w-full text-5xl mq750:gap-[16px_0px] mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[574px] flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
                    <b className="relative inline-block whitespace-pre-wrap max-w-full z-[1] mq450:text-lgi">
                      Damaged road connecting two village
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-lg">
                      <div className="h-[33px] flex-1 relative inline-block max-w-full z-[1]">
                        I would like to draw your kind attention towards the
                        pathetic state of roads in our area. For the last four
                        months, the road has been almost impassable. We have
                        made several complaints, but no action has been taken.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
                    <button className="cursor-pointer [border:none] pt-[7px] pb-1.5 pr-[30px] pl-[7px] bg-silver-100 rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gray-600">
                      <div className="h-[31px] w-[100px] relative rounded-3xs bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                      <div className="relative text-mini font-inria-sans text-black text-left z-[2]">
                        See more
                      </div>
                    </button>
                  </div>
                  <img
                    className="h-[30px] w-[30px] relative object-cover z-[3] ml-[-30px]"
                    loading="lazy"
                    alt=""
                    src="/plus-12805231-1@2x.png"
                  />
                </div>
              </div>
              <div className="h-[156px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <img
                  className="w-[150px] h-[149.8px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <div className="h-28 w-[50px] flex flex-col items-start justify-start text-mini">
                <div className="self-stretch [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[7px] px-[5px] pb-0.5 gap-[6px_0px] z-[1] border-[1px] border-solid border-black">
                  <div className="w-[50px] h-[70px] relative [background:linear-gradient(180deg,_rgba(254,_214,_214,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
                  <img
                    className="w-[38px] h-[37px] relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/raisehand-12778089-1@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <b className="relative z-[2]">500</b>
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

export default PendingComplaints;
