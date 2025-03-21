import { useEffect, useRef } from "react";

import { MaybePromise } from "~shared/types/base.type";

export function useEffectOnce(fn: () => MaybePromise<unknown>) {
  const isMounted = useRef(false);

  useEffect(() => {
    !isMounted.current && fn();
    isMounted.current = true;
  }, [fn]);
}
