import en from "@/locales/en.json";
import type { UIStrings } from "@/data/types";

export const strings: UIStrings = en;

export function useStrings(): UIStrings {
  return strings;
}
