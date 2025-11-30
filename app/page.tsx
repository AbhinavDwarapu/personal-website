"use client";

import HomePage from "@/components/main";
import { DndContext } from "@dnd-kit/core";

export default function Home() {
  return (
    <DndContext>
      <HomePage />
    </DndContext>
  );
}
