export type RecruitmentDetail = {
  id: string;
  job?: string;
  applied?: number;
  processing?: number;
  results?: number;
  status?: RecruitmentStatus;
  priority?: RecruitmentPriority;
};
export enum RecruitmentStatus {
  Processing = "processing",
  OnGoing = "on_going",
}
export enum RecruitmentPriority {
  High = "high",
  Medium = "medium",
  Low = "low",
}
