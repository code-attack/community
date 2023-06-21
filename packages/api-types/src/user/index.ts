export interface WriteReq {
  WorkExperience: {
    name: string;
    field: string;
    startDate: string;
    endDate?: string;
  };
  Introduce: {
    content: string;
  };
}
