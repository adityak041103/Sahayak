import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-between pt-[17px] pb-3 pr-[300px] pl-[259px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-5xl text-black font-inria-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[129px] mq750:pr-[150px] mq750:box-border">
      <div className="h-16 w-[1440px] relative bg-silver-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
      <div className="flex flex-row items-start justify-start gap-[0px_7px]">
        <img
          className="h-[35px] w-[35px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/web-3095617-1@2x.png"
        />
        <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[1]">
          Related links
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-0 gap-[0px_8px]">
        <img
          className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
          loading="lazy"
          alt=""
          src="/information-545674-1@2x.png"
        />
        <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[1]">
          About us
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 gap-[0px_8px]">
        <img
          className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
          loading="lazy"
          alt=""
          src="/question-471664-1@2x.png"
        />
        <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
          Help
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_9px]">
        <img
          className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
          loading="lazy"
          alt=""
          src="/conversation-942802-2@2x.png"
        />
        <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
          FAQs
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_7px]">
        <img
          className="h-[35px] w-[35px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/emptyemail-80599-1@2x.png"
        />
        <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] whitespace-nowrap z-[1]">
          Contact us
        </div>
      </div>
    </footer>
  );
};

export default Footer;
