import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
// import { footerLinkGroups, socialLinks } from "@/landing/constants/constants";

function AppLayout() {
  return (
    <main>
      <Outlet />
      {/* <Footer linkGroups={footerLinkGroups} socialLinks={socialLinks} /> */}
    </main>
  );
}

export default AppLayout;
