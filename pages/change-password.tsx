import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PortalHeader from "../components/portal-header";
import UserFormContainer from "../components/user-form-container";
import FrameCancelUpdate from "../components/frame-cancel-update";
import Footer from "../components/footer";

const ChangePassword: NextPage = () => {
  const router = useRouter();

  const onForgotPasswordGroupClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[33.5px_0px] tracking-[normal] mq750:gap-[17px_0px]">
      <PortalHeader />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq750:pl-7 mq750:pr-7 mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full lg:flex-wrap">
          <UserFormContainer
            onForgotPasswordGroupClick={onForgotPasswordGroupClick}
          />
          <FrameCancelUpdate
            changePassword="Change Password"
            enterOldPassword="Enter old Password"
            cancelUpdateGroupPlacehol="Enter old Password"
            enterNewPassword="Enter new Password"
            frameEnterNewPassPlacehol="Enter new Password"
            update="Update"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChangePassword;
