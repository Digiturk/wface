import { useCallback, useMemo } from "react";

interface Item<T> {
  data: T;
}

export const useStorage = (type: 'local' | 'session' = 'session') => {
  const storage = useMemo(() => type === 'local' ? localStorage : sessionStorage, [type]);

  const set = useCallback(async <T>(key: string, value: T) => {
    storage.setItem(key, JSON.stringify({
      data: value
    }));
  }, []);

  const get = useCallback(<T>(key: string, defaultValue?: T): T | undefined => {
    const value = storage.getItem(key);

    if (value) {
      const item = JSON.parse(value) as Item<T>;
      return item.data;
    } else {
      return defaultValue;
    }
  }, []);

  const remove = useCallback(async (key: string) => {
    storage.removeItem(key);
  }, []);


  const result = useMemo(() => ({
    get,
    set,
    remove
  }), [get, set, remove]);

  return result;
}