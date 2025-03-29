export type Changes = {
  title?: Title | null;
};
export type CompanyWhitelistIpCreateRequest = {
  description?: string | null;
  ipAddress: string;
  location?: LocationType | null;
};
export type CompanyWhitelistIpFilter = {
  status?: CompanyWhitelistIpStatus | null;
};
export type CompanyWhitelistIpListRequest = {
  filter?: CompanyWhitelistIpFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: CompanyWhitelistIpSort | null;
};
export type CompanyWhitelistIpListResponse = {
  count: number;
  data: Array<CompanyWhitelistIpResponse>;
};
export type CompanyWhitelistIpResponse = {
  createdAt: string;
  description?: string | null;
  id: string;
  ipAddress: string;
  location?: LocationType | null;
  status: CompanyWhitelistIpStatus;
};
export type CompanyWhitelistIpSort = {
  createdAt?: SortOrder | null;
  description?: SortOrder | null;
  ipAddress?: SortOrder | null;
  location?: SortOrder | null;
  status?: SortOrder | null;
};

export enum CompanyWhitelistIpStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}
export type CompanyWhitelistIpUpdateRequest = {
  description?: string | null;
  ipAddress: string;
  location?: LocationType | null;
  status: CompanyWhitelistIpStatus;
};

export enum ContractType {
  INTERN = "INTERN",
  PART_TIME = "PART_TIME",
  FULL_TIME = "FULL_TIME",
}
export type DateDetails = {
  day: string;
  duration: LeaveDurationType;
};
export type DepartmentAddUserRequest = {
  roleName: string;
  userId: string;
};
export type DepartmentCreateRequest = {
  description?: string | null;
  name: string;
};
export type DepartmentDetailResponse = DepartmentResponse & {
  createdAt?: string;
  description?: string | null;
  id?: string;
  name?: string;
  pictureUrl?: string | null;
  role?: RoleResponse | null;
  roles?: Record<string, Array<UserWithRoleResponse>> | null;
  uniqueId?: string | null;
  users?: Array<UserWithRoleResponse> | null;
};
export type DepartmentListRequest = {
  page: number;
  search?: string | null;
  size: number;
  sort?: DepartmentSort | null;
};
export type DepartmentListResponse = {
  count: number;
  data: Array<DepartmentDetailResponse>;
};
export type DepartmentOverviewResponse = {
  total: number;
};
export type DepartmentResponse = {
  createdAt?: string | null;
  description?: string | null;
  id: string;
  name: string;
  pictureUrl?: string | null;
  role?: RoleResponse | null;
  uniqueId?: string | null;
};
export type DepartmentSort = {
  createdAt?: SortOrder | null;
  name?: SortOrder | null;
  uniqueId?: SortOrder | null;
};
export type DepartmentUpdateRequest = {
  description?: string | null;
  name?: string | null;
};
export type DepartmentUpdateUserRequest = {
  roleName: string;
  userId: string;
};
export type DepartmentView = {
  id: string;
  name: string;
  pictureUrl?: string | null;
  roleName?: string | null;
  uniqueId?: string | null;
};

export enum EnableExternalUsers {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}

export enum FounderType {
  TECHNICAL = "TECHNICAL",
  NON_TECHNICAL = "NON_TECHNICAL",
  SPARTAN = "SPARTAN",
}

export enum GenderType {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export enum GeneralOnboardingStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}
export type GitHubWebHookPullRequest = {
  draft: boolean;
  htmlUrl?: string | null;
  number: number;
  state: string;
  title: string;
  user: User;
};
export type GitHubWebhookPayload = {
  action: string;
  changes?: Changes | null;
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
  referralEmail?: string | null;
  resumeUrl: string;
  website?: string | null;
};
export type HiringJobCreateRequest = {
  benefits: Array<string>;
  contractType: ContractType;
  dateOfDeadline?: string | null;
  departmentId?: string | null;
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
  contractType?: string | null;
  createdBy?: string | null;
  dateOfDeadline?: string | null;
  departmentId?: string | null;
  location?: LocationType | null;
  status?: HiringJobStatus | null;
  workingType?: WorkingType | null;
};
export type HiringJobListRequest = {
  filter?: HiringJobFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: HiringJobSort | null;
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
  benefits?: Array<string> | null;
  contractType?: ContractType | null;
  createdAt: string;
  createdBy?: UserMinimalView | null;
  dateOfDeadline?: string | null;
  department?: DepartmentView | null;
  departmentId?: string | null;
  description?: string | null;
  id: string;
  keyResponsibilities?: Array<string> | null;
  location?: LocationType | null;
  preferredQualifications?: Array<string> | null;
  requiredQualifications?: Array<string> | null;
  status?: HiringJobStatus | null;
  title: string;
  workingType?: WorkingType | null;
};
export type HiringJobSort = {
  contractType?: SortOrder | null;
  createdAt?: SortOrder | null;
  dateOfDeadline?: SortOrder | null;
  location?: SortOrder | null;
  status?: SortOrder | null;
  title?: SortOrder | null;
  workingType?: SortOrder | null;
};

export enum HiringJobStatus {
  DRAFT = "DRAFT",
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  ON_HOLD = "ON_HOLD",
}
export type HiringJobUpdateRequest = {
  benefits?: Array<string> | null;
  contractType?: ContractType | null;
  dateOfDeadline?: string | null;
  departmentId?: string | null;
  description?: string | null;
  keyResponsibilities?: Array<string> | null;
  location?: LocationType | null;
  preferredQualifications?: Array<string> | null;
  requiredQualifications?: Array<string> | null;
  status?: HiringJobStatus | null;
  title?: string | null;
  workingType?: WorkingType | null;
};

export enum LeaveDurationType {
  FULLDAY = "FULLDAY",
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON",
}

export enum LeaveRequestStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DENIED = "DENIED",
  CANCELED = "CANCELED",
}

export enum LeaveRequestType {
  VACATION = "VACATION",
  ILLNESS = "ILLNESS",
  MEDICAL_NEED = "MEDICAL_NEED",
  PERSONAL_MATTERS = "PERSONAL_MATTERS",
  FAMILY_MEMBER_DEATH = "FAMILY_MEMBER_DEATH",
  CHILDBIRTH = "CHILDBIRTH",
  ADOPTION = "ADOPTION",
  CHILDCARE = "CHILDCARE",
  EDUCATIONAL_PURPOSES = "EDUCATIONAL_PURPOSES",
}

export enum LocationType {
  DN = "DN",
  HCM = "HCM",
  US = "US",
  UKRAINE = "UKRAINE",
}

export enum MartialStatus {
  SINGLE = "SINGLE",
  MARRIED = "MARRIED",
  COMMON_LAW = "COMMON_LAW",
  DOMESTIC_PARTNERSHIP = "DOMESTIC_PARTNERSHIP",
}
export type MessageTemplateFilter = {
  status?: MessageTemplateStatus | null;
  type?: MessageTemplateType | null;
};
export type MessageTemplateListRequest = {
  filter?: MessageTemplateFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: MessageTemplateSort | null;
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
  template?: string | null;
  type: MessageTemplateType;
  updatedAt?: string | null;
  updatedBy?: MessageTemplateResponseUserUpdate | null;
};
export type MessageTemplateResponseUserUpdate = {
  id: string;
  name: string;
};
export type MessageTemplateSort = {
  createdAt?: SortOrder | null;
  name?: SortOrder | null;
  status?: SortOrder | null;
  type?: SortOrder | null;
};

export enum MessageTemplateStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}

export enum MessageTemplateType {
  SLACK = "SLACK",
  EMAIL = "EMAIL",
}
export type MessageTemplateUpdateRequest = {
  status?: MessageTemplateStatus | null;
  template?: string | null;
};
export type MessageTemplateView = {
  id: string;
  name: string;
  status: string;
  type: string;
};
export type Owner = {
  login: string;
};
export type PolicyView = {
  description?: string | null;
  name: string;
};
export type ProjectActivityDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt?: string | null;
  id: string;
  message?: string | null;
  project?: ProjectMinimalView | null;
  title?: string | null;
};
export type ProjectActivityFilter = {
  changedBy?: string | null;
  endDate?: string | null;
  projectId?: string | null;
  startDate?: string | null;
};
export type ProjectActivityListRequest = {
  filter?: ProjectActivityFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: ProjectActivitySort | null;
};
export type ProjectActivityListResponse = {
  count: number;
  data: Array<ProjectActivityDetailView>;
};
export type ProjectActivitySort = {
  changedBy?: SortOrder | null;
  createdAt?: SortOrder | null;
  projectName?: SortOrder | null;
};
export type ProjectAddUserRequest = {
  roleName: string;
  userId: string;
};
export type ProjectCreateRequest = {
  billable?: number | null;
  description?: string | null;
  founderName?: string | null;
  name: string;
  pictureUrl?: string | null;
  slackChannel?: string | null;
  status?: ProjectStatus | null;
  type?: ProjectType | null;
  users?: Array<ProjectAddUserRequest> | null;
};
export type ProjectDetailResponse = ProjectResponse & {
  billable?: number | null;
  createdAt?: string;
  createdBy?: UserMinimalResponse | null;
  description?: string | null;
  founderName?: string | null;
  founderType?: FounderType | null;
  githubOrg?: string | null;
  id?: string;
  meetingScheduler?: Array<ProjectMeetingReminderMinimalView> | null;
  name?: string;
  pictureUrl?: string | null;
  role?: RoleResponse | null;
  roles?: Record<string, Array<UserWithRoleResponse>> | null;
  slackChannel?: string | null;
  slackGroup?: string | null;
  status?: ProjectStatus | null;
  type?: ProjectType | null;
  uniqueId?: string | null;
  users?: Array<UserWithRoleResponse> | null;
};
export type ProjectFilter = {
  createdBy?: string | null;
  status?: ProjectStatus | null;
  type?: ProjectType | null;
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
  serviceId?: string | null;
  status?: ProjectSchedulerStatus | null;
  version?: string | null;
};
export type ProjectInfraServiceView = {
  createdAt: string;
  id: string;
  serviceName: string;
  status: string;
  version: string;
};
export type ProjectListRequest = {
  filter?: ProjectFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: ProjectSort | null;
};
export type ProjectListResponse = {
  count: number;
  data: Array<ProjectDetailResponse>;
};
export type ProjectMeetingReminderMinimalView = {
  channel: string;
  durationInMinutes?: number | null;
  id: string;
  meetingName?: string | null;
  meetingUrl: string;
  scheduleExpression: string;
  skipHoliday?: boolean | null;
  status: ProjectSchedulerStatus;
};
export type ProjectMinimalView = {
  id: string;
  name: string;
  pictureUrl?: string | null;
  uniqueId?: string | null;
};
export type ProjectOverviewResponse = {
  status: Record<string, number>;
  total: number;
};
export type ProjectPresignedUrlResponse = {
  key: string;
  presignedUrl: string;
};
export type ProjectPulRequestNotificationUpdateRequest = {
  channel?: string | null;
  enableExternalUsers?: EnableExternalUsers | null;
  repositories?: Array<string> | null;
  status?: ProjectSchedulerStatus | null;
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
  billable?: number | null;
  createdAt?: string | null;
  createdBy?: UserMinimalResponse | null;
  description?: string | null;
  founderName?: string | null;
  founderType?: FounderType | null;
  githubOrg?: string | null;
  id: string;
  name: string;
  pictureUrl?: string | null;
  role?: RoleResponse | null;
  slackChannel?: string | null;
  slackGroup?: string | null;
  status?: ProjectStatus | null;
  type?: ProjectType | null;
  uniqueId?: string | null;
};
export type ProjectSchedulerActivityDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt?: string | null;
  id: string;
  message?: string | null;
  project?: ProjectMinimalView | null;
  schedulerType?: string | null;
  title?: string | null;
};
export type ProjectSchedulerActivityFilter = {
  changedBy?: string | null;
  projectId?: string | null;
  schedulerType?: string | null;
};
export type ProjectSchedulerActivityListRequest = {
  filter?: ProjectSchedulerActivityFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: ProjectSchedulerActivitySort | null;
};
export type ProjectSchedulerActivityListResponse = {
  count: number;
  data: Array<ProjectSchedulerActivityDetailView>;
};
export type ProjectSchedulerActivitySort = {
  changedBy?: SortOrder | null;
  createdAt?: SortOrder | null;
  projectName?: SortOrder | null;
  schedulerType?: SortOrder | null;
};
export type ProjectSchedulerCreateRequest = {
  channel: string;
  schedulerDetails: Record<string, unknown>;
  status: ProjectSchedulerStatus;
};
export type ProjectSchedulerListRequest = {
  page: number;
  size: number;
  sort?: ProjectSchedulerSort | null;
};
export type ProjectSchedulerSort = {
  scheduleExpression?: SortOrder | null;
};

export enum ProjectSchedulerStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}
export type ProjectSchedulerUpdateRequest = {
  channel?: string | null;
  schedulerDetails?: Record<string, unknown> | null;
  status?: ProjectSchedulerStatus | null;
};
export type ProjectServiceActivityDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt?: string | null;
  id: string;
  message?: string | null;
  project?: ProjectMinimalView | null;
  service?: ThirdPartyView | null;
  title?: string | null;
};
export type ProjectServiceActivityFilter = {
  changedBy?: string | null;
  endDate?: string | null;
  projectId?: string | null;
  serviceId?: string | null;
  startDate?: string | null;
};
export type ProjectServiceActivityListRequest = {
  filter?: ProjectServiceActivityFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: ProjectServiceActivitySort | null;
};
export type ProjectServiceActivityListResponse = {
  count: number;
  data: Array<ProjectServiceActivityDetailView>;
};
export type ProjectServiceActivitySort = {
  changedBy?: SortOrder | null;
  createdAt?: SortOrder | null;
  projectName?: SortOrder | null;
  serviceName?: SortOrder | null;
};
export type ProjectServiceConnectionResponse = {
  connectedAt?: string | null;
  connectionDetails?: Record<string, unknown> | null;
  createdAt?: string | null;
  disconnectedAt?: string | null;
  id: string;
  projectId: string;
  serviceId: string;
  status: ThirdPartyStatus;
  syncStatus?: ThirdPartySyncStatus | null;
};
export type ProjectServiceConnectionTestRequest = {
  connectionDetails: Record<string, unknown>;
  encryptedDetails?: Record<string, unknown> | null;
  serviceId: string;
};
export type ProjectServiceConnectionUpsertRequest = {
  connectionDetails?: Record<string, unknown> | null;
  encryptedDetails?: Record<string, unknown> | null;
  serviceId: string;
};
export type ProjectSort = {
  createdAt?: SortOrder | null;
  name?: SortOrder | null;
  status?: SortOrder | null;
  uniqueId?: SortOrder | null;
};

export enum ProjectStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROPOSAL = "IN_PROPOSAL",
  ON_GOING = "ON_GOING",
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export enum ProjectType {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
}
export type ProjectUpdateRequest = {
  billable?: number | null;
  description?: string | null;
  founderName?: string | null;
  founderType?: FounderType | null;
  githubOrg?: string | null;
  name?: string | null;
  pictureUrl?: string | null;
  slackChannel?: string | null;
  slackGroup?: string | null;
  status?: ProjectStatus | null;
  type?: ProjectType | null;
};
export type ProjectUpdateUserRequest = {
  roleName: string;
  userId: string;
};
export type ProjectUserServiceActivityDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt?: string | null;
  id: string;
  message?: string | null;
  project?: ProjectMinimalView | null;
  service?: ThirdPartyView | null;
  title?: string | null;
  user?: UserMinimalView | null;
};
export type ProjectUserServiceActivityFilter = {
  changedBy?: string | null;
  endDate?: string | null;
  projectId?: string | null;
  serviceId?: string | null;
  startDate?: string | null;
};
export type ProjectUserServiceActivityListRequest = {
  filter?: ProjectUserServiceActivityFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: ProjectUserServiceActivitySort | null;
};
export type ProjectUserServiceActivityListResponse = {
  count: number;
  data: Array<ProjectUserServiceActivityDetailView>;
};
export type ProjectUserServiceActivitySort = {
  changedBy?: SortOrder | null;
  createdAt?: SortOrder | null;
  projectName?: SortOrder | null;
  serviceName?: SortOrder | null;
};
export type RefreshTokenRequest = {
  refreshToken: string;
};
export type Repository = {
  fullName: string;
  name?: string | null;
  owner: Owner;
  htmlUrl: string;
};
export type RoleFilter = {
  name?: string | null;
};
export type RoleListRequest = {
  filter?: RoleFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: RoleSort | null;
};
export type RoleListResponse = {
  count: number;
  data: Array<RoleResponse>;
};
export type RolePoliciesResponse = {
  description?: string | null;
  displayName?: string | null;
  name: string;
  policies: Array<PolicyView>;
};
export type RoleResponse = {
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
};

export enum RoleScope {
  ORG = "ORG",
  PROJECT = "PROJECT",
  DEPARTMENT = "DEPARTMENT",
}
export type RoleSort = {
  name?: SortOrder | null;
};

export enum SchedulerEventType {
  PROJECT_UPDATE_STATUS_REMINDER = "PROJECT_UPDATE_STATUS_REMINDER",
  PROJECT_MEETING_REMINDER = "PROJECT_MEETING_REMINDER",
  PROJECT_INFRA_SERVICE_VERSION_REMINDER = "PROJECT_INFRA_SERVICE_VERSION_REMINDER",
}
export type SchedulerResponse = {
  channel?: string | null;
  id: string;
  schedulerDetails: Record<string, unknown>;
  status: ProjectSchedulerStatus;
};
export type SchedulerResponseV2MeetingSchedulerDetail = {
  durationInMinutes?: number | null;
  meetingName?: string | null;
  meetingUrl: string;
  scheduleExpression: string;
  skipHoliday?: boolean | null;
};
export type SchedulerResponseV2_SchedulerResponseV2MeetingSchedulerDetail_ = {
  channel?: string | null;
  id: string;
  project: ProjectMinimalView;
  schedulerDetails: SchedulerResponseV2MeetingSchedulerDetail;
  status: ProjectSchedulerStatus;
};
export type SignInRequest = {
  code: string;
};
export type SignInResponse = {
  accessToken: string;
  expiresIn?: number | null;
  refreshToken: string;
};

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
  ASC_NULLS_FIRST = "ASC_NULLS_FIRST",
  DESC_NULLS_FIRST = "DESC_NULLS_FIRST",
  ASC_NULLS_LAST = "ASC_NULLS_LAST",
  DESC_NULLS_LAST = "DESC_NULLS_LAST",
}
export type StandardInfraServiceCreateRequest = {
  description?: string | null;
  serviceName: string;
  status: ProjectSchedulerStatus;
  version: string;
};
export type StandardInfraServiceFilter = {
  status?: ProjectSchedulerStatus | null;
};
export type StandardInfraServiceListRequest = {
  filter?: StandardInfraServiceFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: StandardInfraServiceSort | null;
};
export type StandardInfraServiceListResponse = {
  count: number;
  data: Array<StandardInfraServiceView>;
};
export type StandardInfraServiceNameListRequest = {
  search?: string | null;
};
export type StandardInfraServiceNameListResponse = {
  data: Array<StandardInfraServiceNameView>;
};
export type StandardInfraServiceNameView = {
  id: string;
  serviceName: string;
};
export type StandardInfraServiceResponse = {
  createdAt: string;
  description?: string | null;
  id: string;
  serviceName: string;
  status: ProjectSchedulerStatus;
  version: string;
};
export type StandardInfraServiceSort = {
  createdAt?: SortOrder | null;
  serviceName?: SortOrder | null;
  status?: SortOrder | null;
};
export type StandardInfraServiceUpdateRequest = {
  description?: string | null;
  serviceName?: string | null;
  status?: ProjectSchedulerStatus | null;
  version?: string | null;
};
export type StandardInfraServiceView = {
  description?: string | null;
  id: string;
  serviceName: string;
  status: string;
  version: string;
};
export type StepDetailView = {
  createdAt?: string | null;
  deletedAt?: string | null;
  description?: string | null;
  id: string;
  name?: string | null;
  tasks: Array<TaskDetailView>;
  updatedAt?: string | null;
};
export type SuccessResponse_Boolean_ = {
  data?: boolean | null;
  success: boolean;
};
export type SuccessResponse_String_ = {
  data?: string | null;
  success: boolean;
};
export type SuccessResponse_Void_ = {
  data?: Void | null;
  success: boolean;
};
export type TagCreateRequest = {
  name: string;
};
export type TagListResponse = {
  data: Array<TagResponse>;
};
export type TagResponse = {
  color: string;
  id: string;
  name: string;
  tagType: TagType;
};

export enum TagType {
  TECH_STACK = "TECH_STACK",
  BUSINESS_DOMAIN = "BUSINESS_DOMAIN",
  SKILL_SET = "SKILL_SET",
}
export type TagView = {
  color?: string | null;
  id: string;
  name: string;
};
export type TaskDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt: string;
  deadlineAt?: string | null;
  deletedAt?: string | null;
  description?: string | null;
  evidence?: string | null;
  id: string;
  name?: string | null;
  option?: string | null;
  signature?: string | null;
  status?: string | null;
  type?: string | null;
  updatedAt?: string | null;
  updatedResponse?: string | null;
  userOnboardingTaskId: string;
};

export enum TaskStatus {
  NOT_STARTED = "NOT_STARTED",
  SKIPPED = "SKIPPED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}
export type ThirdPartyServiceListRequest = {
  page: number;
  size: number;
  sort?: ThirdPartyServiceSort | null;
};
export type ThirdPartyServiceListResponse = {
  count: number;
  data: Array<ThirdPartyServiceResponse>;
};
export type ThirdPartyServiceResponse = {
  createdAt?: string | null;
  description?: string | null;
  id: string;
  name: string;
};
export type ThirdPartyServiceSort = {
  createdAt?: SortOrder | null;
  name?: SortOrder | null;
};

export enum ThirdPartyStatus {
  NOT_CONNECTED = "NOT_CONNECTED",
  PROCESSING = "PROCESSING",
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

export enum ThirdPartySyncStatus {
  SYNCING = "SYNCING",
  NOT_STARTED = "NOT_STARTED",
}
export type ThirdPartyView = {
  description?: string | null;
  id: string;
  name: string;
};
export type Title = {
  from?: string | null;
};
export type User = {
  login: string;
};
export type UserActivateRequest = {
  token: string;
};
export type UserActivityDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt?: string | null;
  email?: string | null;
  id: string;
  message?: string | null;
  title?: string | null;
  user?: UserMinimalView | null;
};
export type UserActivityFilter = {
  changedBy?: string | null;
  endDate?: string | null;
  startDate?: string | null;
  userId?: string | null;
};
export type UserActivityListRequest = {
  filter?: UserActivityFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: UserActivitySort | null;
};
export type UserActivityListResponse = {
  count: number;
  data: Array<UserActivityDetailView>;
};
export type UserActivitySort = {
  changedBy?: SortOrder | null;
  createdAt?: SortOrder | null;
  name?: SortOrder | null;
};
export type UserCelebrationFilter = {
  location?: string | null;
};
export type UserCelebrationOverview = {
  celebration?: string | null;
  user: UserMinimalResponse;
};
export type UserCelebrationOverviewRequest = {
  filter?: UserCelebrationFilter | null;
};
export type UserCelebrationOverviewResponse = {
  data: Array<UserCelebrationOverview>;
};
export type UserCreateRequest = {
  contract: ContractType;
  dayOfStart: string;
  departmentId?: string | null;
  email: string;
  firstName: string;
  lastName: string;
  location: LocationType;
  managerId?: string | null;
  roleName: string;
  titleId?: string | null;
};
export type UserFilter = {
  contract?: string | null;
  dateOfStart?: string | null;
  location?: string | null;
  roleName?: string | null;
  status?: UserStatus | null;
  titleIds?: Array<string> | null;
};
export type UserHybridWorkRegisterResponse = {
  createdAt: string;
  date: string;
  deletedAt?: string | null;
  id: string;
  updatedAt?: string | null;
  userId: string;
};
export type UserHybridWorkRegistrationListRequest = {
  endDate: string;
  page: number;
  search?: string | null;
  size: number;
  startDate: string;
};
export type UserHybridWorkRegistrationListResponse = {
  count: number;
  data: Array<UserHybridWorkScheduleResponse>;
};
export type UserHybridWorkRegistrationRequest = {
  deRegistrationDates?: Array<string> | null;
  registrationDates?: Array<string> | null;
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
  search?: string | null;
  size: number;
  sort?: UserHybridWorkTrackingSort | null;
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
  updatedAt?: string | null;
  userId: string;
};
export type UserHybridWorkTrackingSort = {
  createdAt?: SortOrder | null;
  date?: SortOrder | null;
  userName?: SortOrder | null;
};
export type UserLeaveRequestCreateRequest = {
  leaveDates: Array<DateDetails>;
  leaveRequestType: LeaveRequestType;
  userNote?: string | null;
};
export type UserLeaveRequestFilter = {
  leaveRequestType?: string | null;
  status?: LeaveRequestStatus | null;
  userId?: string | null;
};
export type UserLeaveRequestListRequest = {
  filter?: UserLeaveRequestFilter | null;
  page: number;
  search?: string | null;
  size: number;
};
export type UserLeaveRequestListResponse = {
  count: number;
  data: Array<UserLeaveRequestResponse>;
};
export type UserLeaveRequestResponse = {
  createdAt?: string | null;
  decisionAt?: string | null;
  id: string;
  leaveDates: Array<DateDetails>;
  leaveRequestType: string;
  manager?: UserMinimalView | null;
  managerNote?: string | null;
  status: string;
  user?: UserMinimalView | null;
  userNote?: string | null;
};
export type UserLeaveRequestUpdateMeRequest = {
  leaveDates?: Array<DateDetails> | null;
  leaveRequestType?: LeaveRequestType | null;
  managerNote?: string | null;
  status?: LeaveRequestStatus | null;
  userNote?: string | null;
};
export type UserLeaveRequestUpdateRequest = {
  managerNote?: string | null;
  status: LeaveRequestStatus;
};
export type UserListMinimalRequest = {
  filter?: UserFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: UserSort | null;
};
export type UserListMinimalResponse = {
  count: number;
  data: Array<UserMinimalResponse>;
};
export type UserListRequest = {
  filter?: UserFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: UserSort | null;
};
export type UserListResponse = {
  count: number;
  data: Array<UserResponse>;
};
export type UserMeetingListResponse = {
  data: Array<SchedulerResponseV2_SchedulerResponseV2MeetingSchedulerDetail_>;
};
export type UserMinimalResponse = {
  email?: string | null;
  id: string;
  location?: LocationType | null;
  name?: string | null;
  pictureUrl?: string | null;
  title?: UserTitleResponse | null;
  uniqueId?: string | null;
};
export type UserMinimalView = {
  email?: string | null;
  id: string;
  location?: LocationType | null;
  name?: string | null;
  pictureUrl?: string | null;
  title?: string | null;
  uniqueId?: string | null;
};
export type UserOnboardingActivityDetailView = {
  changedBy?: UserMinimalView | null;
  createdAt?: string | null;
  email?: string | null;
  id: string;
  message?: string | null;
  title?: string | null;
  user?: UserMinimalView | null;
};
export type UserOnboardingActivityFilter = {
  changedBy?: string | null;
  endDate?: string | null;
  startDate?: string | null;
  userId?: string | null;
};
export type UserOnboardingActivityListRequest = {
  filter?: UserOnboardingActivityFilter | null;
  page: number;
  search?: string | null;
  size: number;
  sort?: UserOnboardingActivitySort | null;
};
export type UserOnboardingActivityListResponse = {
  count: number;
  data: Array<UserOnboardingActivityDetailView>;
};
export type UserOnboardingActivitySort = {
  changedBy?: SortOrder | null;
  createdAt?: SortOrder | null;
  name?: SortOrder | null;
};
export type UserOnboardingFilter = {
  dateOfStart?: string | null;
  location?: string | null;
};
export type UserOnboardingOverview = {
  user: UserMinimalResponse;
};
export type UserOnboardingOverviewRequest = {
  filter?: UserOnboardingFilter | null;
};
export type UserOnboardingOverviewResponse = {
  data: Array<UserOnboardingOverview>;
};
export type UserOnboardingTaskListResponse = {
  steps: Array<StepDetailView>;
  user?: UserMinimalView | null;
};
export type UserOnboardingTaskResponse = {
  changedBy: UserMinimalView;
  id: string;
  status: TaskStatus;
  taskId: string;
  user: UserMinimalView;
};
export type UserOnboardingTaskUpdateRequest = {
  status: TaskStatus;
};
export type UserOverviewRequest = {
  filter?: UserFilter | null;
};
export type UserOverviewResponse = {
  status: Record<string, number>;
  total: number;
};
export type UserPullRequestsDetailView = {
  author?: UserMinimalView | null;
  createdAt?: string | null;
  id: string;
  project?: ProjectMinimalView | null;
  title?: string | null;
  url?: string | null;
};
export type UserPullRequestsListRequest = {
  page: number;
  search?: string | null;
  size: number;
};
export type UserPullRequestsListResponse = {
  count: number;
  data: Array<UserPullRequestsDetailView>;
};
export type UserResponse = {
  awsUsername?: string | null;
  buddy?: UserMinimalResponse | null;
  contract?: ContractType | null;
  createdAt: string;
  criminalRecordUrl?: string | null;
  dateOfBirth?: string | null;
  dateOfFullTime?: string | null;
  dateOfIssue?: string | null;
  dateOfStart?: string | null;
  departments?: Array<DepartmentResponse> | null;
  email: string;
  emergencyCountry?: string | null;
  emergencyEmail?: string | null;
  emergencyName?: string | null;
  emergencyPhoneNumber?: string | null;
  emergencyPostalCode?: string | null;
  emergencyProvince?: string | null;
  emergencyRelationship?: string | null;
  emergencyStreet?: string | null;
  firstName?: string | null;
  gender?: GenderType | null;
  githubUsername?: string | null;
  id: string;
  idCard?: string | null;
  lastName?: string | null;
  linkedinUrl?: string | null;
  location?: LocationType | null;
  loggedInAt?: string | null;
  manager?: UserMinimalResponse | null;
  martialStatus?: MartialStatus | null;
  name?: string | null;
  onboardingCompletedAt?: string | null;
  onboardingStatus?: GeneralOnboardingStatus | null;
  personalAddress?: string | null;
  personalCountry?: string | null;
  personalEmail?: string | null;
  personalPostalCode?: string | null;
  personalProvince?: string | null;
  phoneNumber?: string | null;
  pictureUrl?: string | null;
  placeOfIssue?: string | null;
  projects?: Array<ProjectResponse> | null;
  referral?: UserMinimalResponse | null;
  remote: boolean;
  role: RoleResponse;
  skillSets?: Array<TagView> | null;
  socialInsuranceNumber?: string | null;
  status: UserStatus;
  taxCode?: string | null;
  title?: UserTitleResponse | null;
  uniqueId?: string | null;
};
export type UserSort = {
  awsUsername?: SortOrder | null;
  createdAt?: SortOrder | null;
  email?: SortOrder | null;
  firstName?: SortOrder | null;
  githubUsername?: SortOrder | null;
  lastName?: SortOrder | null;
  location?: SortOrder | null;
  loggedInAt?: SortOrder | null;
  manager?: SortOrder | null;
  name?: SortOrder | null;
  roleName?: SortOrder | null;
  status?: SortOrder | null;
  title?: SortOrder | null;
  uniqueId?: SortOrder | null;
};

export enum UserStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  PENDING = "PENDING",
}
export type UserTitleCreateRequest = {
  group: string;
  name: string;
};
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
export type UserTitleOverviewFilter = {
  location?: string | null;
};
export type UserTitleOverviewRequest = {
  filter?: UserTitleOverviewFilter | null;
};
export type UserTitleOverviewResponse = {
  displayName: string;
  titles: Record<string, UserTitleOverviewByTitleResponse>;
  total: number;
};
export type UserTitleResponse = {
  group: string;
  id: string;
  name: string;
};
export type UserTitleUpdateRequest = {
  group?: string | null;
  name?: string | null;
};
export type UserUpdateRequest = {
  buddyId?: string | null;
  contract?: ContractType | null;
  dateOfBirth?: string | null;
  dateOfFullTime?: string | null;
  dateOfIssue?: string | null;
  dateOfStart?: string | null;
  emergencyCountry?: string | null;
  emergencyEmail?: string | null;
  emergencyName?: string | null;
  emergencyPhoneNumber?: string | null;
  emergencyPostalCode?: string | null;
  emergencyProvince?: string | null;
  emergencyRelationship?: string | null;
  emergencyStreet?: string | null;
  firstName?: string | null;
  gender?: GenderType | null;
  githubUsername?: string | null;
  idCard?: string | null;
  lastName?: string | null;
  linkedinUrl?: string | null;
  location?: LocationType | null;
  managerId?: string | null;
  martialStatus?: MartialStatus | null;
  personalAddress?: string | null;
  personalCountry?: string | null;
  personalEmail?: string | null;
  personalPostalCode?: string | null;
  personalProvince?: string | null;
  phoneNumber?: string | null;
  placeOfIssue?: string | null;
  referralId?: string | null;
  remote?: boolean | null;
  roleName?: string | null;
  skillSets?: Array<string> | null;
  socialInsuranceNumber?: string | null;
  status?: UserStatus | null;
  taxCode?: string | null;
  titleId?: string | null;
};
export type UserWithRoleResponse = {
  awsUsername?: string | null;
  createdBy?: UserMinimalView | null;
  email?: string | null;
  githubUsername?: string | null;
  id: string;
  name?: string | null;
  pictureUrl?: string | null;
  role?: RoleResponse | null;
  title?: UserTitleResponse | null;
  uniqueId?: string | null;
  userServiceId?: string | null;
};
export type Void = undefined;

export enum WorkingType {
  ONSITE = "ONSITE",
  HYBRID = "HYBRID",
  REMOTE = "REMOTE",
}
