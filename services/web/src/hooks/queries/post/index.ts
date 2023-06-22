import { instance } from "@/helpers/axios";
import { URI } from "@package/constant";
import { useMutation, useQuery } from "@tanstack/react-query";

const route = instance(URI.POST);

export const useGet = () => {
  return useQuery([URI.POST], () => route.get("/"));
};

export const useGetById = (id: string) => {
  return useQuery([`${URI.POST}e21`], () => route.get(`/${id}`));
};

export const create = () => {
  return useMutation(() => route.post("/"));
};
