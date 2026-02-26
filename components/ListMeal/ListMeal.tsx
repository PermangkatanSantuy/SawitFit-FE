interface ListMealProps {
  name: string;
  calorie: number;
  amount?: number;
  unit?: string;
}

export function ListMeal({ name, calorie, amount, unit }: ListMealProps) {
  unit = "Gram";
  amount = 1;
  return (
    <div className="flex flex-row items-center justify-between gap-(--spacing-medium) w-full px-(--spacing-medium-large) py-(--spacing-medium) border-2 border-(--color-secondary-40)">
      <div className="flex flex-col gap-(--spacing-tiny)">
        <p className="body-large">{name}</p>
        <div className="flex flex-row gap-(--spacing-tiny)">
          <p className="">{calorie} Cal</p>
          <p>-</p>
          <p className="">
            {amount} {unit}
          </p>
        </div>
      </div>
      <div className="heading-1 px-(--spacing-medium-small) py-(--spacing-tiny) border-2 border-(--color-secondary-40)">
        +
      </div>
    </div>
  );
}
