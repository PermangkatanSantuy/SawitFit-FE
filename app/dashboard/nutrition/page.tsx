import SidebarApp from "../../../components/Sidebar/Sidebar";

export default function Nutrition() {
  return (
    <div className="grid grid-cols-[max-content_1fr] overflow-hidden">
      <SidebarApp />
      <div className="max-h-screen min-w-0 items-center justify-center font-inter text-(--color-secondary-40) overflow-y-auto">
        <main className="flex flex-col gap-(--spacing-medium) min-w-0 p-(--spacing-massive) items-start">
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
            <div className="p-5 w-40 border-3 border-(--color-secondary-40)">
              <p className="w-full">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
            <div className="p-5 w-40 border-3 border-(--color-secondary-40)">
              <p className="w-full">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
            <div className="p-5 w-40 border-3 border-(--color-secondary-40)">
              <p className="w-full">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
            <div className="p-5 w-40 border-3 border-(--color-secondary-40)">
              <p className="w-full">Target</p>
              <h2 className="heading-2">2200</h2>
            </div>
          </div>

          {/* Breakfast */}
          <div className="flex flex-col w-full border-3">
            <div className="px-(--spacing-medium) py-(--spacing-medium-small) bg-(--color-secondary-40) w-full">
              <h3 className="heading-3 text-(--color-text-primary-dark)">
                Breakfast
              </h3>
            </div>

            <div className="flex flex-col gap-7 px-(--spacing-medium) py-5 w-full">
              <div className="flex flex-col gap-1">
                <div className="w-20 h-3 bg-(--color-secondary-40)"></div>
                <div className="w-24 h-1 bg-(--color-secondary-40)"></div>
              </div>
              <hr className="border-2"></hr>
              <div className="flex flex-col gap-1">
                <div className="w-20 h-3 bg-(--color-secondary-40)"></div>
                <div className="w-24 h-1 bg-(--color-secondary-40)"></div>
              </div>
              <hr className="border-2"></hr>
              <div className="flex flex-col gap-1">
                <div className="w-20 h-3 bg-(--color-secondary-40)"></div>
                <div className="w-24 h-1 bg-(--color-secondary-40)"></div>
              </div>
              <hr className="border-2"></hr>
              <div className="flex flex-col gap-1">
                <div className="w-20 h-3 bg-(--color-secondary-40)"></div>
                <div className="w-24 h-1 bg-(--color-secondary-40)"></div>
              </div>

              <div className="flex items-center justify-center py-(--spacing-medium) w-full border-dashed border-2">
                <h2 className="heading-2">+</h2>
                <p>Add Food</p>
              </div>
            </div>
          </div>

          {/* Lunch */}
          <div className="flex flex-col w-full border-3">
            <div className="px-(--spacing-medium) py-(--spacing-medium-small) bg-(--color-secondary-40) w-full">
              <h3 className="heading-3 text-(--color-text-primary-dark)">
                Lunch
              </h3>
            </div>

            <div className="flex flex-col gap-7 px-(--spacing-medium) py-5 w-full">
              <div className="flex flex-col gap-1">
                <div className="w-20 h-3 bg-(--color-secondary-40)"></div>
                <div className="w-24 h-1 bg-(--color-secondary-40)"></div>
              </div>

              <div className="flex items-center justify-center py-(--spacing-medium) w-full border-dashed border-2">
                <h2 className="heading-2">+</h2>
                <p>Add Food</p>
              </div>
            </div>
          </div>

          {/* Dinenr */}
          <div className="flex flex-col w-full border-3">
            <div className="px-(--spacing-medium) py-(--spacing-medium-small) bg-(--color-secondary-40) w-full">
              <h3 className="heading-3 text-(--color-text-primary-dark)">
                Dinner
              </h3>
            </div>

            <div className="flex flex-col gap-7 px-(--spacing-medium) py-5 w-full">
              <div className="flex flex-col gap-1">
                <div className="w-20 h-3 bg-(--color-secondary-40)"></div>
                <div className="w-24 h-1 bg-(--color-secondary-40)"></div>
              </div>

              <div className="flex items-center justify-center py-(--spacing-medium) w-full border-dashed border-2">
                <h2 className="heading-2">+</h2>
                <p>Add Food</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
