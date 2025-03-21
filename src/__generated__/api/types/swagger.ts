export type Changes = { title?: Title };
export type CompanyWhitelistIpCreateRequest = {
  description?: string;
  ipAddress: string;
  location?: LocationType;
};
export type CompanyWhitelistIpFilter = { status?: CompanyWhitelistIpStatus };
export type CompanyWhitelistIpListRequest = {
  filter?: CompanyWhitelistIpFilter;
  page: number;
  search?: string;
  size: number;
  sort?: CompanyWhitelistIpSort;
};
export type CompanyWhitelistIpListResponse = {
  count: number;
  data: Array<CompanyWhitelistIpResponse>;
};
export type CompanyWhitelistIpResponse = {
  createdAt: string;
  description?: string;
  id: string;
  ipAddress: string;
  location?: LocationType;
  status: CompanyWhitelistIpStatus;
};
export type CompanyWhitelistIpSort = {
  createdAt?: SortOrder;
  description?: SortOrder;
  ipAddress?: SortOrder;
  location?: SortOrder;
  status?: SortOrder;
};
export enum CompanyWhitelistIpStatus {
  Active = "active",
  Deactivated = "deactivated",
}
export type CompanyWhitelistIpUpdateRequest = {
  description?: string;
  ipAddress: string;
  location?: LocationType;
  status: CompanyWhitelistIpStatus;
};
export enum ContractType {
  Intern = "intern",
  PartTime = "part_time",
  FullTime = "full_time",
}
export type DateDetails = { day: string; duration: LeaveDurationType };
export type DepartmentAddUserRequest = { roleName: string; userId: string };
export type DepartmentCreateRequest = { description?: string; name: string };
export type DepartmentDetailResponse = DepartmentResponse & {
  createdAt: string;
  description?: string;
  id: string;
  name: string;
  pictureUrl?: string;
  role?: RoleResponse;
  roles?: Record<string, Array<UserWithRoleResponse>>;
  uniqueId?: string;
  users?: Array<UserWithRoleResponse>;
};
export type DepartmentListRequest = {
  page: number;
  search?: string;
  size: number;
  sort?: DepartmentSort;
};
export type DepartmentListResponse = {
  count: number;
  data: Array<DepartmentDetailResponse>;
};
export type DepartmentOverviewResponse = { total: number };
export type DepartmentResponse = {
  createdAt?: string;
  description?: string;
  id: string;
  name: string;
  pictureUrl?: string;
  role?: RoleResponse;
  uniqueId?: string;
};
export type DepartmentSort = {
  createdAt?: SortOrder;
  name?: SortOrder;
  uniqueId?: SortOrder;
};
export type DepartmentUpdateRequest = { description?: string; name?: string };
export type DepartmentUpdateUserRequest = { roleName: string; userId: string };
export type DepartmentView = {
  id: string;
  name: string;
  pictureUrl?: string;
  roleName?: string;
  uniqueId?: string;
};
export enum EnableExternalUsers {
  Active = "active",
  Deactivated = "deactivated",
}
export enum FounderType {
  Technical = "technical",
  NonTechnical = "non_technical",
  Spartan = "spartan",
}
export enum GenderType {
  Male = "male",
  Female = "female",
  Other = "other",
}
export enum GeneralOnboardingStatus {
  InProgress = "in_progress",
  Completed = "completed",
}
export type GitHubWebHookPullRequest = {
  draft: boolean;
  htmlUrl?: string;
  number: number;
  state: string;
  title: string;
  user: User;
};
export type GitHubWebhookPayload = {
  action: string;
  changes?: Changes;
  kind: string;
  pullRequest: GitHubWebHookPullRequest;
  repository: Repository;
};
export type HiringJobApplyRequest = {
  address: string;
  country: string;
  name: string;
  personalEmail: string;
  phone: string;
  referralEmail?: string;
  resumeUrl: string;
  website?: string;
};
export type HiringJobCreateRequest = {
  benefits: Array<string>;
  contractType: ContractType;
  dateOfDeadline?: string;
  departmentId?: string;
  description: string;
  keyResponsibilities: Array<string>;
  location: LocationType;
  preferredQualifications: Array<string>;
  requiredQualifications: Array<string>;
  status: HiringJobStatus;
  title: string;
  workingType: WorkingType;
};
export type HiringJobFilter = {
  contractType?: string;
  createdBy?: string;
  dateOfDeadline?: string;
  departmentId?: string;
  location?: LocationType;
  status?: HiringJobStatus;
  workingType?: WorkingType;
};
export type HiringJobListRequest = {
  filter?: HiringJobFilter;
  page: number;
  search?: string;
  size: number;
  sort?: HiringJobSort;
};
export type HiringJobListResponse = {
  count: number;
  data: Array<HiringJobResponse>;
};
export type HiringJobPresignedUrlResponse = {
  presignedUrl: string;
  resumeUrl: string;
};
export type HiringJobResponse = {
  benefits?: Array<string>;
  contractType?: ContractType;
  createdAt: string;
  createdBy?: UserMinimalView;
  dateOfDeadline?: string;
  department?: DepartmentView;
  departmentId?: string;
  description?: string;
  id: string;
  keyResponsibilities?: Array<string>;
  location?: LocationType;
  preferredQualifications?: Array<string>;
  requiredQualifications?: Array<string>;
  status?: HiringJobStatus;
  title: string;
  workingType?: WorkingType;
};
export type HiringJobSort = {
  contractType?: SortOrder;
  createdAt?: SortOrder;
  dateOfDeadline?: SortOrder;
  location?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  workingType?: SortOrder;
};
export enum HiringJobStatus {
  Draft = "draft",
  Open = "open",
  Closed = "closed",
  OnHold = "on_hold",
}
export type HiringJobUpdateRequest = {
  benefits?: Array<string>;
  contractType?: ContractType;
  dateOfDeadline?: string;
  departmentId?: string;
  description?: string;
  keyResponsibilities?: Array<string>;
  location?: LocationType;
  preferredQualifications?: Array<string>;
  requiredQualifications?: Array<string>;
  status?: HiringJobStatus;
  title?: string;
  workingType?: WorkingType;
};
export enum LeaveDurationType {
  Fullday = "fullday",
  Morning = "morning",
  Afternoon = "afternoon",
}
export enum LeaveRequestStatus {
  Pending = "pending",
  Approved = "approved",
  Denied = "denied",
  Canceled = "canceled",
}
export enum LeaveRequestType {
  Vacation = "vacation",
  Illness = "illness",
  MedicalNeed = "medical_need",
  PersonalMatters = "personal_matters",
  FamilyMemberDeath = "family_member_death",
  Childbirth = "childbirth",
  Adoption = "adoption",
  Childcare = "childcare",
  EducationalPurposes = "educational_purposes",
}
export enum LocationType {
  Dn = "dn",
  Hcm = "hcm",
  Us = "us",
  Ukraine = "ukraine",
}
export enum MartialStatus {
  Single = "single",
  Married = "married",
  CommonLaw = "common_law",
  DomesticPartnership = "domestic_partnership",
}
export type MessageTemplateFilter = {
  status?: MessageTemplateStatus;
  type?: MessageTemplateType;
};
export type MessageTemplateListRequest = {
  filter?: MessageTemplateFilter;
  page: number;
  search?: string;
  size: number;
  sort?: MessageTemplateSort;
};
export type MessageTemplateListResponse = {
  count: number;
  data: Array<MessageTemplateView>;
};
export type MessageTemplateResponse = {
  defaultTemplate: string;
  id: string;
  name: string;
  requiredPlaceholders: Array<string>;
  status: MessageTemplateStatus;
  template?: string;
  type: MessageTemplateType;
  updatedAt?: string;
  updatedBy?: MessageTemplateResponseUserUpdate;
};
export type MessageTemplateResponseUserUpdate = { id: string; name: string };
export type MessageTemplateSort = {
  createdAt?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  type?: SortOrder;
};
export enum MessageTemplateStatus {
  Active = "active",
  Deactivated = "deactivated",
}
export enum MessageTemplateType {
  Slack = "slack",
  Email = "email",
}
export type MessageTemplateUpdateRequest = {
  status?: MessageTemplateStatus;
  template?: string;
};
export type MessageTemplateView = {
  id: string;
  name: string;
  status: string;
  type: string;
};
export type Owner = { login: string };
export type PolicyView = { description?: string; name: string };
export type ProjectActivityDetailView = {
  changedBy?: UserMinimalView;
  createdAt?: string;
  id: string;
  message?: string;
  project?: ProjectMinimalView;
  title?: string;
};
export type ProjectActivityFilter = {
  changedBy?: string;
  endDate?: string;
  projectId?: string;
  startDate?: string;
};
export type ProjectActivityListRequest = {
  filter?: ProjectActivityFilter;
  page: number;
  search?: string;
  size: number;
  sort?: ProjectActivitySort;
};
export type ProjectActivityListResponse = {
  count: number;
  data: Array<ProjectActivityDetailView>;
};
export type ProjectActivitySort = {
  changedBy?: SortOrder;
  createdAt?: SortOrder;
  projectName?: SortOrder;
};
export type ProjectAddUserRequest = { roleName: string; userId: string };
export type ProjectCreateRequest = {
  billable?: number;
  description?: string;
  founderName?: string;
  name: string;
  pictureUrl?: string;
  slackChannel?: string;
  status?: ProjectStatus;
  type?: ProjectType;
  users?: Array<ProjectAddUserRequest>;
};
export type ProjectDetailResponse = ProjectResponse & {
  billable?: number;
  createdAt: string;
  createdBy?: UserMinimalResponse;
  description?: string;
  founderName?: string;
  founderType?: FounderType;
  githubOrg?: string;
  id: string;
  meetingScheduler?: Array<ProjectMeetingReminderMinimalView>;
  name: string;
  pictureUrl?: string;
  role?: RoleResponse;
  roles?: Record<string, Array<UserWithRoleResponse>>;
  slackChannel?: string;
  slackGroup?: string;
  status?: ProjectStatus;
  type?: ProjectType;
  uniqueId?: string;
  users?: Array<UserWithRoleResponse>;
};
export type ProjectFilter = {
  createdBy?: string;
  status?: ProjectStatus;
  type?: ProjectType;
};
export type ProjectInfraServiceAddRequest = {
  serviceId: string;
  status: ProjectSchedulerStatus;
  version: string;
};
export type ProjectInfraServiceListResponse = {
  count: number;
  data: Array<ProjectInfraServiceView>;
};
export type ProjectInfraServiceResponse = {
  createdAt: string;
  id: string;
  serviceName: string;
  status: ProjectSchedulerStatus;
  version: string;
};
export type ProjectInfraServiceUpdateRequest = {
  serviceId?: string;
  status?: ProjectSchedulerStatus;
  version?: string;
};
export type ProjectInfraServiceView = {
  createdAt: string;
  id: string;
  serviceName: string;
  status: string;
  version: string;
};
export type ProjectListRequest = {
  filter?: ProjectFilter;
  page: number;
  search?: string;
  size: number;
  sort?: ProjectSort;
};
export type ProjectListResponse = {
  count: number;
  data: Array<ProjectDetailResponse>;
};
export type ProjectMeetingReminderMinimalView = {
  channel: string;
  durationInMinutes?: number;
  id: string;
  meetingName?: string;
  meetingUrl: string;
  scheduleExpression: string;
  skipHoliday?: boolean;
  status: ProjectSchedulerStatus;
};
export type ProjectMinimalView = {
  id: string;
  name: string;
  pictureUrl?: string;
  uniqueId?: string;
};
export type ProjectOverviewResponse = {
  status: Record<string, number>;
  total: number;
};
export type ProjectPresignedUrlResponse = { key: string; presignedUrl: string };
export type ProjectPulRequestNotificationUpdateRequest = {
  channel?: string;
  enableExternalUsers?: EnableExternalUsers;
  repositories?: Array<string>;
  status?: ProjectSchedulerStatus;
};
export type ProjectPullRequestNotificationResponse = {
  channel: string;
  createdAt: string;
  enableExternalUsers: EnableExternalUsers;
  id: string;
  repositories: Array<string>;
  status: ProjectSchedulerStatus;
};
export type ProjectResponse = {
  billable?: number;
  createdAt?: string;
  createdBy?: UserMinimalResponse;
  description?: string;
  founderName?: string;
  founderType?: FounderType;
  githubOrg?: string;
  id: string;
  name: string;
  pictureUrl?: string;
  role?: RoleResponse;
  slackChannel?: string;
  slackGroup?: string;
  status?: ProjectStatus;
  type?: ProjectType;
  uniqueId?: string;
};
export type ProjectSchedulerActivityDetailView = {
  changedBy?: UserMinimalView;
  createdAt?: string;
  id: string;
  message?: string;
  project?: ProjectMinimalView;
  schedulerType?: string;
  title?: string;
};
export type ProjectSchedulerActivityFilter = {
  changedBy?: string;
  projectId?: string;
  schedulerType?: string;
};
export type ProjectSchedulerActivityListRequest = {
  filter?: ProjectSchedulerActivityFilter;
  page: number;
  search?: string;
  size: number;
  sort?: ProjectSchedulerActivitySort;
};
export type ProjectSchedulerActivityListResponse = {
  count: number;
  data: Array<ProjectSchedulerActivityDetailView>;
};
export type ProjectSchedulerActivitySort = {
  changedBy?: SortOrder;
  createdAt?: SortOrder;
  projectName?: SortOrder;
  schedulerType?: SortOrder;
};
export type ProjectSchedulerCreateRequest = {
  channel: string;
  schedulerDetails: Record<string, unknown>;
  status: ProjectSchedulerStatus;
};
export type ProjectSchedulerListRequest = {
  page: number;
  size: number;
  sort?: ProjectSchedulerSort;
};
export type ProjectSchedulerSort = { scheduleExpression?: SortOrder };
export enum ProjectSchedulerStatus {
  Active = "active",
  Deactivated = "deactivated",
}
export type ProjectSchedulerUpdateRequest = {
  channel?: string;
  schedulerDetails?: Record<string, unknown>;
  status?: ProjectSchedulerStatus;
};
export type ProjectServiceActivityDetailView = {
  changedBy?: UserMinimalView;
  createdAt?: string;
  id: string;
  message?: string;
  project?: ProjectMinimalView;
  service?: ThirdPartyView;
  title?: string;
};
export type ProjectServiceActivityFilter = {
  changedBy?: string;
  endDate?: string;
  projectId?: string;
  serviceId?: string;
  startDate?: string;
};
export type ProjectServiceActivityListRequest = {
  filter?: ProjectServiceActivityFilter;
  page: number;
  search?: string;
  size: number;
  sort?: ProjectServiceActivitySort;
};
export type ProjectServiceActivityListResponse = {
  count: number;
  data: Array<ProjectServiceActivityDetailView>;
};
export type ProjectServiceActivitySort = {
  changedBy?: SortOrder;
  createdAt?: SortOrder;
  projectName?: SortOrder;
  serviceName?: SortOrder;
};
export type ProjectServiceConnectionResponse = {
  connectedAt?: string;
  connectionDetails?: Record<string, unknown>;
  createdAt?: string;
  disconnectedAt?: string;
  id: string;
  projectId: string;
  serviceId: string;
  status: ThirdPartyStatus;
  syncStatus?: ThirdPartySyncStatus;
};
export type ProjectServiceConnectionTestRequest = {
  connectionDetails: Record<string, unknown>;
  encryptedDetails?: Record<string, unknown>;
  serviceId: string;
};
export type ProjectServiceConnectionUpsertRequest = {
  connectionDetails?: Record<string, unknown>;
  encryptedDetails?: Record<string, unknown>;
  serviceId: string;
};
export type ProjectSort = {
  createdAt?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  uniqueId?: SortOrder;
};
export enum ProjectStatus {
  NotStarted = "not_started",
  InProposal = "in_proposal",
  OnGoing = "on_going",
  Pending = "pending",
  Completed = "completed",
  Canceled = "canceled",
}
export enum ProjectType {
  External = "external",
  Internal = "internal",
}
export type ProjectUpdateRequest = {
  billable?: number;
  description?: string;
  founderName?: string;
  founderType?: FounderType;
  githubOrg?: string;
  name?: string;
  pictureUrl?: string;
  slackChannel?: string;
  slackGroup?: string;
  status?: ProjectStatus;
  type?: ProjectType;
};
export type ProjectUpdateUserRequest = { roleName: string; userId: string };
export type ProjectUserServiceActivityDetailView = {
  changedBy?: UserMinimalView;
  createdAt?: string;
  id: string;
  message?: string;
  project?: ProjectMinimalView;
  service?: ThirdPartyView;
  title?: string;
  user?: UserMinimalView;
};
export type ProjectUserServiceActivityFilter = {
  changedBy?: string;
  endDate?: string;
  projectId?: string;
  serviceId?: string;
  startDate?: string;
};
export type ProjectUserServiceActivityListRequest = {
  filter?: ProjectUserServiceActivityFilter;
  page: number;
  search?: string;
  size: number;
  sort?: ProjectUserServiceActivitySort;
};
export type ProjectUserServiceActivityListResponse = {
  count: number;
  data: Array<ProjectUserServiceActivityDetailView>;
};
export type ProjectUserServiceActivitySort = {
  changedBy?: SortOrder;
  createdAt?: SortOrder;
  projectName?: SortOrder;
  serviceName?: SortOrder;
};
export type RefreshTokenRequest = { refreshToken: string };
export type Repository = {
  fullName: string;
  name?: string;
  owner: Owner;
  htmlUrl: string;
};
export type RoleFilter = { name?: string };
export type RoleListRequest = {
  filter?: RoleFilter;
  page: number;
  search?: string;
  size: number;
  sort?: RoleSort;
};
export type RoleListResponse = { count: number; data: Array<RoleResponse> };
export type RolePoliciesResponse = {
  description?: string;
  displayName?: string;
  name: string;
  policies: Array<PolicyView>;
};
export type RoleResponse = {
  description?: string;
  displayName?: string;
  name?: string;
};
export enum RoleScope {
  Org = "org",
  Project = "project",
  Department = "department",
}
export type RoleSort = { name?: SortOrder };
export enum SchedulerEventType {
  ProjectUpdateStatusReminder = "project_update_status_reminder",
  ProjectMeetingReminder = "project_meeting_reminder",
  ProjectInfraServiceVersionReminder = "project_infra_service_version_reminder",
}
export type SchedulerResponse = {
  channel?: string;
  id: string;
  schedulerDetails: Record<string, unknown>;
  status: ProjectSchedulerStatus;
};
export type SchedulerResponseV2MeetingSchedulerDetail = {
  durationInMinutes?: number;
  meetingName?: string;
  meetingUrl: string;
  scheduleExpression: string;
  skipHoliday?: boolean;
};
export type SchedulerResponseV2SchedulerResponseV2MeetingSchedulerDetail = {
  channel?: string;
  id: string;
  project: ProjectMinimalView;
  schedulerDetails: SchedulerResponseV2MeetingSchedulerDetail;
  status: ProjectSchedulerStatus;
};
export type SignInRequest = { code: string };
export type SignInResponse = {
  accessToken: string;
  expiresIn?: number;
  refreshToken: string;
};
export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
  AscNullsFirst = "asc_nulls_first",
  DescNullsFirst = "desc_nulls_first",
  AscNullsLast = "asc_nulls_last",
  DescNullsLast = "desc_nulls_last",
}
export type StandardInfraServiceCreateRequest = {
  description?: string;
  serviceName: string;
  status: ProjectSchedulerStatus;
  version: string;
};
export type StandardInfraServiceFilter = { status?: ProjectSchedulerStatus };
export type StandardInfraServiceListRequest = {
  filter?: StandardInfraServiceFilter;
  page: number;
  search?: string;
  size: number;
  sort?: StandardInfraServiceSort;
};
export type StandardInfraServiceListResponse = {
  count: number;
  data: Array<StandardInfraServiceView>;
};
export type StandardInfraServiceNameListRequest = { search?: string };
export type StandardInfraServiceNameListResponse = {
  data: Array<StandardInfraServiceNameView>;
};
export type StandardInfraServiceNameView = { id: string; serviceName: string };
export type StandardInfraServiceResponse = {
  createdAt: string;
  description?: string;
  id: string;
  serviceName: string;
  status: ProjectSchedulerStatus;
  version: string;
};
export type StandardInfraServiceSort = {
  createdAt?: SortOrder;
  serviceName?: SortOrder;
  status?: SortOrder;
};
export type StandardInfraServiceUpdateRequest = {
  description?: string;
  serviceName?: string;
  status?: ProjectSchedulerStatus;
  version?: string;
};
export type StandardInfraServiceView = {
  description?: string;
  id: string;
  serviceName: string;
  status: string;
  version: string;
};
export type StepDetailView = {
  createdAt?: string;
  deletedAt?: string;
  description?: string;
  id: string;
  name?: string;
  tasks: Array<TaskDetailView>;
  updatedAt?: string;
};
export type SuccessResponseBoolean = { data?: boolean; success: boolean };
export type SuccessResponseString = { data?: string; success: boolean };
export type SuccessResponseVoid = { data?: Void; success: boolean };
export type TagCreateRequest = { name: string };
export type TagListResponse = { data: Array<TagResponse> };
export type TagResponse = {
  color: string;
  id: string;
  name: string;
  tagType: TagType;
};
export enum TagType {
  TechStack = "tech_stack",
  BusinessDomain = "business_domain",
  SkillSet = "skill_set",
}
export type TagView = { color?: string; id: string; name: string };
export type TaskDetailView = {
  changedBy?: UserMinimalView;
  createdAt: string;
  deadlineAt?: string;
  deletedAt?: string;
  description?: string;
  evidence?: string;
  id: string;
  name?: string;
  option?: string;
  signature?: string;
  status?: string;
  type?: string;
  updatedAt?: string;
  updatedResponse?: string;
  userOnboardingTaskId: string;
};
export enum TaskStatus {
  NotStarted = "not_started",
  Skipped = "skipped",
  InProgress = "in_progress",
  Completed = "completed",
}
export type ThirdPartyServiceListRequest = {
  page: number;
  size: number;
  sort?: ThirdPartyServiceSort;
};
export type ThirdPartyServiceListResponse = {
  count: number;
  data: Array<ThirdPartyServiceResponse>;
};
export type ThirdPartyServiceResponse = {
  createdAt?: string;
  description?: string;
  id: string;
  name: string;
};
export type ThirdPartyServiceSort = { createdAt?: SortOrder; name?: SortOrder };
export enum ThirdPartyStatus {
  NotConnected = "not_connected",
  Processing = "processing",
  Connected = "connected",
  Disconnected = "disconnected",
}
export enum ThirdPartySyncStatus {
  Syncing = "syncing",
  NotStarted = "not_started",
}
export type ThirdPartyView = { description?: string; id: string; name: string };
export type Title = { from?: string };
export type User = { login: string };
export type UserActivateRequest = { token: string };
export type UserActivityDetailView = {
  changedBy?: UserMinimalView;
  createdAt?: string;
  email?: string;
  id: string;
  message?: string;
  title?: string;
  user?: UserMinimalView;
};
export type UserActivityFilter = {
  changedBy?: string;
  endDate?: string;
  startDate?: string;
  userId?: string;
};
export type UserActivityListRequest = {
  filter?: UserActivityFilter;
  page: number;
  search?: string;
  size: number;
  sort?: UserActivitySort;
};
export type UserActivityListResponse = {
  count: number;
  data: Array<UserActivityDetailView>;
};
export type UserActivitySort = {
  changedBy?: SortOrder;
  createdAt?: SortOrder;
  name?: SortOrder;
};
export type UserCelebrationFilter = { location?: string };
export type UserCelebrationOverview = {
  celebration?: string;
  user: UserMinimalView;
};
export type UserCelebrationOverviewRequest = { filter?: UserCelebrationFilter };
export type UserCelebrationOverviewResponse = {
  data: Array<UserCelebrationOverview>;
};
export type UserCreateRequest = {
  contract: ContractType;
  dayOfStart: string;
  departmentId?: string;
  email: string;
  firstName: string;
  lastName: string;
  location: LocationType;
  managerId?: string;
  roleName: string;
  title: UserTitleType;
};
export type UserFilter = {
  contract?: string;
  dateOfStart?: string;
  location?: string;
  roleName?: string;
  status?: UserStatus;
  title?: string;
};
export type UserHybridWorkRegisterResponse = {
  createdAt: string;
  date: string;
  deletedAt?: string;
  id: string;
  updatedAt?: string;
  userId: string;
};
export type UserHybridWorkRegistrationListRequest = {
  endDate: string;
  page: number;
  search?: string;
  size: number;
  startDate: string;
};
export type UserHybridWorkRegistrationListResponse = {
  count: number;
  data: Array<UserHybridWorkScheduleResponse>;
};
export type UserHybridWorkRegistrationRequest = {
  deRegistrationDates?: Array<string>;
  registrationDates?: Array<string>;
};
export type UserHybridWorkRegistrationResponse = {
  count: number;
  data: Array<UserHybridWorkRegisterResponse>;
};
export type UserHybridWorkScheduleResponse = {
  registrationDates: Array<string>;
  userId: string;
  userName: string;
};
export type UserHybridWorkSchedulesRequest = {
  endDate: string;
  startDate: string;
};
export type UserHybridWorkTrackingDetailView = {
  trackingDates: Array<string>;
  userId: string;
  userName: string;
};
export type UserHybridWorkTrackingListRequest = {
  endDate: string;
  page: number;
  search?: string;
  size: number;
  sort?: UserHybridWorkTrackingSort;
  startDate: string;
};
export type UserHybridWorkTrackingListResponse = {
  count: number;
  data: Array<UserHybridWorkTrackingDetailView>;
};
export type UserHybridWorkTrackingResponse = {
  createdAt: string;
  date: string;
  id: string;
  updatedAt?: string;
  userId: string;
};
export type UserHybridWorkTrackingSort = {
  createdAt?: SortOrder;
  date?: SortOrder;
  userName?: SortOrder;
};
export type UserLeaveRequestCreateRequest = {
  leaveDates: Array<DateDetails>;
  leaveRequestType: LeaveRequestType;
  userNote?: string;
};
export type UserLeaveRequestFilter = {
  leaveRequestType?: string;
  status?: LeaveRequestStatus;
  userId?: string;
};
export type UserLeaveRequestListRequest = {
  filter?: UserLeaveRequestFilter;
  page: number;
  search?: string;
  size: number;
};
export type UserLeaveRequestListResponse = {
  count: number;
  data: Array<UserLeaveRequestResponse>;
};
export type UserLeaveRequestResponse = {
  createdAt?: string;
  decisionAt?: string;
  id: string;
  leaveDates: Array<DateDetails>;
  leaveRequestType: string;
  manager?: UserMinimalView;
  managerNote?: string;
  status: string;
  user?: UserMinimalView;
  userNote?: string;
};
export type UserLeaveRequestUpdateMeRequest = {
  leaveDates?: Array<DateDetails>;
  leaveRequestType?: LeaveRequestType;
  managerNote?: string;
  status?: LeaveRequestStatus;
  userNote?: string;
};
export type UserLeaveRequestUpdateRequest = {
  managerNote?: string;
  status: LeaveRequestStatus;
};
export type UserListMinimalRequest = {
  filter?: UserFilter;
  page: number;
  search?: string;
  size: number;
  sort?: UserSort;
};
export type UserListMinimalResponse = {
  count: number;
  data: Array<UserMinimalResponse>;
};
export type UserListRequest = {
  filter?: UserFilter;
  page: number;
  search?: string;
  size: number;
  sort?: UserSort;
};
export type UserListResponse = { count: number; data: Array<UserResponse> };
export type UserMeetingListResponse = {
  data: Array<SchedulerResponseV2SchedulerResponseV2MeetingSchedulerDetail>;
};
export type UserMinimalResponse = {
  email?: string;
  id: string;
  location?: LocationType;
  name?: string;
  pictureUrl?: string;
  title?: UserTitleEnumResponse;
  uniqueId?: string;
};
export type UserMinimalView = {
  email?: string;
  id: string;
  location?: LocationType;
  name?: string;
  pictureUrl?: string;
  title?: UserTitleType;
  uniqueId?: string;
};
export type UserOnboardingActivityDetailView = {
  changedBy?: UserMinimalView;
  createdAt?: string;
  email?: string;
  id: string;
  message?: string;
  title?: string;
  user?: UserMinimalView;
};
export type UserOnboardingActivityFilter = {
  changedBy?: string;
  endDate?: string;
  startDate?: string;
  userId?: string;
};
export type UserOnboardingActivityListRequest = {
  filter?: UserOnboardingActivityFilter;
  page: number;
  search?: string;
  size: number;
  sort?: UserOnboardingActivitySort;
};
export type UserOnboardingActivityListResponse = {
  count: number;
  data: Array<UserOnboardingActivityDetailView>;
};
export type UserOnboardingActivitySort = {
  changedBy?: SortOrder;
  createdAt?: SortOrder;
  name?: SortOrder;
};
export type UserOnboardingFilter = { dateOfStart?: string; location?: string };
export type UserOnboardingOverview = { user: UserMinimalView };
export type UserOnboardingOverviewRequest = { filter?: UserOnboardingFilter };
export type UserOnboardingOverviewResponse = {
  data: Array<UserOnboardingOverview>;
};
export type UserOnboardingTaskListResponse = {
  steps: Array<StepDetailView>;
  user?: UserMinimalView;
};
export type UserOnboardingTaskResponse = {
  changedBy: UserMinimalView;
  id: string;
  status: TaskStatus;
  taskId: string;
  user: UserMinimalView;
};
export type UserOnboardingTaskUpdateRequest = { status: TaskStatus };
export type UserOverviewRequest = { filter?: UserFilter };
export type UserOverviewResponse = {
  status: Record<string, number>;
  total: number;
};
export type UserPullRequestsDetailView = {
  author?: UserMinimalView;
  createdAt?: string;
  id: string;
  project?: ProjectMinimalView;
  title?: string;
  url?: string;
};
export type UserPullRequestsListRequest = {
  page: number;
  search?: string;
  size: number;
};
export type UserPullRequestsListResponse = {
  count: number;
  data: Array<UserPullRequestsDetailView>;
};
export type UserResponse = {
  awsUsername?: string;
  buddy?: UserMinimalResponse;
  contract?: ContractType;
  createdAt: string;
  criminalRecordUrl?: string;
  dateOfBirth?: string;
  dateOfFullTime?: string;
  dateOfIssue?: string;
  dateOfStart?: string;
  departments?: Array<DepartmentResponse>;
  email: string;
  emergencyCountry?: string;
  emergencyEmail?: string;
  emergencyName?: string;
  emergencyPhoneNumber?: string;
  emergencyPostalCode?: string;
  emergencyProvince?: string;
  emergencyRelationship?: string;
  emergencyStreet?: string;
  firstName?: string;
  gender?: GenderType;
  githubUsername?: string;
  id: string;
  idCard?: string;
  lastName?: string;
  linkedinUrl?: string;
  location?: LocationType;
  loggedInAt?: string;
  manager?: UserMinimalResponse;
  martialStatus?: MartialStatus;
  name?: string;
  onboardingCompletedAt?: string;
  onboardingStatus?: GeneralOnboardingStatus;
  personalAddress?: string;
  personalCountry?: string;
  personalEmail?: string;
  personalPostalCode?: string;
  personalProvince?: string;
  phoneNumber?: string;
  pictureUrl?: string;
  placeOfIssue?: string;
  projects?: Array<ProjectResponse>;
  referral?: UserMinimalResponse;
  remote: boolean;
  role: RoleResponse;
  skillSets?: Array<TagView>;
  socialInsuranceNumber?: string;
  status: UserStatus;
  taxCode?: string;
  title?: UserTitleEnumResponse;
  uniqueId?: string;
};
export type UserSort = {
  awsUsername?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  githubUsername?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  loggedInAt?: SortOrder;
  manager?: SortOrder;
  name?: SortOrder;
  roleName?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  uniqueId?: SortOrder;
};
export enum UserStatus {
  Active = "active",
  Deactivated = "deactivated",
  Pending = "pending",
}
export type UserTitleCreateRequest = { name: string };
export type UserTitleEnumResponse = { id?: UserTitleType; name?: string };
export type UserTitleListResponse = {
  count: number;
  data: Array<UserTitleResponse>;
};
export type UserTitleOverviewAliasResponse = {
  data: Record<string, UserTitleOverviewResponse>;
};
export type UserTitleOverviewByTitleResponse = {
  displayName: string;
  total: number;
};
export type UserTitleOverviewFilter = { location?: string };
export type UserTitleOverviewRequest = { filter?: UserTitleOverviewFilter };
export type UserTitleOverviewResponse = {
  displayName: string;
  titles: Record<string, UserTitleOverviewByTitleResponse>;
  total: number;
};
export type UserTitleResponse = { id: string; name?: string };
export enum UserTitleType {
  InternAiEngineer = "intern_ai_engineer",
  AssociateAiEngineer = "associate_ai_engineer",
  AiEngineer = "ai_engineer",
  SeniorAiEngineer = "senior_ai_engineer",
  StaffAiEngineer = "staff_ai_engineer",
  InternDataEngineer = "intern_data_engineer",
  AssociateDataEngineer = "associate_data_engineer",
  DataEngineer = "data_engineer",
  SeniorDataEngineer = "senior_data_engineer",
  StaffDataEngineer = "staff_data_engineer",
  InternSoftwareEngineer = "intern_software_engineer",
  AssociateSoftwareEngineer = "associate_software_engineer",
  SoftwareEngineer = "software_engineer",
  SeniorSoftwareEngineer = "senior_software_engineer",
  StaffSoftwareEngineer = "staff_software_engineer",
  InternSystemEngineer = "intern_system_engineer",
  AssociateSystemEngineer = "associate_system_engineer",
  SystemEngineer = "system_engineer",
  SeniorSystemEngineer = "senior_system_engineer",
  StaffSystemEngineer = "staff_system_engineer",
  BusinessDevelopmentExecutive = "business_development_executive",
  BusinessDevelopmentManager = "business_development_manager",
  Ceo = "ceo",
  Coo = "coo",
  Cto = "cto",
  EngineeringManager = "engineering_manager",
  SeniorEngineeringManager = "senior_engineering_manager",
  HrAssistant = "hr_assistant",
  HrManager = "hr_manager",
  MarketingExecutive = "marketing_executive",
  SeniorMarketingExecutive = "senior_marketing_executive",
  ProductDesigner = "product_designer",
  SeniorProductDesigner = "senior_product_designer",
  SeniorProductManager = "senior_product_manager",
  QaEngineer = "qa_engineer",
  SeniorQaEngineer = "senior_qa_engineer",
  QaManager = "qa_manager",
  SecurityEngineer = "security_engineer",
  FirmwareEngineer = "firmware_engineer",
  SeniorFirmwareEngineer = "senior_firmware_engineer",
  SeniorTechnicalRecruiter = "senior_technical_recruiter",
  TechnicalRecruiter = "technical_recruiter",
}
export type UserTitleUpdateRequest = { name: string };
export type UserUpdateMeRequest = {
  dateOfBirth?: string;
  dateOfIssue?: string;
  emergencyCountry?: string;
  emergencyEmail?: string;
  emergencyName?: string;
  emergencyPhoneNumber?: string;
  emergencyPostalCode?: string;
  emergencyProvince?: string;
  emergencyRelationship?: string;
  emergencyStreet?: string;
  firstName?: string;
  gender?: GenderType;
  githubUsername?: string;
  idCard?: string;
  lastName?: string;
  linkedinUrl?: string;
  location?: LocationType;
  martialStatus?: MartialStatus;
  personalAddress?: string;
  personalCountry?: string;
  personalEmail?: string;
  personalPostalCode?: string;
  personalProvince?: string;
  phoneNumber?: string;
  placeOfIssue?: string;
  referralId?: string;
  skillSets?: Array<string>;
  socialInsuranceNumber?: string;
  taxCode?: string;
};
export type UserUpdateRequest = {
  buddyId?: string;
  contract?: ContractType;
  dateOfBirth?: string;
  dateOfFullTime?: string;
  dateOfIssue?: string;
  dateOfStart?: string;
  githubUsername?: string;
  idCard?: string;
  linkedinUrl?: string;
  location?: LocationType;
  managerId?: string;
  placeOfIssue?: string;
  remote?: boolean;
  roleName?: string;
  socialInsuranceNumber?: string;
  status?: UserStatus;
  taxCode?: string;
  title?: UserTitleType;
};
export type UserWithRoleResponse = {
  awsUsername?: string;
  createdBy?: UserMinimalView;
  email?: string;
  githubUsername?: string;
  id: string;
  name?: string;
  pictureUrl?: string;
  role?: RoleResponse;
  title?: UserTitleEnumResponse;
  uniqueId?: string;
  userServiceId?: string;
};
export type Void = "UNKNOWN_TYPE";
export enum WorkingType {
  Onsite = "onsite",
  Hybrid = "hybrid",
  Remote = "remote",
}
