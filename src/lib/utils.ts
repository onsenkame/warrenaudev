//cleans up tailwind classes and merges them into one string
//this is useful for when you want to use tailwind classes in a component
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}