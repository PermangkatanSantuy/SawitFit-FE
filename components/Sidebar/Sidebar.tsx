export default function Sidebar() {
  return (
    <div className="flex flex-col fixed items-center p-8 bg-(--color-bg-light-alt)">
      <div className="flex flex-row items-center justify-start gap-(--spacing-tiny) w-full px-5 py-2 bg-(--color-bg-light)">
        <div className="w-10 h-10 bg-(--color-bg-light-alt)"></div>
        <div className="w-40 h-4 bg-(--color-bg-light-alt)"></div>
      </div>
    </div>
  );
}
