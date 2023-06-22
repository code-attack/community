import { instance } from "@/helpers/axios";
import { User } from "@package/api-types";
import { URI } from "@package/constant";
import { useQuery } from "@tanstack/react-query";

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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoibG9raWpvamkyIiwiaWF0IjoxNjg3NDMwODI4LCJleHAiOjE2OTEwMzA4MjgsInN1YiI6ImFjY2Vzc190b2tlbiJ9._SgBiwurj-ZnNr3vjQwDAyz0XBQ9G2pu_LSALnMdt2g",
      },
    })
  );
};

export const getUserProfileById = (id: string) => {
  return useQuery([URI.USER], () => route.get<User.ReadProfileRes>(`/${id}`));
};
