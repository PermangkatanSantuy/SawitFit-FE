import SidebarApp from "../../../components/Sidebar/Sidebar";

export default function Nutrition() {
  return (
    <div className="grid grid-cols-[max-content_1fr] grid-flow-col-dense">
      <SidebarApp />
      <div className="col-span-2 max-h-screen max-w-screen items-center justify-center font-inter text-(--color-secondary-40)">
        <main className="flex flex-col gap-(--spacing-medium) h-screen w-full p-(--spacing-massive) items-start">
          {/* Page Name */}
          <h2 className="heading-2">Food Diary</h2>

          {/* Days Navigation */}
          <nav className="flex flex-row gap-(--spacing-small)">
            <div className="px-(--spacing-small) my-(--spacing-small) border-2 border-(--color-secondary-40)">
              {`<`}
            </div>
            <div className="p-(--spacing-small) border-2 border-(--color-secondary-40)">
              Today
            </div>
            <div className="px-(--spacing-small) my-(--spacing-small) border-2 border-(--color-secondary-40)">
              {`>`}
            </div>
          </nav>

          {/* Statistics */}
          <div className="flex flex-row justify-between w-full">
            <div className="p-5 border-3 border-(--color-secondary-40)">
              <p className="w-40">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
            <div className="p-5 border-3 border-(--color-secondary-40)">
              <p className="w-40">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
            <div className="p-5 border-3 border-(--color-secondary-40)">
              <p className="w-40">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
            <div className="p-5 border-3 border-(--color-secondary-40)">
              <p className="w-40">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
          </div>

          {/* Breakfast */}
          <div className=""></div>
        </main>
      </div>
    </div>
  );
}
