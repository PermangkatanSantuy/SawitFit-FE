interface ListMealProps {
  name: string | null;
  calorie: number | null;
  amount: number | null;
  unit: string | null;
}

export function ListMeal({ name, calorie, amount, unit }: ListMealProps) {
  const displayName = name ?? "Untitled";
  const displayCal = calorie ?? "No Data";
  const displayAmount = amount ?? 0;
  const displayUnit = unit ?? "Gram";
  return (
    <div className="flex flex-row items-center justify-between gap-(--spacing-medium) w-full px-(--spacing-medium-large) py-(--spacing-medium) border-2 border-(--color-secondary-40)">
      <div className="flex flex-col gap-(--spacing-tiny)">
        <p className="body-large">{displayName}</p>
        <div className="flex flex-row gap-(--spacing-tiny)">
          <p className="">{displayCal} Cal</p>
          <p>-</p>
          <p className="">
            {displayAmount} {displayUnit}
          </p>
        </div>
      </div>
      <div className="heading-1 px-(--spacing-medium-small) py-(--spacing-tiny) border-2 border-(--color-secondary-40)">
        +
      </div>
    </div>
  );
}
