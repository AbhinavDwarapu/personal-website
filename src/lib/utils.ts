import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomTypingDelay(from = 25, to = 120): number {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export const delayStart = 6000;