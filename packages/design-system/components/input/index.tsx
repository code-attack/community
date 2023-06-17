import { Blocking, Search, Error } from "../../assets/svg";

interface PropsType {
  kind?: "fill" | "outline";
  onSearch: () => void;
  onClear: () => void;
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

export const Input = ({
  value,
  placeholder,
  disabled,
  errorMsg = "asga",
  kind = "fill",
  supportMsg,
}: PropsType) => {
  const isError = errorMsg;
  const isValuePlaceholderNone = !(value || placeholder);

  const addDisableStyle = (style?: string | boolean) =>
    disabled ? disabledStyleObject[kind] : style;

  return (
    <div>
      <div
        className={`h-14 w-[210px] transition-all flex items-center px-3 gap-3 box-border rounded-[4px_4px_0_0] bg-[#E7E0EC] border-b-[2px] [&>svg]:shrink-0 ${addDisableStyle(
          `${
            errorMsg && "[&_label]:text-[#B3261E] border-[#B3261E]"
          } border-[#79747E] focus-within:border-b-4 focus-within:border-[#6750A4] focus-within:pt-0.5 b hover:bg-[rgba(28,27,31,0.08)]`
        )}  `}
      >
        <Search />
        <div
          className={`relative h-full flex flex-col justify-center [&>label]:focus-within:text-[#6750A4] ${
            isValuePlaceholderNone &&
            " [&>label]:focus-within:text-xs [&>label]:focus-within:top-1 [&>input]:h-full [&>input]:focus-within:h-auto [&>input]:focus-within:mt-4 [&>input]:opacity-0 [&>input]:focus-within:opacity-100"
          }`}
        >
          <label
            className={`${
              isValuePlaceholderNone ? "text-base absolute top-4" : "text-xs"
            } z-0 transition-all top-3  text-[#49454F] `}
          >
            Label
          </label>
          {
            <input
              className=" relative z-10 w-full min-w-0 text-base bg-transparent outline-none transition-all"
              value="Input"
            />
          }
        </div>

        {errorMsg && !disabled ? <Error /> : <Blocking />}
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
