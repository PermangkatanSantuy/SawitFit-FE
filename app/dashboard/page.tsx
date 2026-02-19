import SidebarApp from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2">
      <SidebarApp />
      <div className="flex max-h-screen max-w-screen items-center justify-center font-inter">
        <main className="flex flex-row h-screen w-full p-(--spacing-huge) items-center">
          <h2>Food Diary</h2>
        </main>
      </div>
    </div>
  );
}
