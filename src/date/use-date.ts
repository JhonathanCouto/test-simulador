import { useContext } from "react";
import { DateContext } from "./date-provider";

export function useDate() {
  return useContext(DateContext);
}
