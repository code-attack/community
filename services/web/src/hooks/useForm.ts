import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    onChange,
    setForm,
  };
};
