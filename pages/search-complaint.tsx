import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../components/header-section";
import Footer from "../components/footer";

const SearchComplaint: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border gap-[140px_0px] tracking-[normal] mq450:gap-[35px_0px] mq750:gap-[70px_0px]">
      <main className="self-stretch flex flex-col items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[110px_0px] max-w-full mq450:gap-[27px_0px] mq750:gap-[55px_0px]">
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
          <div className="w-[688px] bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start pt-[114px] pb-[84px] pr-[103px] pl-[102px] box-border gap-[57px_0px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq675:pt-[74px] mq675:pb-[55px] mq675:box-border mq750:gap-[28px_0px] mq750:pl-[51px] mq750:pr-[51px] mq750:box-border">
            <div className="w-[688px] h-[539px] relative bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="w-[470px] flex flex-row items-start justify-center max-w-full">
              <div className="w-[232px] flex flex-col items-start justify-start gap-[9px_0px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-14">
                  <img
                    className="h-[94px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/websitesearchicon-1@2x.png"
                  />
                </div>
                <b className="relative z-[1] mq450:text-lg mq750:text-5xl">
                  Search Complaint
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[0px_12px] text-7xl">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <b className="relative z-[1] mq450:text-2xl">
                  Enter complaint ID:
                </b>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-gainsboro-300 h-11 flex-1 flex flex-row items-start justify-start pt-[11px] px-[26px] pb-[9px] box-border font-inria-sans text-xl text-gray-400 min-w-[163px] z-[1]"
                placeholder="eg. 468989867575"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center">
              <button className="cursor-pointer [border:none] pt-1.5 pb-[7px] pr-[47px] pl-[50px] bg-silver-100 rounded-mini shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[1] hover:bg-gray-600">
                <div className="h-11 w-[179px] relative rounded-mini bg-silver-100 hidden" />
                <div className="relative text-7xl font-inria-sans text-black text-left z-[1] mq450:text-2xl">
                  Submit
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

export default SearchComplaint;
