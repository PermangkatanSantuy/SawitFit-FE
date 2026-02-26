import PageLayout from "@/components/PageLayout/PageLayout";
import TopbarApp from "@/components/Topbar/Topbar";
import SidebarApp from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <PageLayout>
      <SidebarApp />
      <div className="max-h-screen min-w-0 font-inter">
        <TopbarApp />
        <main className="flex flex-row h-screen w-full p-(--spacing-huge) items-center">
          <h2>Food Diary</h2>
        </main>
      </div>
    </PageLayout>
  );
}
