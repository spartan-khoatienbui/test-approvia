import { Form, FormInstance } from "antd";
import { isEqual } from "lodash-es";
import { useEffect, useRef, useState } from "react";

export function useFormState<T>(form: FormInstance<T>) {
  const initValues = useRef<T>();
  const [isDirty, setIsDirty] = useState(false);
  const values = Form.useWatch([], form);
  useEffect(() => {
    if (!initValues.current) {
      initValues.current = values;
      return;
    }

    setIsDirty(!isEqual(initValues.current, values));
  }, [form, values]);

  return { isDirty };
}
