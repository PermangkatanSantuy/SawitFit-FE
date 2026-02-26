"use client";

import { ListEntry } from "@/components/ListEntry/ListEntry";
import { useRouter } from "next/navigation";

export default function ProgressPage() {
  const r = useRouter();

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
                <h2 className="heading-2">Progress</h2>
              </div>
              <div className="font-(--font-weight-bold) text-(--color-bg-light) px-(--spacing-medium) py-(--spacing-small) bg-(--color-secondary-40)">
                <p className="font-(--font-size-body-bold)">+ Add Entry</p>
              </div>
            </nav>
            <div className="flex flex-row gap-(--spacing-small)">
              <h2 className="font-(--font-size-body-bold) font-(--font-weight-bold) px-(--spacing-medium) py-(--spacing-small) border-2 border-(--color-secondary-40)">
                Bodyweight
              </h2>
              <h2 className="font-(--font-size-body-bold) font-(--font-weight-bold) px-(--spacing-medium) py-(--spacing-small) border-2 border-(--color-secondary-40)">
                Since Starting Weight
              </h2>
            </div>
            <div className="flex flex-row items-center justify-center gap-(--spacing-medium) w-full h-80 px-(--spacing-large) py-(--spacing-medium) border-2 border-(--color-secondary-40)">
              <h1 className="heading-1">Bodyweight Chart</h1>
            </div>
          </div>
          <div className="flex flex-col gap-(--spacing-medium-large)">
            <h3 className="heading-3">Entry</h3>
            <div className="flex flex-col">
              <ListEntry
                day="Wednesday"
                date="19 Feb 2025"
                weight={null}
                src={`PHOTO`}
              />
              <ListEntry
                day={"Tuesday"}
                date={"18 Feb 2025"}
                weight={67.8}
                src={null}
              />
              <ListEntry
                day={"Monday"}
                date={"17 Feb 2025"}
                weight={67.5}
                src={null}
              />
              <ListEntry
                day={"Sunday"}
                date={"16 Feb 2025"}
                weight={67.3}
                src={null}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
