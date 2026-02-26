"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function AddFoodModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const meal = searchParams.get("meal");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <h2>Add Food to {meal}</h2>

        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
}
