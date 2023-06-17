import { Blocking, Search, Error } from "../../assets/svg";

interface PropsType {
  kind?: "fill" | "outline";
  onSearch?: () => void;
  onClear?: () => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  errorMsg?: boolean | string;
  supportMsg?: string;
}

const disabledStyleObject = {
  fill: "opacity-[38%] border-[#1C1B1F]",
  outline: "",
} as const;

const KindStyleObject = {
  fill: {
    wrapper: "rounded-[4px_4px_0_0] bg-[#E7E0EC] border-b-2",
    active:
      "focus-within:border-b-4 focus-within:pt-0.5 hover:bg-[rgba(28,27,31,0.08)]",
    label:
      "[&>label]:focus-within:top-1 [&>label]:transition-all [&>input]:focus-within:mt-4",
  },
  outline: {
    wrapper: "rounded bg-white border-[1px]",
    active: "focus-within:border-2 focus-within:px-[11px]",
    label:
      "focus-within:relative [&>label]:focus-within:-top-2 [&>label]:left-0  [&>label]:bg-white [&>label]:duration-700",
  },
};

export const Input = ({
  onSearch,
  onClear,
  value,
  placeholder,
  disabled,
  errorMsg,
  kind = "fill",
  supportMsg,
}: PropsType) => {
  const isValuePlaceholderNone = !(value || placeholder);

  const addDisableStyle = (style?: string | boolean) =>
    disabled ? disabledStyleObject[kind] : style;

  const { wrapper, active, label } = KindStyleObject[kind];

  const outlineLabel =
    kind === "outline" && onSearch && `[&>label]:focus-within:-left-[32px]`;
  return (
    <div>
      <div
        className={`h-14  w-[210px] relative transition-all flex items-center px-3 gap-3 box-border ${wrapper} [&>svg]:shrink-0 ${addDisableStyle(
          `${
            errorMsg && "[&_label]:text-[#B3261E] border-[#B3261E]"
          } border-[#79747E] ${active}  focus-within:border-[#6750A4]`
        )}  `}
      >
        {onSearch && <Search className="relative z-20" />}
        <div
          className={`h-full flex flex-col justify-center [&>label]:focus-within:text-[#6750A4] ${
            isValuePlaceholderNone &&
            `${label} ${outlineLabel} relative [&>label]:focus-within:text-xs [&>input]:h-full [&>input]:focus-within:h-auto [&>input]:opacity-0 [&>input]:focus-within:opacity-100`
          }`}
        >
          <label
            className={`${
              isValuePlaceholderNone ? "text-base absolute top-4" : "text-xs"
            } z-0  top-3 text-[#49454F] px-1`}
          >
            Label
          </label>
          {
            <input
              className={`${onSearch && " ml-1"} ${
                onClear && " mr-1"
              } relative z-10 w-full min-w-0 text-base bg-transparent outline-none transition-all`}
              value="Input"
            />
          }
        </div>

        {onClear && (errorMsg && !disabled ? <Error /> : <Blocking />)}
      </div>
      <div
        className={`text-xs mt-1 ml-4 ${addDisableStyle(
          errorMsg && "text-[#B3261E]"
        )}`}
      >
        {supportMsg}
      </div>
    </div>
  );
};
