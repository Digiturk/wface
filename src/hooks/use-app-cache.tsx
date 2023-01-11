import { useCallback } from "react";
import { useAppContext } from "./use-app-context";

export const useAppCache = () => {
  const val = useAppContext();

  const getCacheValue = useCallback(
    (key?: string) => (key ? val.cache[key] : val.cache),
    [val]
  );

  const setCacheValue = useCallback(() => {
    (key: string, value: any) => {
      val.cache[key] = value;
    };
  }, [val]);

  return { getCacheValue, setCacheValue };
};
