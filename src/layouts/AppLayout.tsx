import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main>
      <Outlet />
      {/* <Footer linkGroups={footerLinkGroups} socialLinks={socialLinks} /> */}
    </main>
  );
}

export default AppLayout;
