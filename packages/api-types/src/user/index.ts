export interface WorkExperience {
  id?: string;
  name: string;
  field: string;
  startDate: string;
  endDate?: string;
}

export interface Introduce {
  content: string;
}

export interface WriteReq {
  WorkExperience: WorkExperience;
  Introduce: Introduce;
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
  profile_img: string | null;
  tag: string | null;
  technology: string[];
  workExperience: WorkExperience[];
  introduce: Introduce | null;
}
