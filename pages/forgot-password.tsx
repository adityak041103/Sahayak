import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSection from "../components/header-section";
import UserFormContainer from "../components/user-form-container";
import FrameCancelUpdate from "../components/frame-cancel-update";
import Footer from "../components/footer";

const ForgotPassword: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/officers-home");
  }, [router]);

  const onMedicineClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[33.5px_0px] tracking-[normal] mq750:gap-[17px_0px]">
      <HeaderSection
        user11447091="/user-1144709-1@2x.png"
        rectangle31="/rectangle-311.svg"
        circulars="/polygon-1-11.svg"
        rectangle34="/rectangle-341.svg"
        headerPadding="unset"
        closeComplaintTextPadding="0px 0px 14px"
        complaintsBackgroundColor="#fff"
        circularsIconColor="#000"
        profileBackgroundColor="#000"
        propColor="#fff"
        onRectangleClick={onRectangleClick}
      />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full lg:flex-wrap">
          <UserFormContainer
            propBackgroundColor="#e9e9e9"
            propBoxShadow="unset"
            propBackgroundColor1="#e9e9e9"
            propBackgroundColor2="#c0c0c0"
            propBoxShadow1="0px 4px 4px rgba(0, 0, 0, 0.25)"
            propBackgroundColor3="#c0c0c0"
            onForgotPasswordGroupClick={onMedicineClick}
          />
          <FrameCancelUpdate
            changePassword="Forgot Password"
            enterOldPassword="Enter your registered phone number"
            cancelUpdateGroupPlacehol="Enter your registered phone number"
            enterNewPassword="Enter your registered email id"
            frameEnterNewPassPlacehol="Enter your registered email id"
            update="Next"
            propColor="#888"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
