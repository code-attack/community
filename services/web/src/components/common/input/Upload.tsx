import { InputHTMLAttributes } from "react";
import Img from "next/image";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  preview: string | null | ArrayBuffer;
}

export const Upload = ({ label, onChange, preview }: Props) => {
  return (
    <div>
      <input
        id="file"
        accept=".png,.jpg,.jpeg"
        type="file"
        className="hidden"
        onChange={onChange}
      />
      <label
        htmlFor="file"
        className="border-gray300 relative m-auto mt-1 flex h-28 w-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed bg-gray-100 transition-all hover:border-cyan-500"
      >
        {preview ? (
          <Img
            fill={true}
            className="rounded-full"
            src={preview as string}
            alt="프로필 이미지"
          />
        ) : (
          <>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="plus"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
            </svg>
            <p className="text-sm">{label}</p>
          </>
        )}
      </label>
    </div>
  );
};
