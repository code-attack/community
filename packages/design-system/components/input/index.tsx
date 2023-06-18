import { Blocking, Search, Error } from "../../assets/svg";
import { ChangeEvent } from "react";

interface InputEventType {
  value: string;
  name: string;
}

interface PropsType {
  kind?: "fill" | "outline";
  onSearch?: (e: InputEventType) => void;
  hasClear?: boolean;
  onChange: (e: InputEventType) => void;
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  supportMsg?: string | boolean;
}

const disabledStyleObject = "opacity-[38%] border-[#1C1B1F]";

const KindStyleObject = {
  fill: {
    wrapperStyle: "rounded-[4px_4px_0_0] bg-[#E7E0EC] border-b-2",
    activeStyle:
      "focus-within:border-b-4 focus-within:pt-0.5 hover:bg-[rgba(28,27,31,0.08)]",
    contentStyle: "[&>label]:focus-within:top-1 [&>input]:focus-within:mt-4",
    labelStyle: "absolute   transition-all ",
    valueExistStyle: "",
  },
  outline: {
    wrapperStyle: "rounded bg-white border-[1px]",
    activeStyle: "focus-within:border-2 focus-within:px-[11px]",
    contentStyle: "[&>label]:focus-within:-top-2 relative",
    labelStyle: "absolute  left-0  duration-150 px-1 bg-white",
    valueExistStyle: " absolute -top-2  bg-white px-1 bg-white",
  },
} as const;

export const Input = ({
  onSearch,
  hasClear,
  value,
  name,
  label,
  placeholder,
  onChange,
  disabled,
  isError,
  kind = "fill",
  supportMsg,
}: PropsType) => {
  const isValueAndPlaceholderNone = !(value || placeholder);

  const addDisableStyle = (style?: string | boolean) =>
    disabled ? disabledStyleObject : style;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target);
  const clearInput = () => onChange({ value: "", name });

  const {
    wrapperStyle,
    activeStyle,
    contentStyle,
    labelStyle,
    valueExistStyle,
  } = KindStyleObject[kind];

  const isOutSideAndSearch = kind === "outline" && onSearch;

  const outlineLabelLocation =
    isOutSideAndSearch && `[&>label]:focus-within:-left-[32px]`;
  const outlineValueExistLocation = isOutSideAndSearch && "-left-[32px]";
  return (
    <div>
      <div
        className={`h-14  w-[210px] relative transition-all flex items-center px-3 gap-3 box-border ${wrapperStyle} [&>svg]:shrink-0 ${addDisableStyle(
          `${
            isError && "[&_label]:text-[#B3261E] border-[#B3261E]"
          } border-[#79747E] ${activeStyle}  focus-within:border-[#6750A4]`
        )}  `}
      >
        {onSearch && <Search className="relative z-20" />}
        <div
          className={`h-full flex flex-col justify-center [&>label]:focus-within:text-[#6750A4]  ${
            isValueAndPlaceholderNone
              ? `${contentStyle} ${outlineLabelLocation} [&>label]:focus-within:text-xs [&>input]:h-full [&>input]:focus-within:h-auto [&>input]:opacity-0 [&>input]:focus-within:opacity-100`
              : "relative"
          }`}
        >
          <label
            className={`${
              isValueAndPlaceholderNone
                ? `text-base top-4 ${labelStyle}`
                : `text-xs ${valueExistStyle} ${outlineValueExistLocation}`
            } z-0 duration-150  text-[#49454F] `}
          >
            {label}
          </label>
          {
            <input
              className={`${onSearch && " ml-1"} ${
                hasClear && " mr-1"
              } relative z-10 w-full min-w-0 text-base bg-transparent outline-none transition-all`}
              value={value}
              placeholder={placeholder}
              onChange={onInputChange}
              name={name}
            />
          }
        </div>

        {hasClear &&
          (isError && !disabled ? (
            <Error />
          ) : (
            <Blocking onClick={clearInput} />
          ))}
      </div>
      {supportMsg && (
        <div
          className={`text-xs mt-1 ml-4 ${addDisableStyle(
            isError && "text-[#B3261E]"
          )}`}
        >
          {supportMsg}
        </div>
      )}
    </div>
  );
};
