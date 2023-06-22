import { instance } from "@/helpers/axios";
import { useMutation } from "@tanstack/react-query";
import { URI } from "@package/constant";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Auth } from "@package/api-types";
import { storage } from "@/helpers/storage";

const route = instance(URI.AUTH);

export const useSignUp = (form: Auth.SingUp<"req">) => {
  const { push } = useRouter();
  return useMutation(() => route.post<Auth.SingUp<"res">>(URI.SIGN_UP, form), {
    onSuccess: ({ data }) => {
      const { access_token, refresh_token } = data;
      push("/");
      storage.setLocal("ACCESS", access_token);
      storage.setLocal("REFRESH", refresh_token);
      toast.success("회원가입 성공");
    },
    onError: () => {
      toast.error("회원가입 실패");
    },
  });
};

export const useSignIn = (form: Auth.SignIn<"req">) => {
  const { push } = useRouter();
  return useMutation(() => route.post<Auth.SignIn<"res">>(URI.SIGN_IN, form), {
    onSuccess: ({ data }) => {
      const { access_token, refresh_token } = data;
      push("/");
      storage.setLocal("ACCESS", access_token);
      storage.setLocal("REFRESH", refresh_token);
      toast.success("로그인 성공");
    },
    onError: (e: any) => {
      toast.error("로그인 실패");
    },
  });
};
