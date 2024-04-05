import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Env } from "../config/AppEnvironment"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function absoluteURL(path: string) {
  if(typeof window !== "undefined") return path
  return `${Env.Url}${path}`
}