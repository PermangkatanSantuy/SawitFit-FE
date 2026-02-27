interface DashboardCardWrapperProps {
  children: React.ReactNode;
  title: string | null;
}

export function DashboardCard({ children, title }: DashboardCardWrapperProps) {
  return (
    <div className="flex flex-col gap-(--spacing-large) bg-(--color-secondary-20) rounded-lg px-(--spacing-large) py-(--spacing-extra-large)">
      <div className="flex flex-col gap-(--spacing-small) w-full">
        <h2 className="heading-2 text-(--color-secondary-30)">{title}</h2>
        <hr></hr>
      </div>

      {children}
    </div>
  );
}
