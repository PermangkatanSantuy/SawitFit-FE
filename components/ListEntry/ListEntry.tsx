interface ListEntryProps {
  day: string | null;
  date: string | null;
  weight: number | null;
  src: string | null;
}

export function ListEntry({ day, date, weight, src }: ListEntryProps) {
  const displayDay = day ?? "Day";
  const displayDate = date ?? "dd/mm/yyyy";
  const displayWeight = weight ?? "No Data";
  const displayPhoto = src ?? "+";
  return (
    <div className="flex flex-row items-center justify-between gap-(--spacing-medium) w-full px-(--spacing-medium-large) py-(--spacing-medium) border-2 border-(--color-secondary-40)">
      <div className="flex flex-col gap-(--spacing-tiny)">
        <p className="body-small">{displayDay}</p>
        <p className="label">{displayDate}</p>
        <p className="label">{displayWeight} Kg</p>
      </div>
      <div
        className={`w-16 h-16 flex items-center justify-center border-2 border-(--color-secondary-40) ${src ? "label" : "heading-1"}`}
      >
        {displayPhoto}
      </div>
    </div>
  );
}
