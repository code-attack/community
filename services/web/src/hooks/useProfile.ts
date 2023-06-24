import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useForm } from "./useForm";

interface ArrayOrDateType {
  value: string[] | number;
  name: string;
}

interface ChangeType {
  value: string | number | string[];
  name: string;
}

export const useProfile = <T, U extends keyof T>(
  inital: T,
  type: U,
  addInital: T[U] extends Array<any> ? T[U][0] : undefined
) => {
  const [form, setForm] = useState<T>(inital);

  const changeForm = (value: T[U]) => {
    setForm({ ...form, [type]: value });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    changeForm({ ...form[type], [name]: value });
  };
  const arrayOrDateChange = ({ value, name }: ArrayOrDateType) => {
    changeForm({ ...form[type], [name]: value });
  };

  const arrayChange = (idx: number) => (target?: ChangeType) => {
    const temp = [...(form[type] as any[])];
    if (target) {
      const { name, value } = target;
      temp.splice(idx, 1, { ...(temp[idx] as {}), [name]: value });
    } else temp.splice(idx, 1);

    setForm({ ...form, [type]: temp });
  };

  const onInputArrayChange =
    (idx: number) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value, name } = e.target;
      arrayChange(idx)({ value, name });
    };
  const onArrayOrChangeInArray = (idx: number) => (target: ChangeType) =>
    arrayChange(idx)(target);

  const addArray = () => {
    setForm({ ...form, [type]: (form[type] as any[]).concat(addInital) });
  };
  const removeArray = (idx: number) => () => arrayChange(idx)();
  return {
    form,
    setForm,
    onChange,
    arrayOrDateChange,
    onInputArrayChange,
    onArrayOrChangeInArray,
    addArray,
    removeArray,
  };
};
