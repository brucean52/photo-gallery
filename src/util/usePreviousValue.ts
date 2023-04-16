import { useRef, useEffect } from 'react';

export const usePreviousValue = (value: number) => {
  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
