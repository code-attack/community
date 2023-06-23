export interface CreateReq {
  title: string;
  content: string;
  thumbnail: Blob | string;
}

export interface UpdateReq {
  title: string;
  content: string;
}

export interface ReadRes {
  content: string;
  id: number;
  thumbnail: string;
  title: string;
  createdAt: string;
  user: {
    introduce: { content: string; userId: string };
    name: string;
    technology: string[];
    profile_img: string;
  };
}
