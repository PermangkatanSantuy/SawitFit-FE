"use client";

import { ListMeal } from "@/components/ListMeal/ListMeal";
import { Capitalize } from "@/utils/Capitalize/Capitalize";
import { useRouter, useSearchParams } from "next/navigation";

export default function AddFoodPage() {
  const r = useRouter();
  const searchParams = useSearchParams();
  const meal = searchParams.get("meal");
  const title = Capitalize(meal);

  return (
    <div className="min-h-screen w-full font-inter text-(--color-secondary-40)">
      <main className="mx-auto w-full h-full max-w-4xl p-(--spacing-massive)">
        {/* Page Name */}
        <div className="flex flex-col gap-(--spacing-huge)">
          <div className="flex flex-col gap-(--spacing-extra-large)">
            <nav className="flex flex-row justify-between items-center w-full">
              <div className="flex items-center gap-(--spacing-medium)">
                <div
                  onClick={r.back}
                  className="px-(--spacing-medium) py-(--spacing-small) border-2 border-(--color-secondary-40)"
                >
                  {`<`}
                </div>
                <h2 className="heading-2">Add Food to {title}</h2>
              </div>
              <h2 className="font-(--font-size-body-bold) font-(--font-weight-bold) px-(--spacing-medium) py-(--spacing-small) border-2 border-(--color-secondary-40)">
                {title}
              </h2>
            </nav>
            <div className="w-full px-(--spacing-medium-large) py-(--spacing-medium) border-2 border-(--color-secondary-40)">
              <p className="label">Search foods...</p>
            </div>
            <div className="flex flex-row items-center gap-(--spacing-medium) w-full px-(--spacing-large) py-(--spacing-medium) border-2 border-(--color-secondary-40)">
              <div className="heading-1 px-(--spacing-medium) py-(--spacing-small) border-2 border-(--color-secondary-40)">
                +
              </div>
              <div className="flex flex-col gap-(--spacing-tiny)">
                <h3 className="heading-3">Quick Add</h3>
                <p className="label">Add calories instantly</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-(--spacing-medium-large)">
            <nav className="flex flex-row justify-between items-center w-full">
              <div className="flex items-center gap-(--spacing-medium)">
                <h3 className="heading-3">All foods</h3>
              </div>
              <p className="font-(--font-weight-bold) px-(--spacing-medium) py-(--spacing-small) border-2 border-(--color-secondary-40)">
                Sort
              </p>
            </nav>
            <div className="flex flex-col gap-(--spacing-small)">
              <ListMeal
                name="Scrambled Eggs"
                calorie={180}
                amount={2}
                unit="Eggs"
              />
              <ListMeal
                name="Whole Wheat Toast"
                calorie={140}
                amount={2}
                unit="Slices"
              />
              <ListMeal
                name="Greek Yogurt"
                calorie={100}
                amount={1}
                unit="Cup"
              />
              <ListMeal name="Banana" calorie={105} amount={1} unit="Whole" />
              <ListMeal
                name="Oatmeal"
                calorie={150}
                amount={1}
                unit="Cup, Cooked"
              />
              <ListMeal name="Avocado" calorie={240} amount={1} unit="Whole" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
