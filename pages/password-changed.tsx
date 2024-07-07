import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../components/header-section";
import UserFormContainer from "../components/user-form-container";
import Footer from "../components/footer";

const PasswordChanged: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  const onUpdateProfileGroupClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border gap-[33.5px_0px] tracking-[normal] mq750:gap-[17px_0px]">
      <HeaderSection
        user11447091="/user-1144709-1@2x.png"
        rectangle31="/rectangle-311.svg"
        circulars="/polygon-1-11.svg"
        rectangle34="/rectangle-341.svg"
        headerPadding="0px 2px 0px 0px"
        closeComplaintTextPadding="17px 0px 0px"
        complaintsBackgroundColor="#fff"
        circularsIconColor="#000"
        profileBackgroundColor="#000"
        propColor="#fff"
        onRectangleClick={onRectangleClick}
      />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-5xl text-gray-400 font-inria-sans lg:flex-wrap">
          <UserFormContainer
            propBackgroundColor="#e9e9e9"
            propBoxShadow="unset"
            propBackgroundColor1="#e9e9e9"
            propBackgroundColor2="#e9e9e9"
            propBoxShadow1="unset"
            propBackgroundColor3="#e9e9e9"
            onForgotPasswordGroupClick={onUpdateProfileGroupClick}
          />
          <div className="flex-1 bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start pt-[173px] pb-[200px] pr-[289px] pl-72 box-border gap-[29px_0px] min-w-[577px] max-w-full z-[1] mq1050:pl-36 mq1050:pr-36 mq1050:box-border mq750:pt-28 mq750:pb-[130px] mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[888px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center">
              <img
                className="h-[120px] w-[120px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/security-102649-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[33px] gap-[6px_0px]">
              <div className="relative whitespace-pre-wrap z-[2] mq450:text-lgi">
                Your Password has been reset
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[62px] pl-[75px] text-13xl text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative z-[2] mq1050:text-7xl mq450:text-lgi">
                  Successfully
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[34px]">
              <button className="cursor-pointer [border:none] pt-3.5 px-[51px] pb-[13px] bg-gainsboro-300 rounded-11xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[2] hover:bg-silver-200">
                <div className="h-[65px] w-[230px] relative rounded-11xl bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
                <b className="relative text-13xl font-inria-sans text-black text-left z-[3] mq1050:text-7xl mq450:text-lgi">
                  Continue
                </b>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PasswordChanged;
