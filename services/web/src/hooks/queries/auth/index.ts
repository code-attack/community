import { instance } from "@/helpers/axios";
import { useMutation } from "@tanstack/react-query";
import { URI } from "@package/constant";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Auth } from "@package/api-types";
import { setAuthToken } from "@/hooks/localstorage/auth";

const route = instance(URI.AUTH);

export const useSignUp = (form: Auth.SignUpReq) => {
  const { push } = useRouter();
  return useMutation([URI.SIGN_UP], () => route.post(URI.SIGN_UP, form), {
    onSuccess: () => {
      push("/auth/sign-in");
      toast.success("회원가입 성공");
    },
    onError: () => {
      toast.error("회원가입 실패");
    },
  });
};

export const useSignIn = (form: Auth.SignInReq) => {
  const { push } = useRouter();
  return useMutation([URI.SIGN_IN], () => route.post(URI.SIGN_IN, form), {
    onSuccess: ({ data }) => {
      const { access_token, refresh_token } = data;

      push("/");
      setAuthToken(access_token, refresh_token);
      toast.success("로그인 성공");
    },
    onError: (e: any) => {
      toast.error("로그인 실패");
    },
  });
};
