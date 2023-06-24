export interface WorkExperience {
  id?: string;
  name: string;
  field: string;
  startDate: string;
  endDate?: string;
}

export interface UpdateIntroduceReq {
  content: string;
  technology: string;
  tag: string;
}

export interface WriteReq {
  WorkExperience: WorkExperience;
  Introduce: UpdateIntroduceReq;
}

export interface ReadProfileRes {
  id: number;
  name: string;
  profile_img: string | null;
  tag: string | null;
  technology: string[];
}

export interface MyProfileRes {
  name: string;
  birth: string | null;
  profile_img: string | null;
  workExperience: WorkExperience[];
  introduce: UpdateIntroduceReq | null;
}
