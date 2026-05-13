import { Outlet } from "react-router-dom";
import Footer from "@/shared/layout/components/Footer";
import { footerLinkGroups, socialLinks } from "@/landing/constants/constants";

function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer linkGroups={footerLinkGroups} socialLinks={socialLinks} />
    </>
  );
}

export default AppLayout;
