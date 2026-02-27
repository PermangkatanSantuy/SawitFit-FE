import { DashboardCard } from "@/components/DashboardCard/DashboardCard";
import PageLayout from "@/components/PageLayout/PageLayout";
import SidebarApp from "@/components/Sidebar/Sidebar";
import TopbarApp from "@/components/Topbar/Topbar";

export default function Dashboard() {
  return (
    <PageLayout>
      <SidebarApp />
      <div className="max-h-screen min-w-0 font-inter">
        <TopbarApp />
        <main className="h-screen w-full p-(--spacing-huge) items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-(--spacing-huge)">
            <DashboardCard title="Daily Calories">
              <div className="flex w-full gap-(--spacing-small) items-end">
                <div className="w-24 h-6 bg-(--color-secondary-30)"></div>
                <div className="rotate-100 -translate-y-2 w-10 h-1 bg-(--color-secondary-30)"></div>
                <div className="w-24 h-6 bg-(--color-secondary-30)"></div>
                <div className="w-12 h-3 bg-(--color-secondary-30)"></div>
              </div>
              <div className="w-full h-6 bg-(--color-secondary-30) rounded-lg">
                <div className="max-w-2/3 bg-(--color-secondary-40) h-full rounded-lg"></div>
              </div>
              <div className="flex flex-col gap-(--spacing-small)">
                <div className="flex flex-row justify-between w-full">
                  <div className="w-15 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="w-15 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-15 h-4 bg-(--color-secondary-30)"></div>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard title="Macronutrients">
              <div className="flex flex-col w-full gap-(--spacing-medium-large) items-start">
                <div className="w-48 h-48 mx-auto bg-(--color-secondary-20) border-(--color-secondary-30) border-16 rounded-full"></div>
                <div className="flex flex-col gap-(--spacing-small)">
                  <div className="flex gap-(--spacing-tiny)">
                    <div className="w-4 h-4 bg-(--color-secondary-30)"></div>
                    <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  </div>
                  <div className="flex gap-(--spacing-tiny)">
                    <div className="w-4 h-4 bg-(--color-secondary-30)"></div>
                    <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  </div>
                  <div className="flex gap-(--spacing-tiny)">
                    <div className="w-4 h-4 bg-(--color-secondary-30)"></div>
                    <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  </div>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard title="Today's Workout">
              <div className="flex w-full gap-(--spacing-small) items-end">
                <div className="flex flex-col w-full gap-(--spacing-medium-small)">
                  <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-32 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-32 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-32 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-32 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
                  <div className="w-32 h-4 bg-(--color-secondary-30)"></div>
                </div>
                <div className="w-24 h-4 bg-(--color-secondary-30)"></div>
              </div>
            </DashboardCard>
            <DashboardCard title="Calories Burned">
              <div className="flex w-full gap-(--spacing-small) items-end"></div>
            </DashboardCard>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
