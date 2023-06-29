import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useProfile } from "@/hooks/useProfile";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Basic } from "./Basic";
import { Profile } from "./Profile";
import { Experience } from "./Experience";

export type WriteType = "profile" | "introduce" | "workExperience";

export const initial = {
  introduce: {
    tag: [],
    technology: [],
    content: "",
  },
  profile: {
    name: "",
    profile_img: "",
    birthDay: undefined,
  },
  workExperience: {
    name: "",
    field: [],
    startDate: undefined,
    endDate: undefined,
  },
};

interface Props {
  modal: boolean;
  type: WriteType;
  children?: ReactNode;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

export const WriteModal = ({ modal, type, state, setState }: Props) => {
  return (
    <div
      className={`${
        modal ? "right-10" : "-right-[540px]"
      } top-0 z-50 box-border my-10  h-[90%] w-[500px] py-10 px-12  fixed transition-all  bg-white rounded-md shadow-2xl overflow-y-auto overflow-x-visible`}
    >
      {
        {
          profile: <Profile type={type} state={state} setState={setState} />,
          introduce: <Basic type={type} state={state} setState={setState} />,
          workExperience: (
            <Experience type={type} state={state} setState={setState} />
          ),
        }[type]
      }
    </div>
  );
};
