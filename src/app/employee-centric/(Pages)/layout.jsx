import Header from "@/components/Header/Admin";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/providers/PageWrapper";
import { employeeCentricPaths, jobSeekerPaths } from "@/utils/allPaths";
import { jobSeekerProfile } from "@/utils/headerProfileLink";
import { employeeCentricSidebar, jobSeekerSidebar } from "@/utils/sidebar";
export default function PagesLayout({ children }) {
  return (
    <>
      <div className="w-full flex">
        <Sidebar navLinks={employeeCentricSidebar} />
        <div className="flex-1 bg-white flex flex-col items-center">
          <Header
            profileLink={jobSeekerProfile}
            allPaths={employeeCentricPaths}
          />
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </>
  );
}
