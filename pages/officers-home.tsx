import type { NextPage } from "next";

const OfficersHome: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[44px_0px] tracking-[normal] mq750:gap-[22px_0px]">
      <div className="self-stretch h-[885px] relative bg-white hidden" />
      <section className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-5xl text-black font-inria-sans">
        <div className="w-[1440px] flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
          <header className="self-stretch [background:linear-gradient(180deg,_rgba(228,_228,_228,_0.68)_0.01%,_rgba(179,_174,_167,_0.69))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-end justify-between pt-0 pb-8 pr-[57px] pl-2 box-border max-w-full gap-[20px] text-left text-13xl text-black font-inria-sans mq750:flex-wrap mq750:pr-7 mq750:box-border">
            <div className="h-[139px] w-[1440px] relative [background:linear-gradient(180deg,_rgba(228,_228,_228,_0.68)_0.01%,_rgba(179,_174,_167,_0.69))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="w-[414px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
              <img
                className="h-[107px] w-36 relative object-cover z-[1] mq450:flex-1"
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[175px]">
                <i className="self-stretch relative whitespace-nowrap z-[1]">
                  Welcome Again!
                </i>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3.5 text-6xl">
              <div className="flex flex-col items-start justify-start gap-[6px_0px]">
                <div className="rounded-11xl bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 gap-[9px] z-[1]">
                  <div className="h-12 w-[220px] relative rounded-11xl bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                  <img
                    className="h-12 w-12 relative object-cover z-[1]"
                    alt=""
                    src="/user-1144709-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pr-[7px] pl-0">
                    <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[1]">
                      User name
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                    <img
                      className="w-4 h-3.5 relative object-contain z-[1]"
                      alt=""
                      src="/frame-group.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 pr-10 pl-[57px] text-xl text-gray-500">
                  <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                    Administrator
                  </i>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="w-[1327px] bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-x-auto shrink-0 flex flex-row items-start justify-between py-2 px-[140px] box-border gap-[20px] max-w-full z-[1] ml-[-1384px] lg:pl-[70px] lg:pr-[70px] lg:box-border mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
          <div className="h-16 w-[1327px] relative bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 hidden" />
          <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[19px] pl-[18px] bg-black rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-darkslategray-100">
            <img
              className="h-12 w-[100px] relative rounded-11xl hidden"
              alt=""
              src="/rectangle-29.svg"
            />
            <div className="relative text-5xl font-inria-sans text-white text-left z-[1] mq450:text-lgi">
              Home
            </div>
          </button>
          <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
            <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[18px] pl-[19px] bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
              <img
                className="h-12 w-[149px] relative rounded-11xl hidden"
                alt=""
                src="/rectangle-30.svg"
              />
              <div className="relative text-5xl font-inria-sans text-black text-left z-[1] mq450:text-lgi">
                Dashboard
              </div>
            </button>
          </div>
          <div className="rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-2 pl-3.5 gap-[7px] z-[2]">
            <img
              className="h-12 w-40 relative rounded-11xl hidden"
              alt=""
              src="/rectangle-311.svg"
            />
            <div className="relative z-[1] mq450:text-lgi">Complaints</div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <img
                className="w-3.5 h-3 relative object-contain z-[1]"
                alt=""
                src="/polygon-1-11.svg"
              />
            </div>
          </div>
          <div className="rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-2 pb-[11px] pr-[3px] pl-[15px] gap-[7px] z-[2]">
            <img
              className="h-12 w-[121px] relative rounded-11xl hidden"
              alt=""
              src="/rectangle-32.svg"
            />
            <div className="relative z-[1] mq450:text-lgi">Manage</div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <img
                className="w-3.5 h-3 relative object-contain z-[1]"
                alt=""
                src="/polygon-1-11.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-4 bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
            <img
              className="h-12 w-[121px] relative rounded-11xl hidden"
              alt=""
              src="/rectangle-32.svg"
            />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[1] mq450:text-lgi">
              Circulars
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-2 pb-[11px] pr-[15px] pl-[13px] bg-white rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
            <img
              className="h-12 w-24 relative rounded-11xl hidden"
              alt=""
              src="/rectangle-34.svg"
            />
            <div className="relative text-5xl font-inria-sans text-black text-left z-[1] mq450:text-lgi">
              Profile
            </div>
          </button>
        </div>
      </section>
      <section className="w-[1320px] flex flex-row items-start justify-start pt-0 pb-[13px] pr-0 pl-5 box-border max-w-full text-left text-3xl text-black font-inria-sans">
        <div className="w-[1183px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[66px_0px] max-w-full lg:gap-[33px_0px] mq750:gap-[16px_0px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap mq1050:justify-center">
            <div className="w-[220px] rounded-11xl bg-gainsboro-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[35px] px-3 pb-7 box-border gap-[29px] z-[1]">
              <div className="w-[220px] h-[198px] relative rounded-11xl bg-gainsboro-400 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[62px]">
                <img
                  className="h-20 w-20 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/file-1150592-1@2x.png"
                />
              </div>
              <b className="relative z-[1] mq450:text-lg">Pending Complaints</b>
            </div>
            <div className="w-[220px] rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[35px] px-8 pb-7 box-border gap-[29px] z-[1]">
              <div className="w-[220px] h-[198px] relative rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[38px]">
                <img
                  className="h-20 w-20 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/checked-709510-1@2x.png"
                />
              </div>
              <b className="relative z-[1] mq450:text-lg">Close complaint</b>
            </div>
            <div className="w-[220px] rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[35px] px-[18px] pb-7 box-border gap-[29px] z-[2]">
              <b className="relative hidden mq450:text-lg">Forward complaint</b>
              <div className="w-[220px] h-[198px] relative rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[46px] pl-[58px]">
                <img
                  className="h-20 w-20 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/chevrons-9678557-1@2x.png"
                />
              </div>
              <b className="relative z-[1] mq450:text-lg">Forward complaint</b>
            </div>
            <div className="w-[220px] rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[35px] px-[60px] pb-7 box-border gap-[29px] z-[1]">
              <div className="w-[220px] h-[198px] relative rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-[13px]">
                <img
                  className="h-20 w-20 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/calendar-3512893-1@2x.png"
                />
              </div>
              <b className="relative z-[1] mq450:text-lg">Deadlines</b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[0px_94px] max-w-full text-17xl lg:gap-[0px_47px] mq1050:flex-wrap mq750:gap-[0px_23px]">
            <div className="flex-[0.7996] rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[33px] pb-[31px] pr-[51px] pl-14 box-border gap-[29px_0px] min-w-[347px] max-w-full z-[1] mq450:pt-[21px] mq450:pb-5 mq450:box-border mq450:min-w-full mq1050:flex-1 mq750:pl-7 mq750:pr-[25px] mq750:box-border">
              <div className="w-[534px] h-[424px] relative rounded-11xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center">
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-3xl mq1050:text-10xl">
                  FEEDBACKS
                </h3>
              </div>
              <div className="w-[427px] overflow-x-auto flex flex-col items-end justify-start gap-[19px_0px] max-w-full text-xl">
                <div className="w-[427px] bg-white flex flex-row items-end justify-start pt-1 pb-3 pr-[11px] pl-[5px] box-border gap-[11px] z-[2]">
                  <div className="h-[68px] w-[427px] relative bg-white hidden max-w-full" />
                  <img
                    className="h-[45px] w-[45px] relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/user-149071-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <b className="relative z-[1] mq450:text-base">
                          C no. BR84738479
                        </b>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-sm">
                          <div className="relative z-[1]">Date: 28-12-2023</div>
                        </div>
                      </div>
                      <div className="relative text-base font-light z-[1]">
                        Feedback regarding their complaints..........
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] bg-white flex flex-row items-end justify-start pt-1 pb-3 pr-[11px] pl-[5px] box-border gap-[0px_11px] z-[2]">
                  <div className="h-[68px] w-[427px] relative bg-white hidden max-w-full" />
                  <img
                    className="h-[45px] w-[45px] relative object-contain z-[3]"
                    alt=""
                    src="/user-149071-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <b className="relative z-[3] mq450:text-base">
                          C no. BR84738479
                        </b>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-sm">
                          <div className="relative z-[3]">Date: 28-12-2023</div>
                        </div>
                      </div>
                      <div className="relative text-base font-light z-[3]">
                        Feedback regarding their complaints..........
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[427px] bg-white flex flex-row items-end justify-start pt-1 pb-3 pr-[11px] pl-[5px] box-border gap-[11px] z-[2]">
                  <div className="h-[68px] w-[427px] relative bg-white hidden max-w-full" />
                  <img
                    className="h-[45px] w-[45px] relative object-contain z-[1]"
                    alt=""
                    src="/user-149071-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <b className="relative z-[1] mq450:text-base">
                          C no. BR84738479
                        </b>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-sm">
                          <div className="relative z-[1]">Date: 28-12-2023</div>
                        </div>
                      </div>
                      <div className="relative text-base font-light z-[1]">
                        Feedback regarding their complaints..........
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-1 px-[9px] bg-silver-300 w-[92px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start box-border whitespace-nowrap z-[2] hover:bg-gray-900">
                  <div className="h-[27px] w-[92px] relative bg-silver-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                  <b className="relative text-base font-inria-sans text-black text-left z-[3]">
                    View More
                  </b>
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[348px] min-h-[344px] max-w-full text-3xl mq450:min-w-full mq1050:flex-1 mq1050:min-h-[auto]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_35px] mq750:flex-wrap mq750:gap-[0px_17px]">
                <div className="flex-1 rounded-t-none rounded-b-31xl [background:linear-gradient(180deg,_rgba(208,_95,_95,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-[79px] px-[21px] pb-[34px] gap-[27px] min-w-[162px] z-[1] border-[1px] border-solid border-gray-700">
                  <div className="w-[250px] h-[304px] relative rounded-t-none rounded-b-31xl [background:linear-gradient(180deg,_rgba(208,_95,_95,_0.7)_8.33%,_#d05f5f_99.99%,_rgba(208,_95,_95,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-gray-700" />
                  <b className="relative z-[1] mq450:text-lg">
                    Complaints Reported
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 text-13xl text-white">
                    <div className="flex-1 rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-[50px] pr-12 pl-[49px] z-[1] border-[1px] border-solid border-black">
                      <div className="h-[138px] w-[198px] relative rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
                      <b className="relative z-[2] mq450:text-lgi mq1050:text-7xl">
                        323467
                      </b>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-none rounded-b-31xl [background:linear-gradient(180deg,_rgba(43,_180,_147,_0),_#56dfbe)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start pt-[79px] px-[21px] pb-[34px] gap-[27px] min-w-[162px] z-[1] border-[1px] border-solid border-darkslategray-200">
                  <div className="w-[250px] h-[304px] relative rounded-t-none rounded-b-31xl [background:linear-gradient(180deg,_rgba(43,_180,_147,_0),_#56dfbe)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-darkslategray-200" />
                  <b className="relative z-[1] mq450:text-lg">
                    Complaints Resolved
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 text-13xl text-white">
                    <div className="flex-1 rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-center py-[50px] px-5 z-[1] border-[1px] border-solid border-black">
                      <div className="h-[138px] w-[198px] relative rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden border-[1px] border-solid border-black" />
                      <b className="relative z-[2] mq450:text-lgi mq1050:text-7xl">
                        0
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-[17px] px-[259px] pb-3 box-border gap-[0px_58px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-black font-inria-sans lg:pl-[129px] lg:pr-[129px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[0px_29px] mq750:pl-16 mq750:pr-16 mq750:box-border">
        <div className="h-16 w-[1440px] relative bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 pr-[38px] pl-0 gap-[0px_7px]">
          <img
            className="h-[35px] w-[35px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/web-3095617-1@2x.png"
          />
          <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[2]">
            Related links
          </div>
        </div>
        <div className="w-[291px] flex flex-row items-start justify-between py-0 pr-[47px] pl-0 box-border gap-[20px] mq450:pr-5 mq450:box-border mq750:hidden">
          <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[2]">
            About us
          </div>
          <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2]">
            Help
          </div>
        </div>
        <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2]">
          FAQs
        </div>
        <div className="flex flex-row items-start justify-start gap-[0px_7px]">
          <img
            className="h-[35px] w-[35px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/emptyemail-80599-1@2x.png"
          />
          <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[2]">
            Contact us
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OfficersHome;
