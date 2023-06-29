import { instance } from "@/helpers/axios";
import { storage } from "@/helpers/storage";
import { User } from "@package/api-types";
import { URI } from "@package/constant";
import { useMutation, useQuery } from "@tanstack/react-query";

const route = instance(URI.USER);

export const getUserProfile = () => {
  return useQuery([URI.PROFILE], () =>
    route.get<User.ReadProfileRes[]>(URI.PROFILE)
  );
};

export const getUser = () => {
  return useQuery(["my"], () =>
    route.get<User.MyProfileRes>("/", {
      headers: {
        Authorization: `Bearer ${storage.getLocal("ACCESS")}`,
      },
    })
  );
};

export const getUserProfileById = (id: string) => {
  return useQuery([URI.USER], () => route.get<User.ReadProfileRes>(`/${id}`));
};

export const updateIntroduce = (body: User.UpdateIntroduceReq) => {
  return useMutation(
    () =>
      route.post(URI.INTRODUCE, body, {
        headers: {
          Authorization: `Bearer ${storage.getLocal("ACCESS")}`,
        },
      }),
    { onSuccess: () => {}, onError: () => {} }
  );
};
