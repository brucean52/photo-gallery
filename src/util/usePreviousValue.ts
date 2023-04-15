import { useRef, useEffect } from 'react';

export const usePreviousValue = (value) => {
  const ref = useRef<number>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
