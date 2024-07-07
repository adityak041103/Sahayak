import type { NextPage } from "next";
import FrameComponent11 from "../components/frame-component11";
import Footer from "../components/footer";

const Profile: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[33.5px_0px] tracking-[normal] mq750:gap-[17px_0px]">
      <FrameComponent11 />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-xl text-gray-500 font-inria-sans lg:flex-wrap">
          <div className="h-[722px] w-[439px] bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start pt-7 px-[5px] pb-[163px] box-border gap-[26px_0px] min-w-[439px] max-w-full lg:flex-1 mq750:pt-5 mq750:pb-[106px] mq750:box-border mq750:min-w-full">
            <div className="w-[439px] h-[722px] relative bg-gainsboro-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="w-40 flex flex-col items-start justify-start gap-[5.33px_0px]">
                <div className="flex flex-row items-start justify-start py-0 px-3.5">
                  <img
                    className="h-[120px] w-[120px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/user-149071-2@2x.png"
                  />
                </div>
                <div className="self-stretch relative text-13xl text-black z-[1] mq1050:text-7xl mq450:text-lgi">
                  User name
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-3.5">
                  <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-base">
                    Administrator
                  </i>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[19px]">
                  <i className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-base">
                    Department
                  </i>
                </div>
              </div>
            </div>
            <div className="w-[429px] flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[8px_0px] max-w-full text-5xl text-black">
              <div className="w-[429px] bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-[18px] px-8 box-border whitespace-nowrap z-[1]">
                <div className="h-[65px] w-[429px] relative bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                <div className="relative z-[2]">Update Profile</div>
              </div>
              <div className="w-[429px] bg-whitesmoke-500 flex flex-row items-start justify-start py-[18px] px-8 box-border whitespace-nowrap z-[1]">
                <div className="h-[65px] w-[429px] relative bg-whitesmoke-500 hidden max-w-full" />
                <div className="relative z-[1]">Change Password</div>
              </div>
              <div className="w-[429px] bg-whitesmoke-500 flex flex-row items-start justify-start py-[18px] px-8 box-border whitespace-nowrap z-[1]">
                <div className="h-[65px] w-[429px] relative bg-whitesmoke-500 hidden max-w-full" />
                <div className="relative z-[1]">Forgot Password</div>
              </div>
              <div className="w-[429px] flex-1 bg-whitesmoke-500 flex flex-row items-start justify-start py-[18px] px-8 box-border z-[1]">
                <div className="h-[65px] w-[429px] relative bg-whitesmoke-500 hidden max-w-full" />
                <div className="self-stretch w-[90px] flex flex-row items-start justify-start">
                  <div className="relative z-[1] mq450:text-lgi">Sign-out</div>
                  <div className="self-stretch w-0 relative inline-block z-[2] ml-[-52px] mq450:text-lgi">{` `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[78px] pb-[121px] pr-[150px] pl-[147px] box-border gap-[24px_0px] min-w-[577px] max-w-full z-[1] text-black mq1050:pl-[73px] mq1050:pr-[75px] mq1050:box-border mq750:pt-[51px] mq750:pb-[79px] mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[888px] h-[722px] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="flex flex-row items-start justify-start pt-0 px-px pb-3 text-17xl">
              <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq1050:text-10xl mq450:text-3xl">
                Update Profile
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative z-[2] mq450:text-base">First name</div>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-gainsboro-300 self-stretch h-[45px] flex flex-row items-start justify-start pt-[7px] px-[34px] pb-3.5 box-border font-inria-sans text-xl text-gray-400 min-w-[250px] z-[2]"
                placeholder="User"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <div className="relative z-[2] mq450:text-base">
                    Last name
                  </div>
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-gainsboro-300 self-stretch h-[45px] flex flex-row items-start justify-start pt-[13px] px-[33px] pb-2 box-border font-inria-sans text-xl text-gray-400 min-w-[250px] z-[2]"
                  placeholder="Name"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative z-[2] mq450:text-base">Phone</div>
              </div>
              <div className="self-stretch bg-gainsboro-300 box-border flex flex-row items-start justify-start pt-[13px] px-[34px] pb-2 max-w-full z-[2] border-[1px] border-solid border-black">
                <div className="h-[45px] w-[587px] relative bg-gainsboro-300 box-border hidden max-w-full border-[1px] border-solid border-black" />
                <input
                  className="w-[105px] [border:none] [outline:none] font-inria-sans text-xl bg-[transparent] h-6 relative text-gray-400 text-left inline-block p-0 z-[3] mq450:text-base"
                  placeholder="8887777666"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <div className="relative z-[2] mq450:text-base">Email</div>
                </div>
                <div className="self-stretch bg-gainsboro-300 box-border flex flex-row items-start justify-start pt-2 px-8 pb-[13px] max-w-full z-[2] border-[1px] border-solid border-black">
                  <div className="h-[45px] w-[587px] relative bg-gainsboro-300 box-border hidden max-w-full border-[1px] border-solid border-black" />
                  <input
                    className="w-[195px] [border:none] [outline:none] font-inria-sans text-xl bg-[transparent] h-6 relative text-gray-400 text-left inline-block whitespace-nowrap p-0 z-[3] mq450:text-base"
                    placeholder="username@gmail.com"
                    type="text"
                  />
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

export default Profile;
