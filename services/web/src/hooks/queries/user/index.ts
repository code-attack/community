import { instance } from "@/helpers/axios";
import { User } from "@package/api-types";
import { URI } from "@package/constant";
import { useQuery } from "@tanstack/react-query";

const route = instance(URI.USER);

export const getUserProfile = () => {
  return useQuery([URI.USER], () => route.get<User.ReadProfileRes[]>("/"));
};

export const getUserProfileById = (id: string) => {
  return useQuery([URI.USER], () => route.get(`/${id}`));
};
