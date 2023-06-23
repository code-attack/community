import { instance } from "@/helpers/axios";
import { Post } from "@package/api-types";
import { URI } from "@package/constant";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const route = instance(URI.POST);

export const useGet = () => {
  return useQuery([URI.POST], () =>
    route.get<{ isLast: boolean; post: Post.ReadRes[] }>("/?from=0")
  );
};

export const useGetById = (id: string) => {
  return useQuery([`${URI.POST}e21`], () => route.get(`/${id}`));
};

export const create = (body: Post.CreateReq) => {
  const form = new FormData();
  form.append("title", body.title);
  form.append("content", body.content);
  form.append("thumbnail", body.thumbnail);
  const { push } = useRouter();
  return useMutation(
    () =>
      route.post("/", form, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoibG9raWpvamkyIiwiaWF0IjoxNjg3NDc4NzQ1LCJleHAiOjE2OTEwNzg3NDUsInN1YiI6ImFjY2Vzc190b2tlbiJ9.VhjLX6vE7P__bK_hhu2Qt41J6sKKe8TMLrdMrIDaZ1A",
        },
      }),
    {
      onSuccess: () => {
        push("/post");
        toast.success("게시물 작성 성공");
      },
      onError: () => {
        toast.error("게시물 작성 실패");
      },
    }
  );
};
